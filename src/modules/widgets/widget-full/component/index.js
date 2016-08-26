import template from './template.jade';
import './styles.scss';
import Q from 'q';
/**
 * @ngdoc directive
 * @name Widget full
 * @module Components
 * @description Component for widget full view profile, where they are displayed all available components dynamically
 * @restrict E
 * @param {Boolean} editProfile If avoidable or not by the user
 * @param {Boolean} showGlobalFeed Whether to display the global feed
 * @param {Boolean} showProfileHeader Whether to display the profile header
 * @param {Boolean} showMarker Whether to display the marker
 * @param {Object} menuOptions Menu options to put title in the GameRoom and hide/show de links
 * @param {Object} levelRow Level row options to hide/show the progressbar and the entire component
 * @element ANY
 */
export default(Customer, LoopBackAuth, $rootScope,$compile, $parse) => ({
    restrict: 'E',
    transclude: true,
    template,
    scope: {
        //Button for edit profile in home
        editProfile: '=?',

        //Global feed in home
        showGlobalFeed: '=?',

        //Profile header in home
        showProfileHeader: '=?',

        //Score units in home
        showMarker: '=?',

        //Menu options
        menuOptions: '=?',

        //Level options
        levelRow: '=?'

    },
    controller: ($scope, $rootScope, Customer, ScoreUnit, Level, LoopBackAuth)=> {

       var loginEvent =  $rootScope.$on("loginSuccess", (event, response)=>{
            getCurrent();
        });

        function getCurrent() {
            Q.async(function*(){
                let response = yield Customer.getCurrent( { filter: { include: ['levels','badges'] } } ).$promise;
                $scope.customer = response;
                $rootScope.customer = {};
                $rootScope.customer.logged = true;


                //-> Score Units
                var customerScores = response.scores;
                var keys = Object.keys( customerScores );

                let ScoreUnits = yield ScoreUnit.find( {
                    filter:
                    {
                        //fields: [ 'id','name', 'image' ] ,
                        where: {
                            id: { inq: keys }
                        }
                    },
                    locale: [ 'es' ]
                } ).$promise
                    .then((ScoreUnits)=>{

                        //console.log( 'ScoreUnits', ScoreUnits );

                        if(!ScoreUnits.length) return;

                        for( var index in ScoreUnits ) {
                            var scoreunit = ScoreUnits[index];
                            if( !scoreunit.id ) {
                                delete ScoreUnits[index];
                                continue;
                            }
                            scoreunit.quantity = customerScores[ scoreunit.id ];
                        }

                        $scope.customer.scoreUnits = ScoreUnits;

                        let zones = $scope.scoreDisplayConfig.zones;
                        //let scoreUnits = $scope.customer.scoreUnits;
                        //let levels = $scope.customer.levels;
                        let badges = $scope.customer.badges;



                        //create scoreunits index
                        let scoreunits = {};
                        for( var index in $scope.customer.scoreUnits ) {
                            var scoreunit = $scope.customer.scoreUnits[index];
                            scoreunits[ scoreunit.id ] = scoreunit;
                        }
                        //console.log("scoreunits", scoreunits);


                        let levels = {};
                        for( var index in $scope.customer.levels ) {
                            var level = $scope.customer.levels[index];
                            levels[ level.id ] = level;
                            levels[ level.id ].scoreUnitName = scoreunits[ level.scoreUnitId ].name;
                            levels[ level.id ].scoreUnitImage = scoreunits[ level.scoreUnitId ].image;
                        }
                        //console.log("levels", levels);

                        for( var row in zones ) {

                            for( var col in zones[row] ) {

                                let zone_col = zones[row][col];

                                //console.log(zones, [row], [col], zone_col, zone_col.model);

                                //console.log("zone_col",zone_col, 'id', zone_col.id, "model ", zone_col.model, scoreunits[zone_col.id]);
                                //console.log('zoneCOLLLL', scoreunits[zone_col]);
                                if ( scoreunits && zone_col.model == 'ScoreUnit' ) {

                                    if ( zone_col.id ) {
                                        zone_col.name = scoreunits[ zone_col.id ].name;
                                        zone_col.quantity = scoreunits[ zone_col.id ].quantity;
                                        zone_col.image = scoreunits[ zone_col.id ].image || "http://hooptap.s3.amazonaws.com/widgets/profile/Simbol-Star.svg";
                                    }
                                    else { // default
                                        zone_col.id = scoreunits[ Object.keys( scoreunits )[0] ].id;
                                        zone_col.name = scoreunits[ Object.keys( scoreunits )[0] ].name;
                                        zone_col.quantity = scoreunits[ Object.keys( scoreunits )[0] ].quantity;
                                        zone_col.image = scoreunits[ Object.keys( scoreunits )[0] ].image || "http://hooptap.s3.amazonaws.com/widgets/profile/Simbol-Star.svg";
                                    }
                                }
                                if ( levels && zone_col.model == 'Level' ) {
                                    if ( zone_col.id ) {
                                        zone_col.name = levels[ zone_col.id ].name;
                                        zone_col.minimum = levels[ zone_col.id ].minimum;
                                        zone_col.image = levels[ zone_col.id ].image;
                                    }
                                    else { // default
                                        zone_col.id = levels[ Object.keys( levels )[0] ].id;
                                        zone_col.name = levels[ Object.keys( levels )[0] ].name;
                                        zone_col.minimum = levels[ Object.keys( levels )[0] ].minimum;
                                        zone_col.image = levels[ Object.keys( levels )[0] ].image || "http://hooptap.s3.amazonaws.com/widgets/profile/Simbol-Level.svg";
                                    }
                                }
                                if ( badges && zone_col.model == 'Badge' ) {
                                    zone_col.count = badges.length;
                                    zone_col.image = "http://hooptap.s3.amazonaws.com/widgets/profile/Simbol-Badge.svg";
                                }

                            }

                        }


                        //-> Levels
                        let nextLevelIds = [];
                        for( var lev in levels) {
                            let level = levels[lev];
                            if ( level.nextId ) nextLevelIds.push( level.nextId );
                        }
                        // console.log("nextLevelIds", nextLevelIds);

                        if( nextLevelIds.length )
                            Level.find( { filter: { where: { id: { inq: nextLevelIds } } } } ).$promise
                                .then( (response)=>{

                                    let nextLevels = {};
                                    for( var index in response ) {
                                        var nextlevel = response[index];
                                        nextLevels[ nextlevel.id ] = {
                                            id: nextlevel.id,
                                            name: nextlevel.name,
                                            image: nextlevel.image,
                                            minimum: nextlevel.minimum
                                        };
                                    }

                                    for( var lev in levels) {
                                        let level = levels[lev];
                                        if ( level.nextId ) {
                                            level.nextLevel = nextLevels[ level.nextId ];
                                            level.nextLevel.diff = level.nextLevel.minimum - $scope.customer.scores[ level.scoreUnitId ];
                                            level.nextLevel.percent = $scope.customer.scores[ level.scoreUnitId ] / level.nextLevel.minimum * 100;
                                        }
                                    }
                                    //console.log("nextLevels levels", levels);

                                });

                        $scope.customer.levels = levels;
                        $scope.customer.scoreUnits = scoreunits;
                        console.log("Objeto Customer:", $scope.customer);

                    })();





            })();
        }

        //Destroy Events
        $scope.$on('$destroy', ()=>{
           loginEvent();
        });
    },
    link: (scope, element, attrs)=> {




        //Default values for widget full
        let defaults = {
            idWidget:"",
            editProfile: false,
            showGlobalFeed:false,
            showMarker:true,
            showProfileHeader:true,
            levelRow:{
                showProgressBarLevel: true,
                showModule: true,
            },
            menuOptions: {
                titleGameRoom: "Salón de juegos",
                showQuests: false,
                showLevel: false,
                showBadges: true,
                showRankings: false,
                showGlobalFeed: false,
                showEditProfile: false,
                showMarketplace: false,
                showGameRoom: false
            }
        };

        for(var optionKey in defaults) {
            if(attrs[optionKey]){
                console.log(attrs[optionKey]);
                if(scope[optionKey] && typeof scope[optionKey] === 'object'){
                    scope[optionKey] = Object.assign(defaults[optionKey], scope[optionKey]);
                }
            }else{
                scope[optionKey] = defaults[optionKey];
            }}
        //console.log(scope);


        //Modelo de zonas, mostrando los 4 tipos para test
        let defaultMarkerOptions = {
            zones: [
                // [
                //     {model: 'ScoreUnit' },      // por default, el primero que encuentre
                //
                //     {model: 'Level'  },         // por default, asociado al ScoreUnit anterior
                //
                //     {model: 'Badge'  },         // contador de badges
                //
                //     {model: 'Badge'  },         // contador de badges
                // ],

                [
                    {model: 'ScoreUnit'},       // por default, el primero que encuentre

                    {model: 'Level' },          // por default, asociado al ScoreUnit anterior

                    {model: 'Badge' },          // contador de badges
                ],

                // [
                //     { model: 'Level' },         // por default, asociado al ScoreUnit anterior
                //     { model: 'ScoreUnit' }      // por default, el primero que encuentre
                // ],
                //
                // [
                //     { model: 'Badge' }          // contador de badges
                // ]
            ]
        };

        scope.scoreDisplayConfig = scope.scoreDisplayConfig || defaultMarkerOptions;


    }
});



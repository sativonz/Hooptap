import template from './template.jade';
/**
 * @ngdoc directive
 * @name Customer login
 * @module Components
 * @description Component for Login a user with username/email and password
 * @restrict E
 * //TODO revisar los parametros opcionales
 * @param {String=} username Username of user
 * @param {String=} email User email
 * @param {String} password User password
 * @element ANY
 */
export default() => ({
    restrict: 'E',
    scope: {},
    template,
    controller: ($scope, $rootScope, Customer, ScoreUnit, Level, LoopBackAuth)=> {

        if (LoopBackAuth.rememberMe) {
            getCurrent();
        }
        $scope.login = ()=> {

            Customer.login({
                "email": $scope.email,
                "password": $scope.password,
                //TODO Change for actual productId
                "productId": '5784fda092cabc234005814b'
            }).$promise
                .then((response)=> {
                    getCurrent();
                })
                .catch((error)=> {
                });
        };

        function getCurrent() {
            Customer.getCurrent( { filter: { include: ['levels','badges'] } } ).$promise
                .then((response)=> {
                    $rootScope.customer = response;
                    $rootScope.logged = true;
                    TOAST(
                        "Bienvenido " + $rootScope.customer.username + "!", null, {
                        style: 'info',
                        img: 'http://hooptap.s3.amazonaws.com/widgets/img.png'
                    });


                    //-> Score Units
                    var customerScores = response.scores;
                    var keys = Object.keys( customerScores );

                    ScoreUnit.find( {
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

                            console.log( 'ScoreUnits', ScoreUnits );

                            if(!ScoreUnits.length) return;

                            for( var index in ScoreUnits ) {
                                var scoreunit = ScoreUnits[index];
                                if( !scoreunit.id ) {
                                    delete ScoreUnits[index];
                                    continue;
                                }
                                scoreunit.quantity = customerScores[ scoreunit.id ];
                            }

                            $rootScope.customer.scoreUnits = ScoreUnits;

                            let zones = $rootScope.scoreDisplayConfig.zones;
                            //let scoreUnits = $rootScope.customer.scoreUnits;
                            //let levels = $rootScope.customer.levels;
                            let badges = $rootScope.customer.badges;



                            //create scoreunits index
                            let scoreunits = {};
                            for( var index in $rootScope.customer.scoreUnits ) {
                                var scoreunit = $rootScope.customer.scoreUnits[index];
                                scoreunits[ scoreunit.id ] = scoreunit;
                            }
                            //console.log("scoreunits", scoreunits);


                            console.log('name? 1');

                            let levels = {};
                            for( var index in $rootScope.customer.levels ) {
                                var level = $rootScope.customer.levels[index];
                                levels[ level.id ] = level;
                                levels[ level.id ].scoreUnitName = scoreunits[ level.scoreUnitId ].name;
                                levels[ level.id ].scoreUnitImage = scoreunits[ level.scoreUnitId ].image;
                            }
                            //console.log("levels", levels);

                            console.log('name? 2');

                            for( var row in zones ) {

                                for( var col in zones[row] ) {

                                    let zone_col = zones[row][col];

                                    //console.log(zones, [row], [col], zone_col, zone_col.model);

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
                                   // console.log("nextLevels response", response);

                                    /*$rootScope.customer.levels.nextLevel = response;
                                    //Para calcular el tanto porciento de la barra de progreso
                                    if($rootScope.customer.levels.nextLevel.hasOwnProperty("minimum") ){
                                        $rootScope.progressbarValue =   $rootScope.customer.levels[0].minimum / $rootScope.customer.levels.nextLevel[0].minimum;
                                    }*/

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
                                            level.nextLevel.diff = level.nextLevel.minimum - $rootScope.customer.scores[ level.scoreUnitId ];
                                            level.nextLevel.percent = $rootScope.customer.scores[ level.scoreUnitId ] / level.nextLevel.minimum * 100;
                                        }
                                    }
                                    //console.log("nextLevels levels", levels);

                                });

                            $rootScope.customer.levels = levels;
                            $rootScope.customer.scoreUnits = scoreunits;

                        })
                        .catch((error)=>{
                            console.log("SU ERROR", error);
                        });

                    console.log("Objeto Customer:", $rootScope.customer);

                });
        }
    }
});
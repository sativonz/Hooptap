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
                "password": $scope.password
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
                            fields: [ 'id','name', 'image' ] ,
                            where: {
                                id: { inq: keys }
                            }
                        },
                        locale: [ 'es' ]
                    } ).$promise
                        .then((ScoreUnits)=>{

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
                            let scoreUnits = $rootScope.customer.scoreUnits;
                            let levels = $rootScope.customer.levels;
                            let badges = $rootScope.customer.badges;


                            let scoreunitNames = {};
                            //->Find score unit in level
                            for( var index in scoreUnits ) {
                                var su = scoreUnits[index];
                                scoreunitNames[su.id] = su.name;
                            }
                            console.log("scoreunitNames", scoreunitNames);

                            //console.log( 'marker-display', $rootScope.customer );

                            for( var row in zones ) {

                                for( var col in zones[row] ) {

                                    //console.log(zones, [row], [col], zones[row][col], zones[row][col].model);

                                    if ( scoreUnits && zones[row][col].model == 'ScoreUnit' ) {
                                        zones[row][col].id = scoreUnits[0].id;
                                        zones[row][col].name = scoreUnits[0].name;
                                        zones[row][col].quantity = scoreUnits[0].quantity;
                                        zones[row][col].image = scoreUnits[0].image || "http://hooptap.s3.amazonaws.com/widgets/star.svg";
                                    }
                                    if ( levels && zones[row][col].model == 'Level' ) {
                                        zones[row][col].id = levels[0].id;
                                        zones[row][col].name = levels[0].name;
                                        zones[row][col].minimum = levels[0].minimum;
                                        zones[row][col].image = levels[0].image || "http://hooptap.s3.amazonaws.com/widgets/level.svg";
                                    }
                                    if ( badges && zones[row][col].model == 'Badge' ) {
                                        zones[row][col].count = badges.length;
                                        zones[row][col].image = badges[0].image || "http://hooptap.s3.amazonaws.com/widgets/badge.svg";
                                    }

                                }

                            }

                            //-> Levels
                            let levelIds = [];
                            for( var lev in levels) {
                                let level = levels[lev];
                                if(level.nextId) levelIds.push(level.nextId);
                            }

                            Level.find( { filter: { where: { id: { inq: levelIds } } } } ).$promise
                                .then( (response)=>{
                                    $rootScope.customer.levels.nextLevel = response;
                                    //Para calcular el tanto porciento de la barra de progreso
                                    if($rootScope.customer.levels.nextLevel.hasOwnProperty("minimum") ){
                                        $rootScope.progressbarValue =   $rootScope.customer.levels[0].minimum / $rootScope.customer.levels.nextLevel[0].minimum;
                                    }

                                });



                            /*ScoreUnit.find( { filter: { where: { id: { inq: su.id} } } } ).$promise
                                .then( (response)=>{
                                    console.log("response", response)

                                });*/

                        })
                        .catch((error)=>{
                            console.log(error);
                        });

                    console.log("Objeto Customer:", $rootScope.customer);

                });
        }
    }
});
import template from './template.jade';
import stampit from 'stampit';
import './styles.scss';
import Q from 'q';
/**
 * @ngdoc directive
 * @name Marker list score units
 * @module Components
 * @description Component for show the marker of the score units in a list
 * @restrict E
 * @param {Object} item Object with full information of the customer
 * @element ANY
 */
export default(BaseModel, _hasScoreUnits, $rootScope, Customer) => ({
    restrict: 'E',
    scope: {
        customer: '='
    },
    template,
    link: (scope, element, attrs)=> {


        //Default values
        scope.defaultImage = require('./images/no-image.png');
        scope.emptyLevel = false;

        let ScoreUnitsModel = stampit().compose(BaseModel, _hasScoreUnits)(scope.customer);

        //Index score units
        let ScoreUnitsIndex = {};

        //Function on click in list score unit
        scope.levelActual = (su)=> {
            let filter ={filter:{"where":{"customerId": ScoreUnitsModel.id, "scoreUnitId":su.id}, "include":["level", "scoreUnit"]}};
            ScoreUnitsModel.getScoreUnitInstances(filter).$promise.then((item)=>{
                scope.item = item;
                //console.log('OBJETO ENTERO => ', item);

                //NextLevel
                if(scope.item.length){
                    scope.emptyLevel = false;
                    scope.level = scope.item[0].level ;
                    //console.log("OBJETO LEVEL =>", scope.level);

                    ScoreUnitsModel.getLevelById(scope.level.nextId).then((response) => {
                        scope.nextLevel = response;
                        //console.log("NEXT LEVEL !", scope.nextLevel);

                        //Score Unit asociado al nivel
                        ScoreUnitsModel.getScoreUnitById(scope.nextLevel.scoreUnitId).then((response) => {
                            scope.levelActualName = response;
                            //console.log("Nombre del su asociado al level =>", scope.levelActualName);
                        });

                        //Progressbar
                        let firstValue = scope.nextLevel.minimum;
                        let secondValue = scope.customer.scores[scope.level.scoreUnitId];
                        scope.percentValue = (secondValue / firstValue) * 100;

                        //Search level by score unit
                        ScoreUnitsModel.getLevelById(scope.level.id).then((response) => {
                            scope.levelByScoreUnit = response;
                            //console.log("Level by Score Unit => ", scope.levelByScoreUnit);
                        });


                        //Index all levels
                        let LevelsIndex = {};
                        let allLevelsIndex = ScoreUnitsModel.getLevels({filter: {where: {scoreUnitId: scope.level.scoreUnitId}}});

                        allLevelsIndex.$promise.then((response)=> {
                            response.map((level)=>LevelsIndex[level.id] = level);
                            scope.LevelsIndex = LevelsIndex;
                            //console.log('LevelsIndex', LevelsIndex);
                        });
                    });
                }else {
                    scope.emptyLevel = true;
                }
            });
        };


        //Get scoreUnits list
        Q.async(function*() {
            let scoreUnits = yield ScoreUnitsModel.getScoreUnits().$promise;
            scoreUnits.map((su)=> {
                ScoreUnitsIndex[su.id] = {
                    id: su.id,
                    name: su.name,
                    image: su.image
                };
            });
            scope.customer.scoreUnitInstances.map((su)=> {
                if (ScoreUnitsIndex.hasOwnProperty(su.scoreUnit.id)) {

                    ScoreUnitsIndex[su.scoreUnit.id]['quantity'] = su.quantity || 0;
                } else {
                    //TODO
                }
            });

            let myScoreUnitsArray = [];
            for(let _scoreunit in ScoreUnitsIndex) {
                let myScoreunit = ScoreUnitsIndex[_scoreunit];
                myScoreUnitsArray.push( myScoreunit );
            }

            myScoreUnitsArray.sort( (a,b) => {
                a.quantity = a.quantity || 0;
                b.quantity = b.quantity || 0;
                return b.quantity - a.quantity;
            });


            scope.scoreUnits = myScoreUnitsArray;
            //console.log(myScoreUnitsArray);
            scope.$apply();
        })();


    }
});
import template from './template.jade';
import './styles.scss';
import stampit from 'stampit';
import Q from 'q';

var defaultNextLevelImage = require('./images/next-level-default.png');
var defaultLevelImage = require('./images/icon-level-default.svg');
var defaultLineLevelOff = require('./images/line-level-off-default.png');
var defaultLineLevel = require('./images/line-level-default.png');

/**
 * @ngdoc directive
 * @name Level actual
 * @module Components
 * @description Component for see the actual level of the user and details of the next level
 * @restrict E
 * @element ANY
 */
export default($rootScope, BaseModel, _hasScoreUnits) => ({
    restrict: 'E',
    transclude: true,
    template,
    scope: {
        scores: '=',
        customer: '=',
        customerId: '=',
        scoreUnitId: '='
    },
    link: (scope, element, attrs)=> {

        //Default images
        scope.defaultLevelImage = defaultLevelImage;
        scope.defaultNextLevelImage = defaultNextLevelImage;
        scope.defaultLineLevelOff = defaultLineLevelOff;
        scope.defaultLineLevel = defaultLineLevel;
        scope.items = {};

        //ScoreUnit Stampit model
        let ScoreUnitModel = stampit().compose(BaseModel, _hasScoreUnits);


        let filter ={filter:{"where":{"customerId": scope.customerId, "scoreUnitId":scope.scoreUnitId}, "include":["level", "scoreUnit"]}};
        ScoreUnitModel().getScoreUnitInstances(filter).$promise.then((item)=>{
            $rootScope.$broadcast("$viewLevel", item);
        });


        let viewLevelEvent = scope.$on('$viewLevel', (event, item)=> {
            getCurrentLevel(item);
        });

        var getCurrentLevel= (items)=> {
            scope.items = items;
            // console.log('OBJE/TO ENTERO => ', items);
            //console.log('OBJETO ENTERO  CUSTOMER => ', scope.customer);

            scope.items.forEach((item)=>{
                if (item.levelId == scope.customer.levels[0].id){
                    scope.item = item;
                }
            });






            //NextLevel
            if (scope.item.level.nextId) {
                ScoreUnitModel().getLevelById(scope.item.level.nextId).then((response) => {
                    scope.nextLevel = response;
                    //console.log("NEXT LEVEL !", scope.nextLevel);

                    //Score Unit asociado al nivel
                    ScoreUnitModel().getScoreUnitById(scope.nextLevel.scoreUnitId).then((response) => {
                        scope.levelActualName = response;
                        //console.log("Nombre del su asociado al level =>", scope.levelActualName);
                    });

                    //Progressbar
                    let firstValue = scope.nextLevel.minimum;
                    let secondValue = scope.scores[scope.item.level.scoreUnitId];
                    scope.percentValue = (secondValue / firstValue) * 100;

                    //Search level by score unit
                    ScoreUnitModel().getLevelById(scope.item.level.id).then((response) => {
                        scope.levelByScoreUnit = response;
                        //console.log("Level by Score Unit => ", scope.levelByScoreUnit);
                    });


                    //Index all levels
                    let LevelsIndex = {};
                    let allLevelsIndex = ScoreUnitModel().getLevels({filter: {where: {scoreUnitId: scope.item.level.scoreUnitId}}});

                    allLevelsIndex.$promise.then((response)=> {
                        response.map((level)=>LevelsIndex[level.id] = level);
                        scope.LevelsIndex = LevelsIndex;
                        //console.log('LevelsIndex', LevelsIndex);
                    });
                });
            }else {
                scope.percentValue = 100;
            }
        };

        //Destroy events
        scope.$on('$destroy', ()=> {
            viewLevelEvent();
        });


    }

});
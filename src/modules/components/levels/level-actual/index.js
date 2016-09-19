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
export default(BaseModel, _hasScoreUnits) => ({
    restrict: 'E',
    transclude: true,
    template,
    scope: {
        item: '='
    },
    link: (scope, element, attrs)=> {

        //Default images
        scope.defaultLevelImage = defaultLevelImage;
        scope.defaultNextLevelImage = defaultNextLevelImage;
        scope.defaultLineLevelOff = defaultLineLevelOff;
        scope.defaultLineLevel = defaultLineLevel;

        //ScoreUnit Stampit model
        let ScoreUnitModel = stampit().compose(BaseModel, _hasScoreUnits);

        //Get nextLevel
        Q.async(function*(){

            //NextLevel
            let nextLevel = yield ScoreUnitModel().getLevelById(scope.item.levels[0].nextId);
            //console.log("NEXT LEVEL !", nextLevel);
            scope.nextLevel = nextLevel;


            //Su asociado al nivel
            let levelActualName = yield ScoreUnitModel().getScoreUnitById(nextLevel.scoreUnitId);
            console.log("Nombre del su asociado al level !", levelActualName);
            scope.levelActualName = levelActualName;

            //Progressbar
            let firstValue = scope.nextLevel.minimum;
            let secondValue = scope.item.scores[ scope.item.levels[0].scoreUnitId ];
            scope.percentValue = (secondValue /  firstValue) * 100 ;

            //Search level by score unit
            let levelByScoreUnit = yield ScoreUnitModel().getLevelById(scope.item.levels[0].id);
            scope.levelByScoreUnit = levelByScoreUnit;
            console.log("levelByScoreUnit", scope.levelByScoreUnit);




            //Index all levels
            let LevelsIndex = {};
            let allLevelsIndex = ScoreUnitModel().getLevels( { filter: { where: { scoreUnitId:scope.item.levels[0].scoreUnitId } } } );

            allLevelsIndex.$promise.then((response)=>{
                response.map((level)=>LevelsIndex[level.id]=level);
                scope.LevelsIndex = LevelsIndex;
                console.log('LevelsIndex', LevelsIndex);

            });





        })();

    }

});
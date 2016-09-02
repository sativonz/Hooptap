import template from './template.jade';
import './styles.scss';
import stampit from 'stampit';
import Q from 'q';

var defaultNextLevelImage = require('./images/icon-level-default.svg');

/**
 * @ngdoc directive
 * @name Level row
 * @module Components
 * @description Component for see the actual level of the user and next level at the home in the widget full
 * @restrict E
 * @param {Object} item The model to display the component
 * @element ANY
 */
export default(BaseModel, _hasScoreUnits) => ({
    restrict: 'E',
    template,
    transclude: true,
    scope: {
        item: '=?',
        showProgressBarLevel: '=?'
    },

    link: (scope, element, attrs)=> {

        //Default image
        scope.defaultNextLevelImage = defaultNextLevelImage;

        //ScoreUnit Stampit model
        let ScoreUnitModel = stampit().compose(BaseModel, _hasScoreUnits);

        //Get nextLevel
        //TODO resuelve la promesa lenta
        Q.async(function*(){
            let nextLevel = yield ScoreUnitModel().getLevelById(scope.item.levels[0].nextId);
            console.log("NEXT LEVEL !", nextLevel);
            scope.nextLevel = nextLevel;

            let levelActualName = yield ScoreUnitModel().getScoreUnitById(nextLevel.scoreUnitId);
            console.log("Nombre del su asociado al level !", levelActualName);
            scope.levelActualName = levelActualName;

        })();



    },
});
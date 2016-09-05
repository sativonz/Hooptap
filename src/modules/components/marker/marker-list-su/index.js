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
export default($timeout, BaseModel, _hasScoreUnits) => ({
    restrict: 'E',
    scope: {
        item: '=',
        scoreUnits: '=?'
    },
    template,
    link: (scope, element, attrs)=> {
        let ScoreUnitsModel = stampit().compose(BaseModel, _hasScoreUnits);
            //Index score units
            let ScoreUnitsIndex = {};
            let scoreUnits = ScoreUnitsModel().getScoreUnits();


            scoreUnits.$promise.then((response)=>{
             response.map((scoreUnit)=>ScoreUnitsIndex[scoreUnit.id]=scoreUnit);
                scope.scoreUnitsIndex = ScoreUnitsIndex;
            });
            scope.scoreUnits = scoreUnits;
    }
});
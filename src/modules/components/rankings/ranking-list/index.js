
import template from './template.jade';
import './styles.scss';
var defaultImage = require("./images/profile-default.svg");

/**
 * @ngdoc directive
 * @name Ranking list
 * @module Components
 * @description Component for see the elected ranking with her corresponding score unit
 * @restrict E
 * @element ANY
 */
export default($rootScope, BaseModel, _hasRankings) => ({
    restrict: 'E',
    template,
    transclude: true,
    scope: {
        item: '=?'
    },

    link: (scope, element, attrs)=> {

        //Default image
        scope.defaultImage = defaultImage;

        let rankingViewEvent = scope.$on("$rankingView", (event, ranking)=> {
            scope.ranking =  ranking.customers;
            scope.scoreUnitName =  ranking.scoreUnit.name;
            scope.scoreUnitImage =  ranking.scoreUnit.image;
            scope.scoreUnitId =  ranking.scoreUnit.id;
        });

        scope.$on('$destroy',()=>{
           rankingViewEvent();
        });

    },


});
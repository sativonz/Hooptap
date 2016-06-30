import template from './template.jade';
import './styles.scss';

/**
 * TODO
 * @ngdoc directive
 * @name 
 * @module 
 * @description 
 * @restrict E
 * @param {Object} rankingItem (Put all attributes as param like this)
 * @element ANY
 */
export default() => ({
    restrict: 'E',
    scope: {
    },
    transclude:true,

    link: (scope, element, attrs)=>{

        scope.items = [
            {position:'2', username: 'sat1', score: 1000},
            {position:'1', username: 'jos1', score: 5000},
            {position:'2', username: 'blan', score: 3000},
            {position:'4', username: 'vonz', score: 4500},
            {position:'22', username: 'sergux', score: 200},
            {position:'12', username: 'korsakof', score: 100},
            {position:'10', username: 'paul', score: 500},
            {position:'5', username: 'stalck', score: 2540},
            {position:'9', username: 'atpc', score: 1254}

        ];


    },
    template

});
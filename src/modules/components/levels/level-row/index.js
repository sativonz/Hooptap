import template from './template.jade';
import './styles.scss';
/**
 * @ngdoc directive
 * @name Level home widget full
 * @module Components
 * @description Component for see the actual level of the user and details of the next level
 * @restrict E
 * //TODO revisar params
 * @param {String} type Name of the state in which the user is at the current level
 * @param {Int} dynamic The numerical value of 200, of the user's progress at the current level
 * @param {Image} image Image of the actual level
 * @element ANY
 */
export default(Customer, LoopBackAuth, $rootScope) => ({
    restrict: 'E',
    template,
    scope: {
        showProgressBarLevel: '=',
        level: '='
    },
    transclude: true,
    link: (scope, element, attrs)=> {

    }

});
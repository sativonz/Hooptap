import template from './template.jade';
import './styles.scss';
/**
 * @ngdoc directive
 * @name Progressbar
 * @module Components
 * @description Component to see the user's progress at the current level
 * @restrict E
 * @param {String} type Name of the state in which the user is at the current level
 * @param {Int} dynamic The numerical value of 200, of the user's progress at the current level
 * @element ANY
 */
export default() => ({
    restrict: 'E',
    scope: {
        dynamic: '=',
        type: '='
    },
    link: (scope, element, attrs)=>{

    },
    template

});
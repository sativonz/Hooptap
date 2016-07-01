import template from './template.jade';
import './styles.scss';
/**
 * @ngdoc directive
 * @name Progressbar
 * @module Component
 * @restrict E
 * @param {String} type => name of actual user
 * @param {String=} dynamic => Value of the progression in the component.
 * @description This component is for visualize the progression in levels for example
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
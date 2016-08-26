import template from './template.jade';
/**
 * @ngdoc directive
 * @name Widget header
 * @module Components
 * @description Header for the widgets
 * @params {String} title Title of the header
 * @restrict E
 * @element ANY
 */
export default() => ({
    restrict: 'E',
    template,
    transclude: true,
    scope: {
        title: '@'
    },
    link: (scope, element, attrs)=>{}
});
import template from './template.jade';
/**
 * @ngdoc directive
 * @name Customer nav
 * @module Components
 * @description Component for navigation in form of tabs in the login form or the register form
 * @restrict E
 * @element ANY
 */
export default() => ({
    restrict: 'E',
    scope: {},
    template,
});
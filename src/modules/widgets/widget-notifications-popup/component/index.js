import template from './template.jade';
/**
 * @ngdoc directive
 * @name Widget notifications popup
 * @module Widgets
 * @description Box that appears and disappears where will show alerts and user information when win,
 * lose or whatever you want to report any response that returns the engine to hold an event.
 * @restrict E
 * @param {String} title Title of the popup
 * @param {String} desc Description of the popup
 * @param {String=} img Image of the popup
 * @element ANY
 */
export default() => ({
    restrict: 'E',
    scope: {},
    template
});
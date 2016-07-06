import template from './template.jade';
import './styles.scss';
/**
 * @ngdoc directive
 * @name Button menu
 * @module Components
 * @description Button to open the menu.
 * @restrict E
 * @element ANY
 */
export default() => ({
    restrict: 'E',
    scope: {
    },
    template,
    link: (scope, element, attrs)=> {
    }


});
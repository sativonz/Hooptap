
import template from './template.jade';
import './styles.scss';
/**
 * @ngdoc directive
 * @name Level actual
 * @module Components
 * @description Component for see the actual level of the user and details of the next level
 * @restrict E
 * @element ANY
 */
export default($timeout) => ({
    restrict: 'E',
    transclude: true,
    template,
    scope: {
        image: '@',
        dynamic: '=',
        type: '='
    },
    link: (scope, element, attrs)=> {

    }

});
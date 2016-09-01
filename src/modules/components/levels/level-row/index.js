//TODO FALTA MOCKUP

import template from './template.jade';
import './styles.scss';
var defaultNextLevelImage = require('./images/icon-level-default.svg');

/**
 * @ngdoc directive
 * @name Level row
 * @module Components
 * @description Component for see the actual level of the user and next level at the home in the widget full
 * @restrict E
 * @param {Object} item The model to display the component
 * @element ANY
 */
export default($timeout) => ({
    restrict: 'E',
    template,
    transclude: true,
    scope: {
        item: '='
    },

    link: (scope, element, attrs)=> {

        scope.defaultNextLevelImage = defaultNextLevelImage;
    },
});
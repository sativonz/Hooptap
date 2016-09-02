import template from './template.jade';
import './styles.scss';
/**
 * @ngdoc directive
 * @name Marker list score units
 * @module Components
 * @description Component for show the marker of the score units in a list
 * @restrict E
 * @param {Object} item Object with full information of the customer
 * @element ANY
 */
export default($timeout) => ({
    restrict: 'E',
    scope: {
        item: '='
    },
    template,
    link: (scope, element, attrs)=> {},
});
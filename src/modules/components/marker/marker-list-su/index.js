import template from './template.jade';
import './styles.scss';
/**
 * @ngdoc directive
 * @name Marker list score units
 * @module Components
 * @description Component for show the marker of the score units in a list
 * @restrict E
 * @param {String} name name of the score unit
 * @param {String} quantity Quantity of the score unit
 * @param {Image} img Image of the score unit
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
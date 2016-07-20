import template from './template.jade';
import './styles.scss';
/**
 * @ngdoc directive
 * @name Level list
 * @module Components
 * @description Component for see a list with the all levels
 * @restrict E
 * //TODO revisar params
 * @param {String} title => Title of the level
 * @param {Image} image => Image of the level
 * @element ANY
 */
export default($timeout) => ({
    restrict: 'E',
    scope: {
    },
    link: (scope, element, attrs)=> {
        //Definir el numero de niveles
        scope.numberLevels = new Array(10);
    },
    template

});
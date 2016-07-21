import template from './template.jade';
import './styles.scss';
/**
 * @ngdoc directive
 * @name Profile simple
 * @module Components
 //TODO revisar description porque en el excel salen mas cosas que en el wireframe
 * @description Component for simple profile, where it is displayed the name, profile image and marker for units scores, badges and levels.
 * @restrict E
 * @param {String} name name of actual user
 * @param {image} image Profile image
//TODO Faltan parametros pasados dinamicamente, puntos, badges y el nivel.
 * @param {Int} id Identification number of the current user
 * @element ANY
 */
export default() => ({
    restrict: 'E',
    transclude: true,
    scope: {
        image: '@',
        id: '@',
        type: '=',
        dynamic: '='
    },
    link: (scope, element, attrs)=> {
        attrs.name = attrs.name || 'Anonymous';
        attrs.username = attrs.username || 'Debe registrarse';

        
    },
    template

});
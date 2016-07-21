import template from './template.jade';
import './styles.scss';
/**
 * @ngdoc directive
 * @name Profile widget full
 * @module Components
 //TODO revisar description y parametros porque en el excel salen mas cosas que en el wireframe
 * @description Component for widget full view profile, where it is displayed the name, username email, image verified for mail and actual level with progressbar.
 * @restrict E
 * @param {String} name name of actual user
 * @param {String} username username of actual user
 * @param {String} email email of actual user
 * @param {image} imageverified Image boolean for verifieds mails
 * @param {image} image Profile image
 * @param {String} type Name of the state in which the user is at the current level
 * @param {Int} dynamic The numerical value of 200, of the user's progress at the current level
 * @param {Int} id Identification number of the current user
 * @element ANY
 */
export default($rootScope) => ({
    restrict: 'E',
    transclude: true,
    scope: {
        name: '@',
        username: '@',
        email: '@',
        image: '@',
        imageverified: '@',
        type: '=',
        dynamic: '=',
        id: '@'
    },
    link: (scope, element, attrs)=> {
        attrs.name = attrs.name || 'Anonymous';
        attrs.username = attrs.username || 'Debe registrarse';
        
    },
    template

});
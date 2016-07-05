import template from './template.jade';
import './styles.scss';
/**
 * @ngdoc directive
 * @name Profile full
 * @module Components
 //TODO revisar description porque en el excel salen mas cosas que en el wireframe
 * @description Component for full profile, where it is displayed the profile image, name, lasts names, email, birth date, telephone, gender, direction,
 * country, postal code, custom fields and badges, points, current level, goods, prizes and current activity.
 * @restrict E
 * @param {String} name => name of actual user
 * @param {image} image => Profile image
 //TODO Faltan parametros //no esta completo
 * @param {Int} id => Identification number of the current user
 * @element ANY
 */
export default() => ({
    restrict: 'E',
    scope: {
        name: '@',
        username: '@',
        email: '@',
        image: '@',
        imageverified: '@'
    },
    link: (scope, element, attrs)=> {
    },
    template

});
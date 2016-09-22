 import template from './template.jade';
 import './styles.scss';
 /**
 * @ngdoc directive
 * @name Profile full
 * @module Components
 //TODO revisar description porque en el excel salen mas cosas que en el wireframe/mockup
 * @description Component for full profile, where it is displayed the profile image, name, lasts names, email, birth date, telephone, gender, direction,
 * country, postal code, custom fields and badges, points, current level, goods, prizes and current activity.
 * @restrict E
 * @param {String} name name of actual user
 * @param {String} username username of actual user
 * @param {String} email email of actual user
 * @param {image} imageGender Image boolean for the gender of actual user
 * @param {image} emailVerified Image boolean for verifieds mails
 * @param {image} image Profile image
 * @param {String} points Point of actual level
 * @param {String} type Name of the state in which the user is at the current level
 * @param {Int} dynamic The numerical value of 200, of the user's progress at the current level
 * @param {Int} id Identification number of the current user
 * @param {String} direction Name of the address of actual user
 * @param {String} country Name of the country of actual user
 * @param {String} city Name of the city of actual user
 * @param {String} postalCode Name of the postal code of actual user
 * @param {String} actualLevel Name of the actual level
 * @element ANY
 */
export default() => ({
    restrict: 'E',
    scope: {
        id: '@',
        image: '@',
        imageVerified: '@',
        imageGender: '@',
        points: '@',
        dynamic: '=',
        type: '=',
        direction: '@',
        country: '@',
        city: '@',
        postalCode: '@',
        actualLevel: '@'

    },
    transclude: true,
    link: (scope, element, attrs)=> {
    },
    template

});
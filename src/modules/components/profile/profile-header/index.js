import template from './template.jade';
import './styles.scss';
/**
 * @ngdoc directive
 * @name Profile header
 * @module Components
 //TODO revisar description porque en el excel salen mas cosas que en el wireframe/mockup
 * @description Component for profile full, where it is displayed the name, email, and profile image
 * @restrict E
 * @param {String} name name of actual user
 * @param {String} email email of actual user
 * @param {image} image Profile image
 * @element ANY
 */
export default() => ({
    restrict: 'E',
    template,
    link: (scope, element, attrs)=> {


    }

});
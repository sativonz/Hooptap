import template from './template.jade';
import './styles.scss';
/**
 * @ngdoc directive
 * @name 
 * @module 
 * @description 
 * @restrict 
 * @param {String} name name of actual user
 * @param {String=} username username string
 * @param {String} image
 * @param {Boolean} imageverified 
 * 
 * @element ANY
 */
export default() => ({
    restrict: 'E',
    scope: {
        name: '@',
        username: '@',
        email: '@',
        image: '@',
        imageverified: '@',
        type: '=',
        dynamic: '='
    },
    link: (scope, element, attrs)=> {
        attrs.name = attrs.name || 'Anonymous';
    },
    template

});
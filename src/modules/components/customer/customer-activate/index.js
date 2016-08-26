import template from './template.jade';
/**
 * @ngdoc directive
 * @name Customer activate
 * @module Components
 * @description Component for activate account when the user put the activation code in the form
 * @restrict E
 * @param {String} codeEmailActivation Code for activate user account
 * @element ANY
 */
export default($rootScope, Customer,LoopBackAuth) => ({
    restrict: 'E',
    scope: {},
    template,
    link:(scope, element, attrs)=> {

        
    }

});
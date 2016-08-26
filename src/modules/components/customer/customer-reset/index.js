import template from './template.jade';
/**
 * @ngdoc directive
 * @name Customer reset
 * @module Components
 * @description Component for reset password for a user with email
 * @restrict E
 * @param {String} email User email
 * @element ANY
 */
export default($rootScope,Customer,LoopBackAuth) => ({
    restrict: 'E',
    scope: {},
    template,
    link:(scope, element, attrs)=>{
        

    }
});
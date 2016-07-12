import template from './template.jade';
/**
 * @ngdoc directive
 * @name Admin login
 * @module Component
 * @description For add login component (reset view is in)
 * @restrict E
 * @param
 * @element ANY
 */
export default($rootScope,Customer,LoopBackAuth) => ({
    restrict: 'E',
    scope: {},
    template,
    link:(scope, element, attrs)=>{
        

    }
});
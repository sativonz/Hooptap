import template from './template.jade';
/**
 * @ngdoc directive
 * @name Customer update
 * @module Components
 * @description Component for update instances of the model matched by where from the data sourceg
 * @restrict E
 * //TODO revisar params...
 * @param {String} email  User email
 * @element ANY
 */
export default() => ({
    restrict: 'E',
    scope: {},
    template,
    controller: ($scope, $rootScope, Customer, LoopBackAuth)=> {
    }
});
import angular from 'angular-mod';
let module = angular.module('common',[])
    .directive('viewHandler', require('./components/viewHandler').default);

export default module.name;
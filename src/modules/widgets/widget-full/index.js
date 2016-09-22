import angular from 'angular-mod';

let module = angular.module('app.widgetFull', [])
    .directive('widgetFull', require('./component/index').default)
   ;

export default module.name;
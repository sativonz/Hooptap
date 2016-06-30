import angular from 'angular-mod';

let module = angular.module('app.widgetGameContainer', [])
    .directive('cWidgetGameContainer', require('./component').default);

export default module.name;
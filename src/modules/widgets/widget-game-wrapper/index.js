import angular from 'angular-mod';

let module = angular.module('app.widgetGameWrapper', [])
    .directive('cWidgetGameWrapper', require('./component').default);

export default module.name;
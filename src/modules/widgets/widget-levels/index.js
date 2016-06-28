import angular from 'angular-mod';

let module = angular.module('app.widgetLevels', [])
    .directive('cWidgetLevels', require('./component').default);

export default module.name;
import angular from 'angular-mod';

let module = angular.module('app.widgetQuests', [])
    .directive('cWidgetQuests', require('./component').default);

export default module.name;
import angular from 'angular-mod';

let module = angular.module('app.widgetAwardsList', [])
    .directive('cWidgetAwardsList', require('./component').default);

export default module.name;
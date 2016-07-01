import angular from 'angular-mod';

let module = angular.module('app.widgetAwardsList', [])
    .directive('wWidgetAwardsList', require('./component').default);

export default module.name;
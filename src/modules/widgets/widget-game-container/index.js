import angular from 'angular-mod';

let module = angular.module('app.widgetGameContainer', [])
    .directive('wWidgetGameContainer', require('./component').default);

export default module.name;
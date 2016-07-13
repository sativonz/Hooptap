import angular from 'angular-mod';

let module = angular.module('app.widgetGlobalFeed', [])
    .directive('wWidgetGlobalFeed', require('./component').default);

export default module.name;
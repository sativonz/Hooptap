import angular from 'angular-mod';

let module = angular.module('app.widgetBadgesList', [])
    .directive('wWidgetBadgesList', require('./component').default);

export default module.name;
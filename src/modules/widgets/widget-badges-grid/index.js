import angular from 'angular-mod';

let module = angular.module('app.widgetBadgesGrid', [])
    .directive('wWidgetBadgesGrid', require('./component').default);

export default module.name;
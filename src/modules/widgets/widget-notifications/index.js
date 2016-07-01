import angular from 'angular-mod';

let module = angular.module('app.widgetNotifications', [])
    .directive('wWidgetNotifications', require('./component').default);

export default module.name;
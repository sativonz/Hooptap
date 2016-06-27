import angular from 'angular-mod';

let module = angular.module('app.widgetNotifications', [])
    .directive('cWidgetNotifications', require('./component').default);

export default module.name;
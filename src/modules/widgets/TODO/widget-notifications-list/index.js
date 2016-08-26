import angular from 'angular-mod';

let module = angular.module('app.widgetNotificationsList', [])
    .directive('wWidgetNotificationsList', require('./component').default);

export default module.name;
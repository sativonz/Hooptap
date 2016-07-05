import angular from 'angular-mod';

let module = angular.module('app.widgetNotificationsPopup', [])
    .directive('wWidgetNotificationsPopup', require('./component').default);

export default module.name;
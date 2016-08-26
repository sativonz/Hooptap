import angular from 'angular-mod';

let module = angular.module('app.widgetNotificationsPopup', [])
    .directive('wWidgetNotificationsPopup', require('./component/index').default);

export default module.name;
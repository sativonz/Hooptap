import angular from 'angular-mod';

let module = angular.module('app.widgetMarkerSu', [])
    .directive('wWidgetMarkerSu', require('./component').default);

export default module.name;
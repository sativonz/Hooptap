import angular from 'angular-mod';

let module = angular.module('app.widgetMarkerSuList', [])
    .directive('wWidgetMarkerSuList', require('./component').default);

export default module.name;
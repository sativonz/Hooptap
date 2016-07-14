import angular from 'angular-mod';

let module = angular.module('app.widgetMarkerSuGrid', [])
    .directive('wWidgetMarkerSuGrid', require('./component').default);

export default module.name;
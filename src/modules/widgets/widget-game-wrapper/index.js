import angular from 'angular-mod';

let module = angular.module('app.widgetGameWrapper', [])
    .directive('wWidgetGameWrapper', require('./component').default);

export default module.name;
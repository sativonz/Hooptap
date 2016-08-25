import angular from 'angular-mod';

let module = angular.module('app.widgetLevels', [])
    .directive('wWidgetLevels', require('./component').default);

export default module.name;
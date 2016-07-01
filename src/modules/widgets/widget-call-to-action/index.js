import angular from 'angular-mod';

let module = angular.module('app.widgetCallToAction', [])
    .directive('wWidgetCallToAction', require('./component').default);

export default module.name;
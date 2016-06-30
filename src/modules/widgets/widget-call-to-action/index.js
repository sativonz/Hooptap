import angular from 'angular-mod';

let module = angular.module('app.widgetCallToAction', [])
    .directive('cWidgetCallToAction', require('./component').default);

export default module.name;
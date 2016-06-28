
import angular from 'angular-mod';

let module = angular.module('app.widgetProfileFull', [])
    .directive('cWidgetProfileFull', require('./component').default);

export default module.name;
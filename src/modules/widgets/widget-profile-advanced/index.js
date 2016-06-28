
import angular from 'angular-mod';

let module = angular.module('app.widgetProfileAdvanced', [])
    .directive('cWidgetProfileAdvanced', require('./component').default);

export default module.name;
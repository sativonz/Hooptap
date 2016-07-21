
import angular from 'angular-mod';

let module = angular.module('app.widgetProfileAdvanced', [])
    .directive('wWidgetProfileAdvanced', require('./component').default)
    .config(require('./config').default);

export default module.name;
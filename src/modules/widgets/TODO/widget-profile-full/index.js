
import angular from 'angular-mod';

let module = angular.module('app.widgetProfileFull', [])
    .directive('wWidgetProfileFull', require('./component').default)
    .config(require('./config').default);

export default module.name;
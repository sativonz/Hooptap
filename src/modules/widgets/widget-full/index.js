import angular from 'angular-mod';

let module = angular.module('app.widgetFull', [])
    .directive('wWidgetFull', require('./component').default)
    .config(require('./config').default);

export default module.name;
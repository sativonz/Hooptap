import angular from 'angular-mod';

let module = angular.module('app.widgetFull', [])
    .directive('wWidgetFull', require('./component/index').default)
    .config(require('./config').default);

export default module.name;
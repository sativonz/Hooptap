
import angular from 'angular-mod';

let module = angular.module('app.widgetProfileFull', [])
    .directive('wWidgetProfileFull', require('./component/index').default)
    .config(require('./config').default);

export default module.name;
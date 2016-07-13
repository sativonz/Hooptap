import angular from 'angular-mod';

let module = angular.module('app.widgetQuests', [])
    .directive('wWidgetQuests', require('./component').default);

export default module.name;
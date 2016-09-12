import angular from 'angular-mod';

let module = angular.module('app.widgetQuests', [])
    .directive('widgetQuests', require('./component/index').default);

export default module.name;
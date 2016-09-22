import angular from 'angular-mod';

let module = angular.module('app.widgetBadgesGrid', [])
    .directive('widgetBadgesGrid', require('./component/index').default);

export default module.name;
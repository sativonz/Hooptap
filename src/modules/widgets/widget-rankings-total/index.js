import angular from 'angular-mod';

let module = angular.module('app.widgetRankingsTotal', [])
    .directive('cWidgetRankingsTotal', require('./component').default);

export default module.name;
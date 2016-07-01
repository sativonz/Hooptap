import angular from 'angular-mod';

let module = angular.module('app.widgetRankingsTotal', [])
    .directive('wWidgetRankingsTotal', require('./component').default);

export default module.name;
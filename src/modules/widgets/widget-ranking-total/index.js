import angular from 'angular-mod';

let module = angular.module('app.widgetRankingTotal', [])
    .directive('wWidgetRankingTotal', require('./component').default);

export default module.name;
import angular from 'angular-mod';

let module = angular.module('app.widgetRankingTotal', [])
    .directive('wWidgetRankingTotal', require('./component/index').default);

export default module.name;
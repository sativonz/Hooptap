import angular from 'angular-mod';

let module = angular.module('app.widgetRankingTotal', [])
    .directive('widgetRankingTotal', require('./component/index').default);

export default module.name;
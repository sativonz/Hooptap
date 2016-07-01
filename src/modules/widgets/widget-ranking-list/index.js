import angular from 'angular-mod';

let module = angular.module('app.widgetRankingList', [])
    .directive('wWidgetRankingList', require('./component').default);

export default module.name;
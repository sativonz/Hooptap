import angular from 'angular-mod';

let module = angular.module('app.widgetRankings', [])
    .directive('cWidgetRankings', require('./component').default);

export default module.name;
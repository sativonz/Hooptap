import angular from 'angular-mod';

let module = angular.module('app.widgetMarketplaceContainer', [])
    .directive('cWidgetMarketplaceContainer', require('./component').default);

export default module.name;
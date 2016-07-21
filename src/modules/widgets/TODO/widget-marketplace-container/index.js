import angular from 'angular-mod';

let module = angular.module('app.widgetMarketplaceContainer', [])
    .directive('wWidgetMarketplaceContainer', require('./component').default);

export default module.name;
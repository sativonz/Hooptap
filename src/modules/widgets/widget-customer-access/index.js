import angular from 'angular-mod';

let module = angular.module('app.widgetCustomerAccess', [])
    .directive('wWidgetCustomerAccess', require('./component/index').default);

export default module.name;
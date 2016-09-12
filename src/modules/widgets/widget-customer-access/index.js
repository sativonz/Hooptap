import angular from 'angular-mod';

let module = angular.module('app.widgetCustomerAccess', [])
    .directive('widgetCustomerAccess', require('./component/index').default);

export default module.name;
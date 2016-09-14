import angular from 'angular-mod';

let module = angular.module('app.widgetCustomerAccessMini', [])
    .directive('widgetCustomerAccessMini', require('./component/index').default);

export default module.name;
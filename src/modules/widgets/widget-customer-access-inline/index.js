import angular from 'angular-mod';

let module = angular.module('app.widgetCustomerAccessInline', [])
    .directive('widgetCustomerAccessInline', require('./component/index').default);

export default module.name;
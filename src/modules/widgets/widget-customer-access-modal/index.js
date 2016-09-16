import angular from 'angular-mod';

let module = angular.module('app.widgetCustomerAccessModal', [])
    .directive('widgetCustomerAccessModal', require('./component/index').default);

export default module.name;
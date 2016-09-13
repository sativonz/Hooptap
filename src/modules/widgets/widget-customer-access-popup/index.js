import angular from 'angular-mod';

let module = angular.module('app.widgetCustomerAccessPopup', [])
    .directive('widgetCustomerAccessPopup', require('./component/index').default);

export default module.name;
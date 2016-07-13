import angular from 'angular-mod';

let module = angular.module('app.widgetMemberLoginRegister', [])
    .directive('wWidgetMemberLoginRegister', require('./component').default);

export default module.name;
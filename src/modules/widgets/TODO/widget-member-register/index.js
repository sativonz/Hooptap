import angular from 'angular-mod';

let module = angular.module('app.widgetMemberRegister', [])
    .directive('wWidgetMemberRegister', require('./component').default);

export default module.name;
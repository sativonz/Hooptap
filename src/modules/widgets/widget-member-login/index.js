import angular from 'angular-mod';

let module = angular.module('app.widgetMemberLogin', [])
    .directive('wWidgetMemberLogin', require('./component').default);

export default module.name;
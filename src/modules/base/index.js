import angular from 'angular-mod';

let module = angular.module('app.base', [])
    .directive('cButtonClose', require('./components/button-close').default)
    .directive('cBadgesList', require('./components/badges-list').default)
    .directive('cProfileSimple', require('./components/profile-simple').default)
    .directive('cMemberLogin', require('./components/member-login').default)
    .directive('cMemberRegister', require('./components/member-register').default);


export default module.name;
import angular from 'angular-mod';

let module = angular.module('app.base', [])
    .directive('cBadgesList', require('./components/badges-list').default)
    .directive('cProfileSimple', require('./components/profile-simple').default);


export default module.name;
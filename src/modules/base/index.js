import angular from 'angular-mod';
import '../../common/css/main.scss';
import '../../common/css/ht-bootstrap-min.scss';
import '../../common/scripts/script-form-md.js';

let module = angular.module('app.base', [])
    .directive('cButtonClose', require('./components/button-close').default)
    .directive('cBadgesList', require('./components/badges-list').default)
    .directive('cMemberProfile', require('./components/member-profile').default)
    .directive('cMemberLogin', require('./components/member-login').default)
    .directive('cMemberRegister', require('./components/member-register').default)
    .directive('cMemberUpdate', require('./components/member-update').default)
    .directive('cMemberNav', require('./components/member-nav').default)
    .directive('cMemberLogout', require('./components/member-logout').default)
    .directive('cNotificationsPopup', require('./components/notifications-popup').default)
    .directive('cNotificationsList', require('./components/notifications-list').default);


export default module.name;
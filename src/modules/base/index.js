import angular from 'angular-mod';
import '../../common/css/main.scss';
import '../../common/css/ht-bootstrap-min.scss';
import '../../common/scripts/script-form-md.js';
import '../../common/scripts/script-toast-notifications.js';

let module = angular.module('app.base', [])
    .directive('cButtonClose', require('./components/buttons/button-close').default)
    .directive('cButtonBack', require('./components/buttons/button-back').default)
    .directive('cBadgesList', require('./components/badges-list').default)
    .directive('cMemberLogin', require('./components/member/member-login').default)
    .directive('cMemberRegister', require('./components/member/member-register').default)
    .directive('cMemberUpdate', require('./components/member/member-update').default)
    .directive('cMemberNav', require('./components/member/member-nav').default)
    .directive('cMemberLogout', require('./components/member/member-logout').default)
    .directive('cNotificationsPopup', require('./components/notifications/notifications-popup').default)
    .directive('cNotificationsList', require('./components/notifications/notifications-list').default)
    .directive('cRankingScoreUnits', require('./components/rankings/ranking-score-units').default)
    .directive('cProfileSimple', require('./components/profile/profile-simple').default)
    .directive('cProfileAdvanced', require('./components/profile/profile-advanced').default)
    .directive('cProfileFull', require('./components/profile/profile-full').default);


export default module.name;
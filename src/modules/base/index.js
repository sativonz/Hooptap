import angular from 'angular-mod';
import '../../common/css/main.scss';
import '../../common/css/ht-bootstrap-min.scss';
import '../../common/scripts/script-form-md.js';
import '../../common/scripts/script-toast-notifications.js';

let module = angular.module('app.base', [])
    .directive('cButtonClose', require('./components/buttons/button-close').default)
    .directive('cButtonBack', require('./components/buttons/button-back').default)
    .directive('cButtonInit', require('./components/buttons/button-init').default)
    .directive('cButtonCallToAction', require('./components/buttons/button-call-to-action').default)
    .directive('cBadgesList', require('./components/badges/badges-list').default)
    .directive('cBadgesMarker', require('./components/badges/badges-marker').default)
    .directive('cMemberLogin', require('./components/member/member-login').default)
    .directive('cMemberRegister', require('./components/member/member-register').default)
    .directive('cMemberUpdate', require('./components/member/member-update').default)
    .directive('cMemberNav', require('./components/member/member-nav').default)
    .directive('cMemberLogout', require('./components/member/member-logout').default)
    .directive('cNotificationsPopup', require('./components/notifications/notifications-popup').default)
    .directive('cNotificationsList', require('./components/notifications/notifications-list').default)
    .directive('cRankingSimple', require('./components/rankings/ranking-simple').default)
    .directive('cRankingTotal', require('./components/rankings/ranking-total').default)
    .directive('cProfileSimple', require('./components/profile/profile-simple').default)
    .directive('cProfileAdvanced', require('./components/profile/profile-advanced').default)
    .directive('cProfileFull', require('./components/profile/profile-full').default)
    .directive('cLevelActual', require('./components/levels/level-actual').default)
    .directive('cQuestsList', require('./components/quests/quests-list').default)
    .directive('cGameWrapper', require('./components/game/game-wrapper').default)
    .directive('cGameContainer', require('./components/game/game-container').default)
    .directive('cGameGlobalFeed', require('./components/game/game-global-feed').default)
    .directive('cMarketplaceContainer', require('./components/marketplace/marketplace-container').default)
    .directive('cAwardsList', require('./components/awards/awards-list').default)
    .directive('cMarkerListSu', require('./components/marker/marker-list-su').default);


export default module.name;
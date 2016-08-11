import angular from 'angular-mod';
import '../../common/stylesheets/main.scss';
import '../../common/stylesheets/vendor/animate.min.css';
import '../../common/components/toast-notifications/script-toast-notifications.js';

let module = angular.module('app.base', [])
    .directive('cButtonClose', require('./common/buttons/button-close').default)
    .directive('cButtonBack', require('./common/buttons/button-back').default)
    .directive('cButtonMenu', require('./common/buttons/button-menu').default)
    .directive('cButtonInit', require('./common/buttons/button-init').default)
    .directive('cButtonCallToAction', require('./common/buttons/button-call-to-action').default)
    //.directive('cBadgesList', require('./badges/badges-list').default)
    .directive('cBadgesGrid', require('./badges/badges-grid').default)
    .directive('cCustomerLogin', require('./customer/customer-login').default)
    .directive('cCustomerRegister', require('./customer/customer-register').default)
    .directive('cCustomerUpdate', require('./customer/customer-update').default)
    .directive('cCustomerNav', require('./customer/customer-nav').default)
    .directive('cCustomerLogout', require('./customer/customer-logout').default)
    .directive('cCustomerReset', require('./customer/customer-reset').default)
    .directive('cCustomerActivate', require('./customer/customer-activate').default)
    .directive('cNotificationsPopup', require('./notifications/notifications-popup').default)
    .directive('cNotificationsAwards', require('./notifications/notifications-awards').default)
    //.directive('cNotificationsList', require('./notifications/notifications-list').default)
    .directive('cRankingList', require('./rankings/ranking-list').default)
    //.directive('cRankingTotal', require('./rankings/ranking-total').default)
    //.directive('cProfileSimple', require('./profile/profile-simple').default)
    //.directive('cProfileAdvanced', require('./profile/profile-advanced').default)
    .directive('cProfileHeader', require('./profile/profile-header').default)
   // .directive('cProfileFull', require('./profile/profile-full').default)
    .directive('cLevelActual', require('./levels/level-actual').default)
    .directive('cLevelRow', require('./levels/level-row').default)
    .directive('cQuestsList', require('./quests/quests-list').default)
   //0.directive('cQuestsGrid', require('./quests/quests-grid').default)
    .directive('cGameWrapper', require('./game/game-wrapper').default)
    .directive('cGameRoom', require('./game/game-room').default)
    .directive('cGameRoomDetail', require('./game/game-room-detail').default)
    .directive('cGameGlobalFeed', require('./game/game-global-feed').default)
    .directive('cMarketplaceContainer', require('./marketplace/marketplace-container').default)
    .directive('cAwardsList', require('./_TODO/awards/awards-list').default)
    //.directive('cMarkerListSu', require('./marker/marker-list-su').default)
    .directive('cMarkerDisplay', require('./marker/marker-display').default)
    //.directive('cMarkerGridSu', require('./marker/marker-grid-su').default)
    //.directive('cProgressbarOld', require('./notifications/progressbar-old').default)
    .directive('cProgressbar', require('./notifications/progressbar').default)
    .directive('cWidgetHeader', require('./common/widget-header').default);


export default module.name;
import angular from 'angular-mod';
import '../../common/stylesheets/main.scss';
import '../../common/stylesheets/vendor/animate.min.css';

let module = angular.module('app.base', [])
    .directive('cButtonClose', require('./common/buttons/button-close').default)
    .directive('cButtonBack', require('./common/buttons/button-back').default)
    .directive('cButtonMenu', require('./common/buttons/button-menu').default)
    .directive('cButtonInit', require('./common/buttons/button-init').default)
    .directive('cBadgesGrid', require('./badges/badges-grid').default)
    .directive('cCustomerLogin', require('./customer/customer-login').default)
    .directive('cCustomerRegister', require('./customer/customer-register').default)
    .directive('cCustomerUpdate', require('./customer/customer-update').default)
    .directive('cCustomerLogout', require('./customer/customer-logout').default)
    .directive('cCustomerReset', require('./customer/customer-reset').default)
    .directive('cCustomerActivate', require('./customer/customer-activate').default)
    .directive('cNotificationsAwards', require('./notifications/notifications-awards').default)
    .directive('cRankingList', require('./rankings/ranking-list').default)
    .directive('cProfileHeader', require('./profile/profile-header').default)
    .directive('cCurrentLevel', require('./levels/current-level').default)
    .directive('cLevelRow', require('./levels/level-row').default)
    .directive('cQuestsList', require('./quests/quests-list').default)
    .directive('cGameRoom', require('./game/game-room').default)
    .directive('cGameRoomDetail', require('./game/game-room-detail').default)
    .directive('cGameGlobalFeed', require('./game/game-global-feed').default)
    .directive('cMarketplaceContainer', require('./marketplace/marketplace-container').default)
    .directive('cAwardsList', require('./_TODO/awards/awards-list').default)
    .directive('cMarkerListSu', require('./marker/marker-list-su').default)
    .directive('cMarkerDisplay', require('./marker/marker-display').default)
    .directive('cProgressbar', require('./notifications/progressbar').default)
    .directive('cLoader', require('./common/loader').default)
    .directive('cLoaderWrap', require('./common/loader-wrap').default)
    .directive('cWidgetHeader', require('./common/widget-header').default);


export default module.name;
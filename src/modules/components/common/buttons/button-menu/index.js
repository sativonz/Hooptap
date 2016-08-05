import template from './template.jade';
import './styles.scss';
/**
 * @ngdoc directive
 * @name Button menu
 * @module Components
 * @description Button to open the menu.
 * @param {Array} value Array objects for menu items. default format: [{view: 'quest-list', title:'Quests'},{view: 'badges-list', title: 'Badges'}]
 * @restrict E
 * @element ANY
 */
export default(Customer, $rootScope) => ({
    restrict: 'E',
    scope: {
        showQuests: '=',
        showBadges: '=',
        showRanking: '=',
        showLevel: '=',
        showGlobalFeed: '=',
        showMarketplace: '=',
        showEditProfile: '=',
        showGameRoom: '=',
    },
    template,
    link: (scope, element, attrs)=> {
        scope.formLogout = () => {
            Customer.logout().$promise
                .then( (response) => {
                    $rootScope.customer = {};
                    scope.showDropdown = false;
                    $rootScope.logged = false;
                } );
        };

        ///->Open menu
        var $mnu = $('#menu');
        var $btn_mnu = $('#button-menu');

        $btn_mnu
            .click(function (e) {
                $mnu.toggle('slow');
            });
        $mnu
            .on( 'blur focusOut click', function(e) {
                $mnu.toggle('slow');
            });


    }
});
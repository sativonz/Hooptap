import template from './template.jade';
import './styles.scss';
/**
 * @ngdoc directive
 * @name Button menu
 * @module Components
 * @description Button to open the menu
 * @restrict E
 * @param {Boolean} showQuests Whether to display the quests link
 * @param {Boolean} showBadges Whether to display the badges link
 * @param {Boolean} showRankings Whether to display the ranking link
 * @param {Boolean} showLevel Whether to display the level link
 * @param {Boolean} showGlobalFeed Whether to display the global feed link
 * @param {Boolean} showEditProfile Whether to display edit profile link
 * @param {Boolean} showGameRoom Whether to display the game room link
 * @param {Boolean} titleGameRoom To put the title of the Game Room dinamically
 * @element ANY
 */
export default(Customer, $rootScope, $parse) => ({
    restrict: 'E',
    scope: {
        showQuests: '=',
        showBadges: '=',
        showRankings: '=',
        showLevel: '=',
        showGlobalFeed: '=',
        showMarketplace: '=',
        showEditProfile: '=',
        showGameRoom: '=',
        titleGameRoom: '='
    },
    template,
    link: (scope, element, attrs)=> {

        //->Link to logout
        scope.formLogout = () => {
            Customer.logout().$promise
                .then( (response) => {
                    $rootScope.customer = {};
                    scope.showDropdown = false;
                    $rootScope.logged = false;
                } );
        };


        //->Open menu
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


        //TODO refactor
        scope.showRankingDetail = (item) => {
            $rootScope.customer.ranking = item;

            $rootScope.customer.ranking.actualSu = item.name;
            console.log("RANKING: ", $rootScope.customer.ranking);
        }

    }
});
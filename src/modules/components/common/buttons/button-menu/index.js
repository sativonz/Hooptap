import template from './template.jade';
import './styles.scss';
import stampit from 'stampit';
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
export default(Customer, $rootScope, BaseModel, _isCustomer, _hasRankings) => ({
    restrict: 'E',
    scope: {
        showQuests: '=',
        showBadges: '=',
        showRankings: '=',
        showLevel: '=',
        showLevelList: '=',
        showGlobalFeed: '=',
        showMarketplace: '=',
        showEditProfile: '=',
        showGameRoom: '=',
        titleGameRoom: '=',
        item: '='
    },
    template,
    link: (scope, element, attrs)=> {


        //->Link to logout
        let CustomerModel = stampit().compose(BaseModel, _isCustomer);
        scope.logout = () => {
            scope.showDropdown = false;
            CustomerModel().logout();
        };


        //->Open menu
        var $mnu = $('#ht-menu');
        var $btn_mnu = $('#ht-menu__btn');

        $btn_mnu
            .click(function (e) {
                $mnu.toggle('slow');
            });
        $mnu
            .on( 'blur focusOut click', function(e) {
                $mnu.toggle('slow');
            });

        //->Ranking view
        scope.viewRanking = (scoreUnit)=> {
            let RankingModel = stampit().compose(BaseModel, _hasRankings);
            RankingModel().getRankingByScoreUnit(scoreUnit)
                .then((response)=> {
                    //console.log(response);
                    let ranking = { scoreUnit: scoreUnit, customers: response };
                    $rootScope.$broadcast('$rankingView', ranking);
                })
                .catch((error)=> {
                    console.log(error);
                });
        };

        scope.checkLevelActual = (item) => {
            if(item.levels.length <= 0){}else {$root.WPF.viewLevelActual = !$root.WPF.viewLevelActual}
        };


    }
});
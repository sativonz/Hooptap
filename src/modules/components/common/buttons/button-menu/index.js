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
        value: '='
    },
    template,
    link: (scope, element, attrs)=> {
        scope.formLogout = () => {
            Customer.logout().$promise
                .then((response)=> {
                    $rootScope.customer = {};
                    scope.showDropdown = false;
                    $rootScope.logged = false;
                });
        };

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

        //
        // scope.changeView = function(view) {
        //     console.log(view);
        //     // if($rootScope.view === true){
        //     //     $rootScope.view = false
        //     //
        //     // }else if($rootScope.view === false) {
        //     //     $rootScope.view = true
        //     // }
        //     //$rootScope.view =  !$rootScope.view;
        //     console.log(view);
        //     $rootScope.view = !view;
        //     console.log($rootScope.view);
        // }
    }
});
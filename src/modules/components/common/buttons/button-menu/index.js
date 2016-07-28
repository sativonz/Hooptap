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
    link: (scope, element, attrs)=>{
        scope.formLogout = () => {
            Customer.logout().$promise
                .then((response)=> {
                    $rootScope.customer = {};
                    scope.showDropdown = false;
                    $rootScope.logged = false;
                });
        };

        var $nav_icon = $('.nav-icon');
        var $mnu = $('#menu');
        var $btn_mnu = $('#button-menu');

        $nav_icon
            .click( function(e) {
                $btn_mnu.toggleClass('open-menu');
            });
        //TODO No funciona el metodo blur... Revisar......
        $mnu
            .on( 'blur focusout click', function(e) {
                $btn_mnu.removeClass('open-menu');
            });

        $("#ht-widget").hover(function() {
            $btn_mnu.removeClass('open-menu');

        });
    }
});
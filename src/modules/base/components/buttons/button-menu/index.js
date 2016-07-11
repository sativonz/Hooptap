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
        scope.showDropdown = false;
        scope.toggleDropdown = (event)=>{
            scope.showDropdown = !scope.showDropdown;
        };
        scope.logout = () => {
            Customer.logout();
            $rootScope.view = "";
            $rootScope.logged = false;
        };

        scope.hideMenu = () => {
            scope.showDropdown =  false;
        }
    }


});
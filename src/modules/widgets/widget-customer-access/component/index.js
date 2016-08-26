import template from './template.jade';
import './styles.scss';
/**
 * @ngdoc directive
 * @name Widget customer access
 * @module Components
 * @description Component for navigation in form of tabs in the login form or the register form
 * @restrict E
 * @param {Boolean} showLoginForm Whether to display only de login form
 * @param {Boolean} showMixForm Whether to display only de register form
 * @param {Boolean} showRegisterForm Whether to display the mix form
 * @element ANY
 */
export default(Customer, LoopBackAuth, $rootScope) => ({
    restrict: 'E',
    template,
    scope: {
        showRegisterForm: '=',
        showLoginForm: '=',
        showMixForm: '='
    },
    link: (scope, element, attrs)=> {

        Customer.findById(LoopBackAuth.currentUserId).$promise.then(
            (response)=>{
                $rootScope.customer = response;
            }
        );



        Customer.getCurrent({
        }).$promise.then((response)=> {
            scope.user = response;

        }).catch((error)=> {
            console.log(error);
        });
    }
});
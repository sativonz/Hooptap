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
    controller: ($scope, $rootScope, Customer, ScoreUnit, Level, LoopBackAuth)=> {

        var loginEvent =  $rootScope.$on("loginSuccess", (event, response)=>{
            getMessage();
        });
        function getMessage() {
            // let response = yield Customer.getCurrent( { filter: { include: ['levels','badges'] } } ).$promise;
            // $scope.customer = response;
            // $rootScope.customer = {};
            $rootScope.customer.logged = true;

        }

        //Destroy Events
        $scope.$on('$destroy', ()=>{
            loginEvent();
        });

    },
    link: (scope, element, attrs)=> {}
});
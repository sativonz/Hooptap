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
export default(Customer, LoopBackAuth, $rootScope, clientHelper, $timeout) => ({
    restrict: 'E',
    template,
    scope: {
        showRegisterForm: '=?',
        showLoginForm: '=?',
        showMixForm: '=?'
    },
    controller: ($scope, $rootScope, $timeout)=> {

        var loginEvent = $rootScope.$on("loginSuccess", (event, response)=> {
            getMessage();
        });

        function getMessage() {
            $rootScope.customer = {};
            $rootScope.customer.logged = true;
        }


        //Destroy Events
        $scope.$on('$destroy', ()=> {
            loginEvent();
        });



    },
    link: {
        pre: function PreLinkingFunction(scope, element, attrs) {   //Default values for widget customer access
            let defaults = {
                showMixForm: false,
                showRegisterForm: false,
                showLoginForm: false
            };

            clientHelper.setDefaultAttributes(defaults, scope, attrs);
        }


    }


});
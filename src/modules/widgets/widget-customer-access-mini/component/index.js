import template from './template.jade';
import './styles.scss';
import stampit from 'stampit';
//TODO ngdocs

export default(LoopBackAuth, $rootScope, clientHelper) => ({
    restrict: 'E',
    template,
    scope: {
        vertical: '=?',
        horizontal: '=?'
    },
    controller: ($scope, $rootScope, LoopBackAuth, BaseModel, _hasLogin, _isCustomer, $translate, Notifier)=> {

        let LoginModel = stampit().compose(BaseModel, _hasLogin);

        $scope.login = ()=> {
            //TODO ENCRIPTAR CREDENCIALES
            let credentials = {
                email: $scope.model.email,
                password: $scope.model.password
            };
            LoginModel().login(credentials).then((response)=> {
                $rootScope.customer = {};
                $rootScope.customer.logged = true;
                $scope.customer = response;
            }).catch((error)=> {
                if (error.status == 401) {
                    let msg = $translate.instant("TOAST.incorrect");
                    Notifier.error({title: msg, image: require('../images/error.png')});
                }
            });
        };

        //->Link to logout
        let CustomerModel = stampit().compose(BaseModel, _isCustomer);
        $scope.logout = () => {
            CustomerModel().logout();
        };

    },
    link: {
        pre: function PreLinkingFunction(scope, element, attrs) {   //Default values for widget customer access

            $rootScope.customer = {};
            $rootScope.customer.logged = false;

            //-> Default values
            let defaults = {
                vertical: false,
                horizontal: false
            };

            clientHelper.setDefaultAttributes(defaults, scope, attrs);
        }


    }

});
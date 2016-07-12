import template from './template.jade';
import './styles.scss';
/**
 * @ngdoc directive
 * @name Admin login
 * @module Component
 * @description For add login component (reset view is in)
 * @restrict E
 * @param
 * @element ANY
 */
export default($rootScope,Customer,LoopBackAuth) => ({
    restrict: 'E',
    scope: {},
    template,
    link:(scope, element, attrs)=>{

        var token;
        function getCurrent(){
            Customer.getCurrent().$promise
                .then((response)=>{
                    $rootScope.customer = response;
                    $rootScope.logged = true;
                });
        }
        $rootScope.logged = false;
        if(LoopBackAuth.rememberMe){
            getCurrent();
        }
        scope.login = ()=>{

            Customer.logout();

            //TODO Cambiar email y password por modelos de inputs
            Customer.login({
                "email": scope.email,
                "password": scope.password
            }).$promise
                .then((response)=> {
                    getCurrent();
                    TOAST("Bienvenido " + $rootScope.customer.username + "!!!", 'info');
                })
                .catch((error)=>{
                });


        };

    }
});
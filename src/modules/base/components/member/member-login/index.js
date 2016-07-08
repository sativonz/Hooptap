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
        $rootScope.logged = false;
        if(LoopBackAuth.rememberMe){
            $rootScope.logged = true;
            Customer.getCurrent().$promise.then((response)=>{
               $rootScope.customer = response;
            });
        }
        scope.login = ()=>{
            //TODO Cambiar email y password por modelos de inputs
            Customer.login({
                "email": "paco@paco.com",
                "password": "paco"
            }).$promise.then((response)=> {
                console.log(response);
                $rootScope.customer = response;
                $rootScope.logged = true;
            });
        };

    }
});
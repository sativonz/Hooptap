import template from './template.jade';

/**
 * @ngdoc directive
 * @name Admin login
 * @module Component
 * @description For add login component
 * @restrict E
 * @param
 * @element ANY
 */

export default() => ({
    restrict: 'E',
    scope: {},
    template,
    controller: ($scope, $rootScope, Customer, LoopBackAuth)=> {
        $rootScope.logged = false;
        if (LoopBackAuth.rememberMe) {
            getCurrent();
        }
        $scope.login = ()=> {

            //TODO Cambiar email y password por modelos de inputs
            Customer.login({
                "email": $scope.email,
                "password": $scope.password
            }).$promise
                .then((response)=> {
                    getCurrent();
                })
                .catch((error)=> {
                });

        };

        function getCurrent() {
            Customer.getCurrent().$promise
                .then((response)=> {
                    $rootScope.customer = response;
                    $rootScope.logged = true;
                    TOAST("Bienvenido " + $rootScope.customer.username + "!", 'info');
                    console.log("Hola");
                });
        }

    }
});
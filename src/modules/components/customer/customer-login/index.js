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

        if (LoopBackAuth.rememberMe) {
            getCurrent();
        }
        $scope.login = ()=> {

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
                    TOAST(
                        "Bienvenido " + $rootScope.customer.username + "!", null, {
                        style: 'info',
                        img: 'http://googledrive.com/host/0B5NVIiWQoHUhWGxUTHNtb3JWZG8/welcome.gif'
                    });

                });
        }

    }
});
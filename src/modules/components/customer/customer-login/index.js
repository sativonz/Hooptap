import template from './template.jade';
/**
 * @ngdoc directive
 * @name Customer login
 * @module Components
 * @description Component for Login a user with username/email and password
 * @restrict E
 * //TODO revisar los parametros opcionales
 * @param {String=} username Username of user
 * @param {String=} email User email
 * @param {String} password User password
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
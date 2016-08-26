import template from './template.jade';
import Q from 'q';
/**
 * @ngdoc directive
 * @name Customer login
 * @module Components
 * @description Component for Login a user with email and password
 * @restrict E
 * @param {String} email User email
 * @param {String} password User password
 * @element ANY
 */
export default() => ({
    restrict: 'E',
    scope: {},
    template,
    controller: ($scope, $rootScope, Customer, ScoreUnit, Level, LoopBackAuth)=> {
        if (LoopBackAuth.rememberMe) {
            $rootScope.$broadcast('loginSuccess');
        }
        $scope.login = ()=> {
            Customer.login({
                "email": $scope.email,
                "password": $scope.password,
                //TODO Change for actual productId
                "productId": '5784fda092cabc234005814b'
            }).$promise
                .then((response)=> {
                    if(response){
                        console.log(response);
                        TOAST(

                            "Welcome " + response.user.username + "!", null, {
                                style: 'info',
                                img: require('./images/default-img-popover.png')
                            });
                        console.log('Response de login', response);
                        $rootScope.$broadcast('loginSuccess', response);

                    }
                })
                .catch((error)=> {
                });
        };


    }
});
import template from './template.jade';
//import angular from 'angular-mod';
/**
 * @ngdoc directive
 * @name Customer register
 * @module Components
 * @description Component for register a new user
 * @restrict E
 * //TODO revisar params...
 * @param {String} username Username of the user
 * @param {String} email User email
 * @param {String} password User password
 * @element ANY
 */
export default($rootScope, Customer,LoopBackAuth, $translate) => ({
    restrict: 'E',
    scope: {},
    template,
    link:(scope, element, attrs)=> {

        scope.register = ()=> {
            angular.element(document.querySelector(".ht-form__failed-pass")).css("display", "none");
            if(scope.password == scope.rePassword) {
                Customer.create({
                    "username"      :   scope.username,
                    "email"         :   scope.email,
                    "password"      :   scope.password,

                    "name"          :   scope.name,
                    "surnames"      :   scope.surnames,
                    "city"          :   scope.city,
                    "direction"     :   scope.direction,
                    "birthDate"     :   scope.birthDate,
                    "postalCode"    :   scope.postalCode,
                    "telephone"     :   scope.telephone,
                    "productId": "57c846e00f761821e71ef1fc"//TODO PROVISIONAL
                }).$promise.then((registered)=> {
                    $rootScope.$broadcast('$registerSuccess', registered);
                    if ($rootScope.customer) {
                        $rootScope.customer.logged = true;
                    } else {
                        $rootScope['customer'] = {logged: true};
                    }
                    //TODO descomentar cuando este hecha la conexion
                    //$rootScope.goActivateForm = true;

                    let msgSucceess = $translate.instant("TOAST.correctRegister");
                    let msgWelcome = $translate.instant("CUSTOMER.common.welcome");
                    TOAST(
                        msgWelcome + (scope.username || '') + "!", msgSucceess, {
                            style: 'info',
                            img: require('./images/default-img-popover.png')
                        });

                }).catch((error)=>{
                    if(
                        error.status == 422){
                        angular.element(document.querySelector(".ht-form__failed-pass")).css("display", "none");

                        let msgDuplicated = $translate.instant("TOAST.duplicated");
                        TOAST(
                            "ERROR !" , msgDuplicated, {
                                style: 'alert',
                                img: require('./images/error.png')
                            });
                    }
                });
            } else {
                angular.element(document.querySelector(".ht-form__failed-pass")).css("display", "block");
            }



        };
    }

});
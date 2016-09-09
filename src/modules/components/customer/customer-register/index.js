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
        scope.loader = true;
        scope.myPattern = "/^((\d{4})-(\d{2})-(\d{2})|(\d{2})\/(\d{2})\/(\d{4}))$/";

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
                    scope.loader = true;
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
                    //Mensaje de error el email ya existe
                    if(error.data.error.details.codes.email){
                        if(error.data.error.details.codes.email[0] == "uniqueness" || !undefined){
                            scope.loader = true;
                            angular.element(document.querySelector(".ht-form__failed-pass")).css("display", "none");

                            let emailDuplicated = $translate.instant("TOAST.emailDuplicated");
                            TOAST(
                                "ERROR !" , emailDuplicated, {
                                    style: 'alert',
                                    img: require('./images/error.png')
                                });
                        }
                    }


                    //Mensaje de error si el username ya existe
                    if(error.data.error.details.codes.username){
                        if(error.data.error.details.codes.username[0] == "uniqueness" || !undefined) {
                            scope.loader = true;
                            angular.element(document.querySelector(".ht-form__failed-pass")).css("display", "none");
                            let usernameDuplicated = $translate.instant("TOAST.usernameDuplicated");
                            TOAST(
                                "ERROR !" , usernameDuplicated, {
                                    style: 'alert',
                                    img: require('./images/error.png')
                                });
                        }
                    }

                });
            } else {
                //Mensaje de error no coinciden las contraseñas
                angular.element(document.querySelector(".ht-form__failed-pass")).css("display", "block");
            }



        };
    }

});
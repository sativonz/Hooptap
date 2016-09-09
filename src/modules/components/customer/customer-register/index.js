import template from './template.jade';
import './styles.scss';
import stampit from 'stampit';
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
export default($rootScope, Customer, LoopBackAuth, $translate, BaseModel, _hasLogin) => ({
    restrict: 'E',
    scope: {},
    template,
    link: (scope, element, attrs)=> {
        let RegisterModel = stampit().compose(BaseModel, _hasLogin);
        let $form = scope.htFormRegister;
        scope.model = {
            username: "customer",
            name: "customer",
            email: "customer@customer.com",
            password: "customer",
            rePassword: "customer"
        };
        scope.register = ()=> {
            angular.element(document.querySelector(".ht-form__failed-pass")).css("display", "none");
            if (scope.model.password === scope.model.rePassword) {
                RegisterModel().create(scope.model).then((registered)=> {
                    $rootScope.$broadcast('$registerSuccess', registered);
                    if ($rootScope.customer) {
                        $rootScope.customer.logged = true;
                    } else {
                        $rootScope['customer'] = {logged: true};
                    }
                    let msgSucceess = $translate.instant("TOAST.correctRegister");
                    let msgWelcome = $translate.instant("CUSTOMER.common.welcome");
                    TOAST(
                        msgWelcome + (scope.username || '') + "!", msgSucceess, {
                            style: 'info',
                            img: require('./images/default-img-popover.png')
                        });

                }).catch((error)=> {
                    window.form = scope.htFormRegister;
                    if (error.status == 422) {
                        angular.element(document.querySelector(".ht-form__failed-pass")).css("display", "none");

                        let msgDuplicated = $translate.instant("TOAST.duplicated");
                        TOAST(
                            "ERROR !", msgDuplicated, {
                                style: 'alert',
                                img: require('./images/error.png')
                            });
                    }

                });
            } else {

                $form.rePassword.$valid = false;
                console.log($form.rePassword);
                //angular.element(document.querySelector(".ht-form__failed-pass")).css("display", "block");
            }


        };
    }

});
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
export default($rootScope, Customer, LoopBackAuth, $translate, BaseModel, _hasLogin, _isCustomer) => ({
    restrict: 'E',
    scope: {},
    template,
    link: (scope, element, attrs)=> {
        let LoginModel = stampit().compose(BaseModel, _hasLogin);
        let CustomerModel = stampit().compose(BaseModel, _isCustomer);

        let includeFilter = {filter: {include: ['levels', 'badges']}};

        let $form = scope.htRegisterForm;
        scope.register = ()=> {
            if ($form.$valid) {
                if (scope.model.password == scope.model.rePassword) {
                    LoginModel().create(CustomerModel(scope.model)).then((registered)=> {
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
                            let msgDuplicated = $translate.instant("TOAST.duplicated");
                            TOAST(
                                "ERROR !", msgDuplicated, {
                                    style: 'alert',
                                    img: require('./images/error.png')
                                });
                        }
                    });
                }
            }
        };

        $rootScope.$on('registerSuccess', (event, response)=> {
            let credentials = {
                email: response.email,
                password: scope.model.password
            };

            LoginModel().login(credentials, includeFilter).then((response)=> {
                $rootScope.$broadcast('$loginSuccess', response);
            }).catch((error)=> {

                //TODO NOTIFICADOR ERRORES
                if (error.status == 401) {
                    let msg = $translate.instant("TOAST.incorrect");
                    TOAST(
                        "ERROR !", msg, {
                            style: 'alert',
                            img: require('./images/error.png')
                        });
                }
            });

        });
    }

});
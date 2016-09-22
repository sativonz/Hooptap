import template from './template.jade';
import './styles.scss';
import stampit from 'stampit';
//TODO ngdocs

export default($rootScope, LoopBackAuth, BaseModel, _hasLogin, _isCustomer, $translate, Notifier, $uibModal) => ({
    restrict: 'E',
    template,
    scope: {
        msgWelcome: '@?'
    },
    link(scope, element, attrs) {
        let LoginModel = stampit().compose(BaseModel, _hasLogin);

        scope.login = ()=> {
            //TODO ENCRIPTAR CREDENCIALES
            let credentials = {
                email: scope.model.email,
                password: scope.model.password
            };
            LoginModel().login(credentials).then((response)=> {
                $rootScope.customer = {};
                $rootScope.customer.logged = true;
                element.remove();
                scope.customer = response;
            }).catch((error)=> {
                if (error.status == 401) {
                    let msg = $translate.instant("TOAST.incorrect");
                    Notifier.error({title: msg, image: require('../images/error.png')});
                }
            });
        };

        //->Link to logout
        scope.logout = () => {
            CustomerModel().logout();
        };

        let CustomerModel = stampit().compose(BaseModel, _isCustomer);

        scope.duplicatedEmail = false;

        scope.register = ()=> {
            //duplicate fields
            scope.emailDuplicated = false;
            scope.usernameDuplicated = false;
            let $form = scope.htFormWidgetCustomerAccessModalRegister;

            if ($form.$valid) {
                if (scope.model.password == scope.model.rePassword) {
                    let newCustomer = CustomerModel(scope.model).toJson();
                    LoginModel().create(newCustomer).then((registered)=> {
                        $rootScope.$broadcast('$registerSuccess', registered);
                        if ($rootScope.customer) {
                            $rootScope.customer.logged = true;
                        } else {
                            $rootScope['customer'] = {logged: true};
                        }
                        let msgSucceess = $translate.instant("TOAST.correctRegister");
                        let msgWelcome = ($translate.instant("CUSTOMER.common.welcome")) + (scope.username || '') + "!";
                        Notifier.loginRegisterSuccess({
                            title: msgWelcome,
                            message: msgSucceess,
                            image: require('../images/default-img-popover.png')
                        });
                        element.remove();

                    }).catch((error)=> {
                        if (error.status == 422) {
                            let msgDuplicated = $translate.instant("TOAST.duplicated");
                            scope.duplicatedCodes = error.data.error.details.codes;

                            //TODO Improve validation for duplicated values
                            for (var code in scope.duplicatedCodes) {
                                scope[code + 'Duplicated'] = true;
                            }
                            Notifier.error({title: msgDuplicated, image: require('../images/error.png')});
                        }
                    });
                } else if (scope.model.password != scope.model.rePassword) {
                    let badPassword = $translate.instant("TOAST.badPassword");
                    Notifier.error({title: badPassword, image: require('../images/error.png')});
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
                let internalServerError = $translate.instant("TOAST.internalServerError");
                Notifier.error({title: internalServerError, image: require('../images/error.png')});

            });

        });
    }

});
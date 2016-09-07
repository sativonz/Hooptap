import template from './template.jade';
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
export default($rootScope, Customer,LoopBackAuth) => ({
    restrict: 'E',
    scope: {},
    template,
    link:(scope, element, attrs)=> {

        scope.register = ()=> {

            Customer.create({
                "username": scope.username,
                "email": scope.email,
                "password": scope.password,
                "productId": "57c846e00f761821e71ef1fc"//TODO PROVISIONAL
            }).$promise.then((registered)=> {
                $rootScope.$broadcast('$registerSuccess', registered);
                if ($rootScope.customer) {
                    $rootScope.customer.logged = true;
                } else {
                    $rootScope['customer'] = {logged: true};
                }
                //TODO descomentar
                //$rootScope.goActivateForm = true;
                TOAST(
                    "Welcome " + scope.username + "!", "Registro realizado con éxito.", {
                        style: 'info',
                        img: require('./images/default-img-popover.png')
                    });
            }).catch((error)=>{
                console.log(error);
            });

        };
    }

});
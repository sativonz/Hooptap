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
                "productId": "57722deffc827f8e7dbafc33"//TODO PROVISIONAL
            }).$promise.then((registered)=> {
                $rootScope.logged = false;
                $rootScope.goActivateForm = true;
                $rootScope.customer = {};
                TOAST(
                    "Welcome " + scope.username + "!", "Registro realizado con éxito.", {
                        style: 'info',
                        img: 'http://hooptap.s3.amazonaws.com/widgets/notifications/default-img-popover.png'
                    });
            }).catch((error)=>{
                console.log(error);
            });

        };
    }

});
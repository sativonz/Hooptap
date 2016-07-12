import template from './template.jade';

export default($rootScope, Customer,LoopBackAuth) => ({
    restrict: 'E',
    scope: {},
    template,
    link:(scope, element, attrs)=> {

        scope.register = ()=> {

            Customer.logout();
            Customer.create({
                "username": scope.username,
                "email": scope.email,
                "password": scope.password,
                "productId": "57722deffc827f8e7dbafc33"//TODO PROVISIONAL
            }).$promise.then((registered)=> {
                $rootScope.logged = false;
                TOAST("Bienvenido " + $rootScope.customer.username + "!" + " Registro realizado con éxito.", 'info');
            }).catch((error)=>{
                console.log(error);
            });

        };
    }

});
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
                TOAST("Bienvenido " + scope.username + "!!", "Registro realizado con éxito.", {style: 'info'});
                //TODO refactor
                $root.goActivateForm = true;
            }).catch((error)=>{
                console.log(error);
            });

        };
    }

});
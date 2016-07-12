import template from './template.jade';
import './styles.scss';

export default($rootScope,Customer,LoopBackAuth) => ({
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
                alert("Registro realizado con exito");
            }).catch((error)=>{
                console.log(error);
            });

        };
    }

});
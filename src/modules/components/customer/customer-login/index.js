import template from './template.jade';
import stampit from 'stampit';
/**
 * @ngdoc directive
 * @name Customer login
 * @module Components
 * @description Component for Login a user with email and password
 * @restrict E
 * @param {String} email User email
 * @param {String} password User password
 * @element ANY
 */
export default() => ({
    restrict: 'E',
    scope: {},
    template,
    controller: ($scope, $rootScope, LoopBackAuth, BaseModel, _hasCustomer)=> {
        var CustomerModel = stampit().compose(BaseModel, _hasCustomer)();
        if (LoopBackAuth.rememberMe === 'true') {
            //console.log(LoopBackAuth.rememberMe);
            CustomerModel.getCurrent({filter: {include: ['levels', 'badges']}}).then((response)=> {
                $rootScope.$broadcast('$loginSuccess', CustomerModel);
            });
        } else {
            LoopBackAuth.clearStorage();
        }
        window.customer = CustomerModel;
        $scope.rememberMe = false;
        $scope.login = ()=> {
            //TODO ENCRIPTAR CREDENCIALES
            CustomerModel.login({
                email: $scope.email,
                password: $scope.password,
                rememberMe: $scope.rememberMe
            }).then((response)=> {
                CustomerModel.initialize(response);
                $rootScope.$broadcast('$loginSuccess', CustomerModel);
            }).catch((error)=> {
                //TODO NOTIFICADOR ERRORES
                console.log(error);
            });
        };

    }
});
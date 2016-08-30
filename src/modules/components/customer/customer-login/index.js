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
        //Stampit customer init
        var CustomerModel = stampit().compose(BaseModel, _hasCustomer);
        var includeFilter = {filter: {include: ['levels', 'badges']}};
        if (LoopBackAuth.rememberMe === 'true') {
            console.log(LoopBackAuth.rememberMe);
            CustomerModel().getCurrent(includeFilter).then((response)=> {
                CustomerModel().initialize(response);
                $rootScope.$broadcast('$loginSuccess', CustomerModel());

            });
        } else {
            LoopBackAuth.clearStorage();
            LoopBackAuth.clearUser();
        }
        $scope.login = ()=> {
            //TODO ENCRIPTAR CREDENCIALES
            CustomerModel.login({
                email: $scope.email,
                password: $scope.password,
                rememberMe: $scope.rememberMe
            }).then((response)=> {
                CustomerModel().initialize(response);
                $rootScope.$broadcast('$loginSuccess', CustomerModel());
            }).catch((error)=> {
                //TODO NOTIFICADOR ERRORES
                console.log(error);
            });
        };

    }
});
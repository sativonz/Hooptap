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
    controller: ($scope, $rootScope, LoopBackAuth, BaseModel, _hasLogin, $translate, Notifier)=> {


        $scope.mask = false;

        //Models
        let LoginModel = stampit().compose(BaseModel, _hasLogin);

        //Query filter
        let includeFilter = {filter: {include: [{badgeInstances: 'badge'}, {scoreUnitInstances: 'scoreUnit'}, 'levels']}};

        //Check if rememberMe is  true , make login and get current.


        //Login function to View
        $scope.login = ()=> {
            //TODO ENCRIPTAR CREDENCIALES
            $scope.mask = true;
            let credentials = {
                email: $scope.email,
                password: $scope.password,
                rememberMe: $scope.rememberMe || false
            };
            LoginModel().login(credentials, includeFilter).then((response)=> {
                $rootScope.$broadcast('$loginSuccess', response);
                $scope.mask = false;
            }).catch((error)=> {
                $scope.mask = false;
                //TODO NOTIFICADOR ERRORES
                if (error.status == 401) {
                    let msg = $translate.instant("TOAST.incorrect");
                    //Notifier.error({title: msg, image: require('./images/error.png')});
                }
            });
        };

        }
    });
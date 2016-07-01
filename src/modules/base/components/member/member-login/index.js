import template from './template.jade';
import './styles.scss';
/**
 * @ngdoc directive
 * @name Member login
 * @module Component
 * @description For add login component (reset view is in)
 * @restrict E
 * @param
 * @element ANY
 */
export default($rootScope,Member) => ({
    restrict: 'E',
    scope: {},
    template,
    link:(scope, element, attrs)=>{
        var token;

        scope.userLogin = ()=> {
            var accesToken = Member.login({
                "email": scope.email,
                "password": scope.password
            }).$promise.then((response)=> {
                token = response.id;
                return Member.findById({id: response.userId}).$promise;
            }).then(user => {
                scope.member = user;
            }).then(()=>{
                //TODO woooorse
                $rootScope.route.login =  'succes';          
                
            });
        };
    }
});
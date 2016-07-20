import template from './template.jade';
/**
 * @ngdoc directive
 * @name Customer logut
 * @module Components
 * @description Component for log out
 * @restrict E
 * @element ANY
 */
export default(Customer, $rootScope, $q) => ({
    restrict: 'E',
    scope: {},
    template,
    link: (scope, element, attrs) =>  {
        attrs.formLogout = attrs.formLogout || false; //default value
        scope.formLogout = () => {
            Customer.logout().$promise
                .then((response)=> {
                    $rootScope.customer = {};
                    scope.showDropdown = false;
                    $rootScope.logged = false;
                });
        }
}
});
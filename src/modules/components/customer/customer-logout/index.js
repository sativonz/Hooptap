import template from './template.jade';
import './styles.scss';
import Q from 'q';
//TODO ngDocs
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
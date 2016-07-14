import template from './template.jade';
import './styles.scss';
//TODO ngDocs
export default(Customer, $rootScope) => ({
    restrict: 'E',
    scope: {},
    template,

    link: (scope, element, attrs) =>  {

        attrs.logout = attrs.logout || false; //default value
        scope.logout = () => {
            Customer.logout();
            scope.showDropdown = false;
            $rootScope.logged = false;
        }
}

});
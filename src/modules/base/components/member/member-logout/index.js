import template from './template.jade';
import './styles.scss';

export default(Customer, $rootScope) => ({
    restrict: 'E',
    scope: {},
    template,

    link: (scope, element, attrs) =>  {
        scope.logout = () => {
            Customer.logout();
            $rootScope.logged = false;
        }
}

});
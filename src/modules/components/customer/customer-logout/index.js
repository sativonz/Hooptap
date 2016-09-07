import template from './template.jade';
/**
 * @ngdoc directive
 * @name Customer logout
 * @module Components
 * @description Component for log out
 * @restrict E
 * @element ANY
 */
export default(Customer, $rootScope, $q, BaseModel, _isCustomer) => ({
    restrict: 'E',
    scope: {},
    template,
    link: (scope, element, attrs) =>  {
        attrs.formLogout = attrs.formLogout || false; //default value

        let CustomerModel = stampit().compose(BaseModel, _isCustomer);

        scope.formLogout = () => {
            CustomerModel.logout();
        }
}
});
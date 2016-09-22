import template from './template.jade';
import stampit from 'stampit';
/**
 * @ngdoc directive
 * @name Customer update
 * @module Components
 * @description Component for update instances of the model matched by where from the data source
 * @restrict E
 * @param {Object} value  User object
 * @element ANY
 */
export default($rootScope, Customer, BaseModel, _hasCustomer) => ({
    restrict: 'E',
    scope: {model: '=value'},
    template,
    link: (scope, element, attrs) => {
        let CustomerModel = stampit().compose(BaseModel, _hasCustomer);
        scope.model = CustomerModel(scope.model);
        //TODO Por llegar la respuesta de producto ¿?¿?
        scope.updateCustomer = function () {
            let diffs = scope.model.getDiffs();
            Customer.update().$promise
                .then((response) => {
                    //console.log("Save response", response);
                })
                .catch((err) => {
                    //console.log(err);
                });
            
        };
    }


})
;
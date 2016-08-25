import template from './template.jade';
/**
 * @ngdoc directive
 * @name Customer update
 * @module Components
 * @description Component for update instances of the model matched by where from the data sourceg
 * @restrict E
 * //TODO revisar params...
 * @param {String} email  User email
 * @element ANY
 */
export default($rootScope, Customer, LoopBackAuth) => ({
    restrict: 'E',
    scope: {},
    template,
    link: (scope, element, attrs) => {

        scope.form = {
            username : $rootScope.customer.username,
            email : $rootScope.customer.email
        };

        let getDiffs = () => {
            let diffs = Object.assign({}, scope.form);
            diffs.id = $rootScope.customer.id;
            delete diffs.email;
            return diffs;
        };


        scope.uploadDataProfile = function () {
            window.Customer = Customer;
            Customer.save(getDiffs()).$promise
                .then((response) => {
                    console.log(response);
                    debugger;
                })
                .catch((err) => {
                    console.log(err);
                });
        };
    }


})
;
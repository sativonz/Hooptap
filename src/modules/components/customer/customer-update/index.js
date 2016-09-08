import template from './template.jade';
/**
 * @ngdoc directive
 * @name Customer update
 * @module Components
 * @description Component for update instances of the model matched by where from the data source
 * @restrict E
 * @param {String} username  User name
 * @param {String} email  User email
 * @param {String} password  User password
 * @element ANY
 */
export default($rootScope, Customer, LoopBackAuth) => ({
    restrict: 'E',
    scope: {},
    template,
    link: (scope, element, attrs) => {

        scope.form = {
            username    : scope.username,
            email       : scope.email,
            productID   : "57c846e00f761821e71ef1fc"
        };

        let getDiffs = () => {
            let diffs = Object.assign({}, scope.form);
            delete diffs.email;
            return diffs;
        };

        //TODO Por llegar la respuesta de producto ¿?¿?
        scope.uploadDataProfile = function () {
            window.Customer = Customer;

            Customer.update(getDiffs()).$promise
                .then((response) => {
                    console.log("Save response", response);
                    debugger;
                })
                .catch((err) => {
                    console.log(err);
                });

            // Customer.save(getDiffs()).$promise
            //     .then((response) => {
            //         console.log("Save response", response);
            //         debugger;
            //     })
            //     .catch((err) => {
            //         console.log(err);
            //     });
        };
    }


})
;
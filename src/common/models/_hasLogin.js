import stampit from 'stampit';
import Q from 'q';

export default (Customer, BaseModel, _hasCustomer, $rootScope, $q, GLOBAL_CONFIG, $http, LoopBackAuth) => {
    return stampit()
        .compose(_hasCustomer)
        /**
         * @memberOf Rule.model:Rule
         * @stampit init
         */
        .init(function ({stamp}) {
            this.setRemoteModel('Customer');
            this._factory = Customer;
        })
        .methods({
            /**
             *
             * @param model model with {email: "", password: "", rememberMe: ""}
             * @returns {*|Promise.<T>} Returns $q promise with success or error response from server to login
             */
            login(model, filter){
                //TODO rememberMe??
                return Customer.login({rememberMe: (model.rememberMe || false)}, {
                    "email": model.email,
                    "password": model.password
                }).$promise.then((response)=> {
                    this.setLoggedRoot(response);
                    return $q.resolve(this.getCurrent(filter));
                }).catch((error)=> {
                    LoopBackAuth.clearStorage();
                    LoopBackAuth.clearUser();
                    return $q.reject(error);
                });
            },
            /**
             * set RootScope true if response.id exists and was success
             * @param response
             */
            setLoggedRoot(response){

                if (response.id) {

                    if ($rootScope.customer) {
                        $rootScope.customer.logged = true;
                    } else {
                        $rootScope['customer'] = {logged: true};
                    }
                }
            },

            create(model){
                return Customer.create(model).$promise;
            },
            getEvents() {
                debugger;
                return false;
                //return Event.find( { filter: { where: { customerId: Customer.id } }, limit: 20 } );
            }


        })
        .refs({})

        .props({});
}
;
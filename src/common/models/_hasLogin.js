import stampit from 'stampit';
import Q from 'q';

export default (Customer,_hasCustomer, $rootScope, $q) => {
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
                //TODO rememberMe
                return Customer.login({rememberMe: (model.rememberMe || false)}, {
                    "email": model.email,
                    "password": model.password
                    //TODO Change for actual productId
                    , "productId": this.productId
                }).$promise.then((response)=> {
                    this.setLoggedRoot(response);
                    return $q.resolve(this.getCurrent(filter));
                }).catch((error)=> {
                    return $q.reject(error);
                });
            },
            isAuthenticated(){
                return Customer.isAuthenticated();
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
            }

        })
        .refs({

        })

        .props({});
};
import stampit from 'stampit';
import Q from 'q';

export default (Customer, $rootScope, $q) => {
    return stampit()
        .compose()
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
            login(model){
                //TODO rememberMe
                return Customer.login({rememberMe: (model.rememberMe || false)}, {
                    "email": model.email,
                    "password": model.password
                    //TODO Change for actual productId
                    , "productId": this.productId
                }).$promise.then((response)=> {
                    if (response.id) {
                        if ($rootScope.customer) {
                            $rootScope.customer.logged = true;
                        } else {
                            $rootScope['customer'] = {logged: true};
                        }
                    }
                    return $q.resolve(response);
                }).catch((error)=> {
                    return $q.reject(error);
                });
            },
            /**
             *
             * @param filter
             * @returns {*|Function} Returns Promise to resolve from getCurrent Call of Loopback SDK
             */
            getCurrent(filter){
                return Customer.getCurrent(filter).$promise.then((response)=>{
                    this.initialize(response);
                });
            },

            getCustomerBadges(){
                //TODO getCustomerBadges
            },
            isAuthenticated(){
                return Customer.isAuthenticated();
            }

        })
        .refs({

            /**
             * @memberOf Rule.model:Rule
             * @stampit refs
             */
            _defaults: {
                productId: "57c3ff360ec402003d0ff56d" //TODO change to actual product id
            },

            _model: 'CustomerModel'
        })

        .props({});
};
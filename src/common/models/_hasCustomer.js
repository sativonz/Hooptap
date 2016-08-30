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
            /**
             *
             * @param filter
             * @returns {*|Function} Returns Promise to resolve from getCurrent Call of Loopback SDK
             */
            getCurrent(filter){
                return Customer.getCurrent(filter).$promise.then((response)=> {

                    this.setLoggedRoot(response);
                    return $q.resolve(response);
                }).catch((error)=> {
                    return $q.reject(error);
                });
            },

            getBadges(filter){
                //TODO getCustomerBadges
                debugger;
                return Customer['badges'](filter).$promise.then((response)=> {
                    this.badges = response;
                });
            },
            isAuthenticated(){
                return Customer.isAuthenticated();
            },
            logout(){
                Customer.logout();
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

            /**
             * @memberOf Rule.model:Rule
             * @stampit refs
             */
            _defaults: {
                productId: "57b56f541c3dd11afd50c5e6" //TODO change to actual product id
            },

            _model: 'CustomerModel'
        })

        .props({});
};
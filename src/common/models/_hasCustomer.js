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
                return Customer['badges'](filter).$promise.then((response)=> {
                    this.badges = response;
                });
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
                productId: "57c846efa42ef8225b2664fc" //TODO change to actual product id
                //productId: "57b56f541c3dd11afd50c5e6" //TODO change to actual product id
            }
        })

        .props({});
};
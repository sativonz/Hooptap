import stampit from 'stampit';
import Q from 'q';

export default (Customer, Event, $rootScope, $q) => {
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

            getEvents(CustomerId) {
                return Event.find( { filter: { where: { customerId: CustomerId }, limit: 10 } } );
            }

        })
        .refs({

            /**
             * @memberOf Rule.model:Rule
             * @stampit refs
             */
            _defaults: {}
        })

        .props({});
};
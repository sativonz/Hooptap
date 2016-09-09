import stampit from 'stampit';
import Q from 'q';

export default ($rootScope, Customer) => {
    return stampit()
        .compose()
        /**
         * @memberOf Rule.model:Rule
         * @stampit init
         */
        .init(function ({stamp}) {
        })
        .methods({

            logout(){
                Customer.logout();
                $rootScope.$broadcast('$logoutSuccess');
                $rootScope.customer.logged = false;
            }
        })
        .refs({

            /**
             * @memberOf Rule.model:Rule
             * @stampit refs
             */
            _defaults: {
                id: ''
            },

            _model: 'CustomerModel'
        })

        .props({});
};
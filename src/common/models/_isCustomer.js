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
            }

        })
        .refs({

            /**
             * @memberOf Rule.model:Rule
             * @stampit refs
             */
            _defaults: {
                id: '',
                productId: "57b56f541c3dd11afd50c5e6" //TODO change to actual product id
            },

            _model: 'CustomerModel'
        })

        .props({});
};
import stampit from 'stampit';
import Q from 'q';

export default ($rootScope, Customer, LoopBackAuth) => {
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

                LoopBackAuth.clearStorage();
                LoopBackAuth.clearUser();
                $rootScope.$broadcast('$logoutSuccess');
                $rootScope.customer = {};
                $rootScope.customer.logged = false;
            },
            prepare(model){
                let id = model.id == 'new' || !model.id ? undefined : model.id;
                let terms = undefined;
                //console.log(this.birthDate);
                
                return {id, terms};

            }
        })
        .refs({
            /**
             * @memberOf Rule.model:Rule
             * @stampit refs
             */
            _defaults: {},

            _model: 'CustomerModel'
        })

        .props({});
};
import stampit from 'stampit';
import _ from 'lodash';
import Q from 'q';

export default ($q, $state, $injector, BaseModel, _Savable,_Badge, _Quest, _ScoreUnit, Customer) => {

    return stampit()
        .compose(BaseModel, _Savable, _Badge, _Quest, _ScoreUnit)

        /**
         * @memberOf Rule.model:Rule
         * @stampit init
         */
        .init(function ({stamp}) {
            this.setRemoteModel('Customer');
            this._factory = Customer;
        })
        .methods({
            // getCurrent(){
            //     Q.async(function*() {
            //         let response = Customer.getCurrent().$promise;
            //
            //     })();
            // }
            

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
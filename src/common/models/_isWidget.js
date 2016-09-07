import stampit from 'stampit';

export default () => {
    return stampit()
        .compose()
        /**
         * @memberOf Rule.model:Rule
         * @stampit init
         */
        .init(function ({stamp}) {
        })
        .methods({

        })
        .refs({

            /**
             * @memberOf Rule.model:Rule
             * @stampit refs
             */
            _defaults: {
                id: '',
                productId: "57c846efa42ef8225b2664fc" //TODO change to actual product id
                //productId: "57b56f541c3dd11afd50c5e6" //TODO change to actual product id
            },

            _model: 'WidgetModel'
        })

        .props({});
};
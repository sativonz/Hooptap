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
                id: ''
            },

            _model: 'WidgetModel'
        })

        .props({});
};
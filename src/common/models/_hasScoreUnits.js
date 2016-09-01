import stampit from 'stampit';
import _ from 'lodash';
import Q from 'q';

export default ($q, $state, $injector, BaseModel, _Savable,_Badge, _Quest, _ScoreUnit, Level) => {

    return stampit()
        .compose()

        /**
         * @memberOf Rule.model:Rule
         * @stampit init
         */
        .init(function ({stamp}) {
            this.setRemoteModel('Level');
            this._factory = Level;
        })
        .methods({

            getLevelById(id) {
                return Level.findById({id:id}).$promise.then((response)=>{
                    return response;
                });
            },

            getScoreUnits(){

            },

            getScoreUnitById(){

            }





        })
        .refs({

            /**
             * @memberOf Rule.model:Rule
             * @stampit refs
             */
            _defaults: {
                productId: "5784fda092cabc234005814b" //TODO change to actual product id
            },

            _model: 'LevelModel'
        })

        .props({});
};
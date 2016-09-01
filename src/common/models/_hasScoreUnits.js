import stampit from 'stampit';
import _ from 'lodash';
import Q from 'q';

export default (Level, ScoreUnit) => {

    return stampit()

        /**
         * @memberOf Rule.model:Rule
         * @stampit init
         */
        .init(function ({stamp}) {
            this.setRemoteModel('ScoreUnit');
            this._factory = ScoreUnit;
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

            _model: 'ScoreUnitModel'
        })

        .props({});
};
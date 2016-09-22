import stampit from 'stampit';
import _ from 'lodash';
import Q from 'q';

export default (Level, ScoreUnit, ScoreUnitInstance) => {

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
                if (!id)
                    return;
                return Level.findById({id: id}).$promise;
            },

            getLevels(filter) {
                return Level.find(filter);
            },

            getScoreUnits(filter){
                return ScoreUnit.find(filter);
            },

            getScoreUnitById(id){
                return ScoreUnit.findById({id: id}).$promise;
            },
            getScoreUnitInstances(filter){
                return ScoreUnitInstance.find(filter);
            }


        })
        .refs({

            /**
             * @memberOf Rule.model:Rule
             * @stampit refs
             */
            _defaults: {},

            _model: 'ScoreUnitModel'
        })

        .props({});
};
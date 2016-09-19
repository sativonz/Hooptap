
import stampit from 'stampit';
import _ from 'lodash';
import Q from 'q';

export default (Customer) => {

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

            /*getRankingByScoreUnit(scoreUnit, order) {

                let filter = {filter: { where : {}, order: "" }};
                filter.filter.where = { scoreUnitId: scoreUnit.scoreUnitId };
                filter.filter.order = 'quantity DESC';

                return  ScoreUnitInstance.find(filter).$promise;
            }*/

            getRankingByScoreUnit(scoreUnit, order) {

                let filter = {filter: { where : {}, order: "" }};
                filter.filter.where["scores."+scoreUnit.id] = { "gt" : 0 };
                filter.filter.order = "scores." + scoreUnit.id + " DESC";

                return Customer.find(filter).$promise;
            }

        })
        .refs({

            /**
             * @memberOf Rule.model:Rule
             * @stampit refs
             */
            _defaults: {

            },

            _model: 'RankingModel'
        })

        .props({});
};
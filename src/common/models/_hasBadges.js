import stampit from 'stampit';
import _ from 'lodash';
import Q from 'q';

export default ($q, $state, $injector, BaseModel, _Savable,_Badge, _Quest, _ScoreUnit, Badge) => {

    return stampit()
        .compose(BaseModel, _Savable)

        /**
         * @memberOf Rule.model:Rule
         * @stampit init
         */
        .init(function ({stamp}) {
            this.setRemoteModel('Badge');
            this._factory = Badge;
        })
        .methods({
            availableBadges(){
                Q.async(function*(){
                    let response = Badge;
                })();
            }

        })
        .refs({

            _model: 'BadgeModel'
        })

        .props({});
};
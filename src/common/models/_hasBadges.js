import stampit from 'stampit';
import Q from 'q';

export default (Badge) => {

    return stampit()
        .compose()

        /**
         * @memberOf Rule.model:Rule
         * @stampit init
         */
        .init(function ({stamp}) {
            this.setRemoteModel('Badge');
            this._factory = Badge;
        })
        .methods({
            getAvailableBadges(){

                return Badge.find().$promise.then((response)=> {

                    return response;
                });

            }

        })
        .refs({})

        .props({});
};
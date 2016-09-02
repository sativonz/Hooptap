import stampit from 'stampit';
import Q from 'q';

export default (Badge, Customer , BadgeSeat) => {

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
                return Badge.find();

            },
            badgeSeats(){
                return BadgeSeat.find();
            }

        })
        .refs({})

        .props({});
};
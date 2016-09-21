import _ from 'lodash';
export default function clientHelper($injector, $rootScope) {

    let me = {
        //Sets default attributes for a widget
        setDefaultAttributes(defaults, targetScope, attrs){
            for (var optionKey in defaults) {
                if (attrs[optionKey]) {
                    if (targetScope[optionKey] && typeof targetScope[optionKey] === 'object') {
                        targetScope[optionKey] = Object.assign(defaults[optionKey], targetScope[optionKey]);
                    }
                } else {
                    targetScope[optionKey] = defaults[optionKey];
                }
            }
        },
        getNotifier() {
            if (!Notifier) {
                var Notifier = $injector.get('Notifier', (e)=>console.log(e));
            }
            return Notifier;
        },
        /**
         * @type function
         * @desc Parse data from http response to show Notifier service
         * @param data
         */
        notifierEventParser(data) {
            if (data && data.hasOwnProperty("_triggered")) {
                let queryTriggers = [];
                data._triggered.forEach((trigger)=> {
                    if (trigger
                        && trigger.hasOwnProperty('model')
                        && _.isFunction(me.getNotifier()["event" + trigger.model])) {
                        queryTriggers.push(trigger);
                    }

                });


                //Resolve query
                let badgesFound = {};
                let badgeSeatsFound = {};
                let scoreUnitSeatsFound = {};
                queryTriggers.forEach((trigger)=> {
                    if (trigger.model === 'Badge') {
                        badgesFound[trigger.data.id] = trigger;
                    }
                    if (trigger.model === 'BadgeSeat') {
                        badgeSeatsFound[trigger.data.badgeId] = trigger;
                    }
                    if (trigger.model === 'ScoreUnitSeat') {
                        scoreUnitSeatsFound[trigger.data.badgeId] = trigger;
                    }
                });
                let hashNotifier = Object.assign({}, badgeSeatsFound, badgesFound, scoreUnitSeatsFound);
                console.log(hashNotifier);
                debugger;
                // Object.keys(hashNotifier).map((key)=> {
                //     let parsedData = me.notifierDataParser(hashNotifier[key].data);
                //     me.getNotifier()["event" + trigger.model](parsedData);
                // });

            }
        },
        notifierDataParser(data){
            let model = {};
            switch (data.model) {
                case 'ScoreUnitSeat':
                    let scoreUnit = $rootScope.availableScoreUnits[data.data.scoreUnitId];
                    model = {
                        title: data.model,
                        image: scoreUnit.image,
                        message: "Has ganado " + data.data.quantity + " " + scoreUnit.name
                    };
                    break;
                case 'BadgeSeat':
                    //TODO

                    break;
                default:
                    break;
            }

            return model;
        },
        isFunction(value){
            return typeof value === 'function';
        }
    };
    return me;
}
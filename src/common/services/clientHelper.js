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
                    switch (trigger.model) {
                        case 'Badge':
                            badgesFound[trigger.data.id] = trigger;
                            break;
                        case 'BadgeSeat':
                            badgeSeatsFound[trigger.data.badgeId] = trigger;
                            break;
                        case 'ScoreUnitSeat':
                            scoreUnitSeatsFound[trigger.data.scoreUnitId] = trigger;
                            break;
                        default:
                            break;
                    }
                });
                let hashNotifier = Object.assign({}, badgeSeatsFound, badgesFound, scoreUnitSeatsFound);
                Object.keys(hashNotifier).map((key)=> {
                    //TODO comprobar si viene notifier del back y si no, parsearlo aqui.
                    let parsedData = me.notifierDataParser(hashNotifier[key]);
                    me.getNotifier()["event" + hashNotifier[key].model](parsedData);
                });

            }
        },
        notifierDataParser(data){
            //Indexa badgeId


            let model = {};
            switch (data.model) {
                case 'ScoreUnitSeat':
                    let scoreUnit = $rootScope.availableScoreUnits[data.data.scoreUnitId];
                    model = {
                        title: scoreUnit.name,
                        image: scoreUnit.image,
                        message: "+ " + data.data.quantity
                    };
                    break;
                case 'BadgeSeat':
                    let badgeSeat = $rootScope.availableBadges[data.data.badgeId]
                    //TODO
                    model = {
                        title: data.model,
                        image: BadgeSeat.image,
                        message: "+ " + data.data.parts + " / " + BadgeSeat.parts
                    };
                    break;
                case 'Badge':
                    let badge = $rootScope.availableBadges[data.data.id];
                    model = {
                        title: data.model,
                        image: badge.image,
                        message: "+" + badge.name
                    };
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
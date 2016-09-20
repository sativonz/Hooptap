import _ from 'lodash';
export default function clientHelper($injector) {

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

                data._triggered.forEach((trigger)=> {
                    if (trigger
                        && trigger.hasOwnProperty('model')
                        && _.isFunction(me.getNotifier()["event" + trigger.model])) {

                        let parsedData = me.notifierDataParser(trigger);
                        me.getNotifier()["event" + trigger.data.data.model](trigger.data);
                    }
                });

                for (var trigger in data._triggered) {

                    //         if(data._triggered[trigger].model === "ScoreUnitSeat"){
                    //             let triggered = data._triggered[trigger].data;
                    //             this.getNotifier()["event" + triggered.data.model](triggered);
                    //         }
                }
            }
        },
        notifierDataParser(data){

            debugger;
        },
        isFunction(value){
            return typeof value === 'function';
        }
    };
    return me;
}
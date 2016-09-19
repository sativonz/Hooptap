/**
 * Wrap of a third party notification service. Uses '$translate' to translate message and title.
 */
export default (Notification, $translate) => {

    // Interface
    let methods = {

        //templates imported from src/common/index.js as templateCache
        loginRegisterSuccess (args) {
            return launcher('success',
                {
                    templateUrl: 'success.html'
                },
                args
            )
        },
        error (args) {
            return launcher('error',
                {
                    templateUrl: 'error.html'

                },
                args
            )
        },
        event (args) {
            debugger;
            let parsedArgs = {
                title: args.data.action + " " + args.data.data.model,
                image: "",
                message: "Has ganado " + args.data.data.quantity+ " de " + args.data.data.maxParts
            };
            return launcher('info', {templateUrl: 'event.html'}, parsedArgs)
        },
        //default templates
        primary () {
            return launcher('primary', arguments)
        },
        info () {
            return launcher('info', arguments)
        },
        warning () {
            return launcher('warning', arguments)
        }
    };


    // Assign
    let Constructor = methods.primary;
    Object.assign(Constructor, methods);


    return Constructor;


    /*	Functions
     ---------------------------------------------------------------------------------*/

    function launcher(type, options, args) {
        let translatedArgs = optionsConstructor(options, args);
        return Notification[type](translatedArgs);
    }


    function optionsConstructor(options = {}, args) {
        options.message = $translate.instant(args.message || '');
        options.title = $translate.instant(args.title || '');
        options.image = args.image || '';

        return options;
    }

}
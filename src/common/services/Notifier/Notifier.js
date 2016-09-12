/**
 * Wrap of a third party notification service. Uses '$translate' to translate message and title.
 */
export default (Notification, $translate) => {

    // Interface
    let methods = {
        loginRegisterSuccess (args) {
            return launcher('success',
            {
                templateUrl: 'success.html'
            },
            args
        )},

        error (args) {
            return launcher('error',
                {
                    templateUrl: 'error.html'

                },
                args
            )},

        primary () { 	return launcher('primary', arguments) },
        info () { 		return launcher('info', arguments) },
        warning () { 	return launcher('warning', arguments) }
    };


    // Assign
    let Constructor = methods.primary;
    Object.assign(Constructor, methods);


    return Constructor;


    /*	Functions
     ---------------------------------------------------------------------------------*/

    function launcher (type,options,args) {
        let translatedArgs = optionsConstructor(options, args);
        return Notification[type](translatedArgs);
    }


    function optionsConstructor (options = {}, args) {

        options.message = $translate.instant(args.message || '');
        options.title 	= $translate.instant(args.title || '');
        options.image = args.image || '';

        return options;
    }

}
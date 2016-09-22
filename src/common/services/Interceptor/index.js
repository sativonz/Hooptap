/*TODO Http interceptor*/
/**
 * @ngdoc service
 * @name base.httpInterceptor
 * @requires $injector
 * @description TODO
 */
export default ($q, $injector, $translate, clientHelper)=> {
    var Notificator = null;

    /**
     * @ngdoc method
     * @name httpInterceptor:getNotifier
     * @methodOf base.httpInterceptor
     * @description
     * @returns {Object} Notificator Notificator DI
     */
    var getNotifier = ()=> {
        if (!Notifier) {
            var Notifier = $injector.get('Notifier');
        }
        return Notifier;
    };
    var getSession = ()=> {
        if (!Session) {
            var Session = $injector.get('Session');
        }
        return Session;
    };


    /**
     * @ngdoc method
     * @name httpInterceptor:getModelName
     * @methodOf base.httpInterceptor
     * @description
     * @param {String} url String of url from XHR Request
     * @returns {Object} modelName
     */
    function getModelName(url) {
        var model = url.indexOf('http') == 0 ? url.replace(/http*api\//, '') : false;
        if (model) {
            model = model.split('/')[0];
            return model;
        }
    }


    return {
        request(response){
            // console.log("REQUEST: ", response);
            return response;
        },
        requestError(rejection){
            // console.log("REJECTION: ", rejection);
            return rejection;
        },
        response(response){
            // console.log('HTTP RESPONSE: ', response);
            var model = getModelName(response.config.url);
            var method = response.config.method;
            var status = response.status;
            var data = response.data;
            //TODO GESTIONAR ERRORES CON API
            clientHelper.notifierEventParser(data);
            var successText = response;
            //console.log("URL: ", response.config.url);
            return response;
        },
        responseError(error){
            // console.error('HTTP ERRORRR: ', error);
            //  if (error.status !== -1) {
            //      var errorToken = error.data.error.code;
            //      var method = error.config.method;
            //      var model = getModelName(error.config.url);
            //      getNotifier().error([model, ': ', 'errors', errorToken].join('.')[method][error.status]);
            //  }

            if (error.status === 401) {
                let msg = $translate.instant("TOAST.incorrect");
                getNotifier().error({title: msg, image: require('./images/error.png')});
                // return getSession().isAuthenticated().then(function () {
                // });
            }
            return $q.reject(error);
        }

    };

}
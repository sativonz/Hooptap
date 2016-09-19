/*TODO Http interceptor*/
/**
 * @ngdoc service
 * @name base.httpInterceptor
 * @requires $injector
 * @description prueba prueba prueba
 */
export default ($injector)=> {
    var Notificator = null;

    /**
     * @ngdoc method
     * @name httpInterceptor:getNotificator
     * @methodOf base.httpInterceptor
     * @description
     * @returns {Object} Notificator Notificator DI
     */
    var getNotificator = ()=> {
        if (!Notificator) {
            Notificator = $injector.get('Notifier');
        }
        return Notificator;
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
            if (data && data.hasOwnProperty("_triggered")) {
                for(var trigger in data._triggered){
                    if(data._triggered[trigger].model === "Trigger" && data.data && data.data._result && data.data._result.status !== 'finished'){
                        getNotificator().event(data._triggered[trigger]);
                    }
                }
            }

            var successText = response;
            //console.log("URL: ", response.config.url);
            return response;
        },
        responseError(error){
            console.error('HTTP ERROR: ', error);
            if (error.status !== -1) {
                var errorToken = error.data.error.code;
                var method = error.config.method;
                var model = getModelName(error.config.url);
                getNotificator().error([model, ': ', 'errors', errorToken].join('.')[method][error.status]);
            }
            if (error.status === 401) {
                let msg = $translate.instant("TOAST.incorrect");
                getNotificator().error({title: msg, image: require('./images/error.png')});
            }
            return error;
        }

    };

}
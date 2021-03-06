import stampit from 'stampit';
export default ($q, $compile, $injector, Event, Customer, Admin, $rootScope, Session, BaseModel, _hasBadges, _hasScoreUnits, WidgetEngine, GLOBAL_CONFIG,Notifier)=> {
    //TODO improve global config
    if (!GLOBAL_CONFIG.config.length) {
        let widgetFullConfig = {tag: 'widget-full'};
        let widgetFull = WidgetEngine.createWidget(widgetFullConfig);
        let cButtonInitConfig = {tag: 'c-button-init'};
        let cButtonInit = WidgetEngine.createWidget(cButtonInitConfig);
        let widgetCustomerAccessConfig = {tag: 'widget-customer-access-popup', attrs:{'show-mix-form': true}};
        let widgetCustomerAccess = WidgetEngine.createWidget(widgetCustomerAccessConfig);
        angular.element(document.querySelector('body')).append(widgetFull).append(cButtonInit).append(widgetCustomerAccess);
    }
    $rootScope.customer = {};
    $rootScope.availableBadges = {};
    $rootScope.availableScoreUnits = {};
    Session.isAuthenticated();
    let WidgetModel = stampit().compose(BaseModel, _hasBadges, _hasScoreUnits);
    $rootScope.$on('$loginSuccess', (event, response)=> {
        // var badgesObj, scoreUnitsObj = {};
        WidgetModel().getAvailableBadges().$promise.then((badges)=> {
            badges.map((badge)=> {
                $rootScope.availableBadges[badge.id] = badge;
            });
        });
        WidgetModel().getScoreUnits().$promise.then((scoreUnits)=> {
            scoreUnits.map((scoreUnit)=> {
                $rootScope.availableScoreUnits[scoreUnit.id] = scoreUnit;
            });
        });

        //console.log($rootScope.availableBadges, $rootScope.availableScoreUnits);
    });
    var TEST = false;

    let windowHooptap = function (a0, a1, a2, a3) {
        if (typeof a0 == 'object' && Object.keys(a0).length) {
            return windowHooptap.sendEvent(a0);
        }
        else if (typeof a0 === 'string') {
            var params = {category: a0};
            if (a1 && typeof a1 == 'string') params.action = a1;
            if (a2 && typeof a2 == 'string') params.label = a2;
            if (a3 && typeof a3 == 'string' || typeof a3 == 'number') params.value = '' + a3;

            return windowHooptap.sendEvent(params);
        }
        else {
            return false;
        }

    };

    windowHooptap.api = (model, method, params, _then, _catch) => {
        // TODO improve Hooptap.api method

        model = $injector.get(model);
        method = model[method];

        let promise = method(params).$promise;
        if (!promise) {
            return method(params);
        }
        if (_then) promise.then((response) => {
            _then(response)
        });
        if (_catch) promise.catch((error) => {
            _catch(error)
        });

        return promise;
    };

    windowHooptap.notifier  = (title, desc, img) => {
        Notifier.primary({
            title: title,
            message: desc,
            image: img
        });
    };

    windowHooptap.sendEvent = function (params) {

        var typeOf = {
            "category": "string",
            "action": "string",
            "label": "string",
            "value": "string"
            //"customerId": "string"
        };

        if ('object' !== typeof params || params == null || Array.isArray(params) || !Object.keys(params).length)
            return false;

        var valid = {}, failed = {};
        for (var param in params) {
            if (typeOf[param] == typeof params[param])
                valid[param] = params[param];
            else
                failed[param] = params[param];
        }

        if (Object.keys(failed).length)
            return false;
        else {
            return Event.create(params).$promise
                .then(response => {

                    // let thisEventId = response.id;
                    // let ctxTriggers = response._context.events[thisEventId].triggers;
                    //
                    // if (ctxTriggers && typeof ctxTriggers == 'object' && Object.keys(ctxTriggers)) {
                    //     console.log('EventTriggers', ctxTriggers);
                    //     //processTriggers(ctxTriggers);
                    // }
                    // else
                    //     console.log('No Event Triggers');

                    $rootScope.$broadcast('$eventSuccess', response);

                    return response;
                })
                .catch(error => {
                    return false;
                });
        }

    };

    windowHooptap.loginCustomer = function (params) {
        if (params === 'test')
            params = {email: 'customer@customer.com', password: 'customer', productId: 'test'};

        if (arguments.length && typeof params == 'object' && Object.keys(params).length) {
            var token = false;

            if (Customer.isAuthenticated())
                Customer.logout();
            if (Admin.isAuthenticated())
                Admin.logout();

            token = Customer.login(params)
                .$promise
                .then((response) => {
                    //console.log('response', response);
                })
                .catch((e) => {
                    let errors = {
                        '-1': 'errors.sdk.noInternet',
                        '401': 'errors.sdk.badLogin',
                        '500': 'errors.sdk.noInternet'
                    };
                    console.warn('Login error:', e.status);
                    console.warn('Login error:', errors[e.status]);
                });
            return token;
        }
        else
            return false;
    };

    if (TEST) {
        windowHooptap.loginAdmin = function (params) {
            if (params === 'test') {
                params = {email: 'admin@hooptap.com', password: 'hooptap'};

                if (Customer.isAuthenticated())
                    Customer.logout();
                if (Admin.isAuthenticated())
                    Admin.logout();


                token = Customer.login(params)
                    .$promise
                    .then((response) => {
                        //console.log( 'response' , response );
                    })
                    .catch((e) => {
                        let errors = {
                            '-1': 'errors.sdk.noInternet',
                            '401': 'errors.sdk.badLogin',
                            '500': 'errors.sdk.noInternet'
                        };
                        console.warn('Login error:', e.status);
                        console.warn('Login error:', errors[e.status]);
                    });
                return token;

            }
            else
                return false;
        };

        windowHooptap.test = function (functionName) {
            var tests = {
                'loginCustomer': {
                    "email": "pepe@pepe.com",
                    "password": "pepe"
                },
                'sendEvent': [
                    // boolean
                    false,
                    // number
                    999,
                    // string
                    'word',
                    // array
                    [],
                    // empty object
                    {},
                    // insufficient object
                    {"what": false},
                    // invalid param value type
                    {"category": false},

                    // valid param value type
                    {"category": 'false'}
                ]
            };

            function testFunction(name) {
                var Tries = tests[name];

                for (var Try in Tries) {
                    console.log('\ntry:' + Try + ' ' + name + ' with ' + typeof Tries[Try], Tries[Try]);
                    console.log('results:', windowHooptap[name](Tries[Try]));
                }
            }

            if (functionName && typeof functionName == 'string' && typeof windowHooptap[functionName] == 'function') {
                var _tests = tests[functionName];
                tests = {};
                tests[functionName] = _tests;
            }
            else if (functionName)
                tests = {};

            if (Object.keys(tests).length) {
                for (var test in tests) {
                    testFunction(test);
                }
            }
            else
                return false;

        };
    }


    window[window['HooptapObjectClient']] = windowHooptap;

}
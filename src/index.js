//Import angularHT
import angular from 'angular-mod';

//Init template with all widgets
import template from './index.jade';

//Vendor
import 'angular-storage';
import 'angular-resource';
import 'angular-animate';
import 'angular-wizard';
import 'valdr';
import 'valdr/valdr-message';
import tabs from 'angular-ui-bootstrap/src/tabs';
import progressBar from 'angular-ui-bootstrap/src/progressbar';

//Import Loopback Angular SDK
import './common/services/angular-sdk.js';


(function () {
    angular.element('body').append(template());
    angular.module('htWidget',
        [
            //Vendor injectors
            'ngResource', /*angular resources*/
            'ngAnimate', /*angular animate*/
            tabs,
            progressBar,
            'mgo-angular-wizard',
            'valdr',

            //SDK Loopback services
            'apiServices',
            
            //Components
            require('./common/components/translations').default,

            //Modules

            require('./modules/components').default,

            require('./modules/base').default,

            //Widgets
            require('./modules/widgets/widget-full').default,
            require('./modules/widgets/widget-notifications-popup').default,
            require('./modules/widgets/widget-notifications-list').default,
            require('./modules/widgets/widget-ranking-list').default,
            require('./modules/widgets/widget-ranking-total').default,
            require('./modules/widgets/widget-profile-advanced').default,
            require('./modules/widgets/widget-profile-full').default,
            require('./modules/widgets/widget-profile-simple').default,
            require('./modules/widgets/widget-levels').default,
            require('./modules/widgets/widget-quests').default,
            require('./modules/widgets/widget-marker-su-grid').default,
            require('./modules/widgets/widget-marker-su-list').default,
            require('./modules/widgets/widget-game-wrapper').default,
            require('./modules/widgets/widget-game-container').default,
            require('./modules/widgets/widget-global-feed').default,
            require('./modules/widgets/widget-marketplace-container').default,
            require('./modules/widgets/widget-call-to-action').default,
            require('./modules/widgets/widget-awards-list').default,
            require('./modules/widgets/widget-member-login-register').default,
            require('./modules/widgets/widget-member-register').default,
            require('./modules/widgets/widget-member-login').default,
            require('./modules/widgets/widget-badges-list').default,
            require('./modules/widgets/widget-badges-grid').default
        ]).service('viewHandler', require('./common/services/viewHandler').default)


    //Controller for widget
        .controller('htWidgetCtrl', ($q, $scope, $compile, Event, Customer, Admin, Rule)=> {
            var count = 0;
            console.log(count++);
            //hooptapSDK object for sdk on javascript

            var TEST = true;

            window.Hooptap = function (a0, a1, a2, a3) {
                if (typeof a0 == 'object' && Object.keys(a0).length) {
                    return window.Hooptap.sendEvent(a0);
                }
                else if (typeof a0 === 'string') {
                    var params = {category: a0};
                    if (a1 && typeof a1 == 'string') params.action = a1;
                    if (a2 && typeof a2 == 'string') params.label = a2;
                    if (a3 && typeof a3 == 'string' || typeof a3 == 'number') params.value = '' + a3;

                    return window.Hooptap.sendEvent(params);
                }
                else {
                    return false;
                }

            };

            window.Hooptap.sendEvent = function (params) {
                var typeOf = {
                    "category": "string",
                    "action": "string",
                    "label": "string",
                    "value": "string"
                    //"customerId": "string"
                };

                if ('object' !== typeof params || params == null || Array.isArray(params) || !Object.keys(params).length
                )
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
                else
                    return Event.create(params);

            };

            window.Hooptap.loginCustomer = function (params) {
                if (params === 'test')
                    params = {email: 'pepe@pepe.com', password: 'pepe'};

                if (arguments.length && typeof params == 'object' && Object.keys(params).length) {
                    debugger;
                    var token = false;

                    if (Customer.isAuthenticated && Customer.isAuthenticated())
                        Customer.logout();
                    if (Admin.isAuthenticated && Admin.isAuthenticated())
                        Admin.logout();

                    token = Customer.login(params)
                        .$promise
                        .then((response) => {
                            //debugger;
                            console.log('response', response);
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
                Object.assign(
                    window.Hooptap,
                    {
                        Admin: Admin,
                        Customer: Customer,
                        Event: Event,
                        Rule: Rule
                    }
                );

                window.Hooptap.loginAdmin = function (params) {
                    if (params === 'test') {
                        params = {email: 'admin@hooptap.com', password: 'hooptap'};

                        if (Customer.isAuthenticated && Customer.isAuthenticated())
                            Customer.logout();
                        if (Admin.isAuthenticated && Admin.isAuthenticated())
                            Admin.logout();

                        return Admin.login(params);
                    }
                    else
                        return false;
                };

                window.Hooptap.test = function (functionName) { //
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
                            console.log('results:', window.Hooptap[name](Tries[Try]));
                        }
                    }

                    if (functionName && typeof functionName == 'string' && typeof window.Hooptap[functionName] == 'function') {
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


        })
        .config(require('./config').default)
        .run(require('./boot').default);

    //Angular bootstrap to render #htWidget div with htWidget Module
    angular.bootstrap('#ht-widget', ['htWidget']);

    //console.log(angular.version.full);

}());
//Import angularHT
import angular from 'angular-mod';

//Vendor
import 'angular-storage';
import 'angular-resource';
import 'angular-animate';
import 'angular-wizard';
import 'angular-ui-notification-mod';
import 'angular-ui-notification/dist/angular-ui-notification.min.css'
import tabs from 'angular-ui-bootstrap/src/tabs';
import progressBar from 'angular-ui-bootstrap/src/progressbar';
import tooltip from 'angular-ui-bootstrap/src/tooltip';
import modal from 'angular-ui-bootstrap/src/modal';

//Import Loopback Angular SDK
import './common/services/angular-sdk';


(function () {
    angular.module('Hooptap-client',
        [

            //GLOBAL CONFIG
            'GLOBAL_CONFIG',
            //Vendor injectors
            'ngResource', /*angular resources*/
            'ngAnimate', /*angular animate*/
            'ui-notification',
            tabs,
            progressBar,
            tooltip,
            modal,
            'mgo-angular-wizard',

            //SDK Loopback services
            'apiServices',

    
            //Modules
            require('./common').default,
            require('./modules/translations').default,
            require('./modules/validations').default,
            require('./modules/components').default,

            //Widgets
            require('./modules/widgets/widget-full').default,
            require('./modules/widgets/widget-quests').default,
            require('./modules/widgets/widget-ranking-total').default,
            require('./modules/widgets/widget-badges-grid').default,
            require('./modules/widgets/widget-customer-access-popup').default,
            require('./modules/widgets/widget-customer-access-mini').default,
            require('./modules/widgets/widget-customer-access-modal').default,
            require('./modules/widgets/widget-customer-access-inline').default,


        ])


        .directive('createRouter', function ($rootScope) {

            $rootScope.changeView = function (routerTargetName, viewName) {
                if (!viewName) {
                    viewName = routerTargetName;
                    routerTargetName = routerName;
                }
                //console.log('rooRouter', routerTargetName, viewName);

                let handler = $rootScope.routerChangeFunctions[routerTargetName];
                if (handler) {
                    handler(viewName);
                    return true;
                } else {
                    return false;
                }
            };
            $rootScope.routerChangeFunctions = {};
            return {
                restrict: 'A',
                controller: function ($scope, $attrs) {
                    let routerName = $attrs.routerName;
                    $scope.view = null;
                    $scope.historic = [];
                    $scope.back = function (routerTargetName, viewName) {
                        if (!viewName) {
                            viewName = routerTargetName;
                            routerTargetName = routerName;
                        }

                        if (routerTargetName != routerName) {
                            let parent = $scope.$parent;
                            if (parent) {
                                //console.log(`El router ${routerName} pasa el back a su padre`);
                                parent.back(routerTargetName, viewName);
                            } else {
                                //console.log(`El router ${routerName} ignora vista ${viewName} que va a ${routerTargetName}.`);
                            }
                            return;
                        }
                        //console.log($scope.historic);
                        $scope.view = $scope.historic.pop();
                    };
                    $scope.changeView = function (routerTargetName, viewName) {

                        if (!viewName) {
                            viewName = routerTargetName;
                            routerTargetName = routerName;
                        }
                        //console.log('router', routerTargetName, viewName);
                        if (routerTargetName != routerName) {
                            if (!$rootScope.changeView(routerTargetName, viewName)) {
                                //console.log(`El router ${routerName} ignora vista ${viewName} que va a ${routerTargetName}.`);
                            }
                            return;
                        }

                        if (viewName != $scope.view) {
                            $scope.historic.push($scope.view);
                            $scope.view = viewName;
                        }

                    };
                    $rootScope.routerChangeFunctions[routerName] = function () {
                        return $scope.changeView.apply($scope, arguments);
                    };

                    $scope.isView = function (viewName) {
                        return viewName == $scope.view;
                    }
                }
            }
        })
        .config(require('./config').default)
        .run(require('./boot').default);

    
    window[ window['HooptapObjectClient'] ] = {};
    window[ window['HooptapObjectClient'] ].start = function (params) {

        if (!params)
            return;

        // is object
        // is not Array
        // has properties
        if ( typeof params == 'object' && !Array.isArray(params) && Object.keys(params).length ) {
            params.apiKey = params.apiKey || null;
            params.selector = params.selector || 'body';
            params.config = params.config || {};
            if (params.apiKey && typeof params.apiKey == 'string') {

                angular.module('GLOBAL_CONFIG', []).constant('GLOBAL_CONFIG',{
                    apiKey: params.apiKey,
                    selector: params.selector,
                    config: params.config
                });

                angular.bootstrap(document.querySelector(params.selector), ['Hooptap-client', 'GLOBAL_CONFIG']);
            }
            else
                return;
        }
        else
            return;
    };

}());
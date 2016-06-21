//Import angularHT
import angular from 'angular-mod';

//Vendor
import 'angular-storage';

//Plugins

(function () {

    angular.element('body').append('<div id="htWidget" ng-app="htWidget" ng-controller="htWidgetCtrl"></div>');
    angular.module('htWidget',
        [
            //Vendor injectors
            '',
            //Plugins
            '',
            //SDK Services
            '',
            //Modules
            ''
        ])
    //Controller for widget
        .controller('htWidgetCtrl', ($scope, $compile, $interpolate)=> {

            //Example of widget render
            angular.element('#htWidget').append($compile('<widget1></widget1>')($scope));
            // angular.element('#htWidget').append('<widget1></widget1>');

        })
        .config(require('./config').default)
        .run(require('./boot').default);

    //Angular bootstrap to render #htWidget div with htWidget Module
    angular.bootstrap('#htWidget', ['htWidget']);

    console.log(angular.version.full);

}());
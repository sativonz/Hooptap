import angular from 'angular-mod';
import 'angular-storage';
import mainCtrl from './mainCtrl.js';
import widget1 from '../components/widget1/widget1';

angular.module('app', []);

(function () {

    angular.element('body').append('<div id="htWidget" ng-app="htWidget" ng-controller="mainCtrl"></div>');
    angular.module('htWidget', ['angular-storage'])
        .directive('widget1', widget1)
        .controller('mainCtrl', mainCtrl);

    angular.bootstrap('#htWidget', ['htWidget']);
    console.log(angular.version.full);


}());
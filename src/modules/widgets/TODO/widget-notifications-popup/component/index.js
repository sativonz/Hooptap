import template from './template.jade';
/**
 * @ngdoc directive
 * @name Widget notifications popup
 * @module Widgets
 * @description Box that appears and disappears where will show alerts and user information when win,
 * lose or whatever you want to report any response that returns the engine to hold an event.
 * @restrict E
 * @param {String} title Title of the popup
 * @param {String} desc Description of the popup
 * @param {String=} img Image of the popup
 * @element ANY
 */
export default(Customer, LoopBackAuth, $rootScope) => ({
    restrict: 'E',
    template,
    scope: {
        idWidget: '=',
        config: '='
    },
    link: (scope, element, attrs)=> {

        Customer.findById(LoopBackAuth.currentUserId).$promise.then(
            (response)=> {
                $rootScope.customer = response;
            }
        );

        //Default Widget values
        if (!scope.config) {

            scope.config.showImage = scope.config.showImage || true;
            scope.config.showDesc = scope.config.showDesc || true;
            scope.config.showCloseBtn = scope.config.showCloseBtn || true;
            scope.config.timeIm = scope.config.timeIm || 3000;
            scope.config.persist = scope.config.persist || false;
            scope.config.type = scope.config.type || 'popup';

            scope.config = {
                'showImage': true,
                'showDesc': true,
                'showCloseBtn': true,
                'timeIm': 3000,
                'persist': false,
                'type': 'popup'
            }
        }

        Customer.getCurrent({
            //
        }).$promise.then((response)=> {
            scope.user = response;

        }).catch(()=> {
            //TODO
        });

        //cuando exista un ENDPOINT del API
        /*     Widget.findById({id: scope.idWidget}).$promise.then(()=>{
         });*/
    }
});
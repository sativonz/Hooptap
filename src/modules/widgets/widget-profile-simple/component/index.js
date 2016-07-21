import template from './template.jade';
import controller from './controller';

export default($rootScope, Customer, LoopBackAuth, viewHandler) => ({
    restrict: 'E',
    scope: {
        idWidget: '=',
        config: '='
    },
    controller,
    template,
    link: (scope, element, attrs)=> {
        $rootScope.currentView = 'profileSimple.default';

        debugger;
        //Default Widget values
        if (!scope.config) {
            scope.config = {'editable': true, rewardsList: [], 'showImage': false};
        }
        Customer.getCurrent({
            filter: {include: scope.config.rewardsList}
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
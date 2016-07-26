import template from './template.jade';

export default($rootScope, Customer, LoopBackAuth, viewHandler) => ({
    restrict: 'E',
    scope: {
        idWidget: '=',
        config: '='
    },
    template,
    link: (scope, element, attrs)=> {

        $rootScope.currentView = 'profileSimple.default';


        Customer.findById(LoopBackAuth.currentUserId).$promise.then(
            (response)=> {
                $rootScope.customer = response;
            }
        );

        //Default Widget values
        if (!scope.config) {
            scope.config.editable = scope.config.editable || true;
            scope.config.showImage = scope.config.showImage || true;
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
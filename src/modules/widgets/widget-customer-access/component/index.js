import template from './template.jade';

export default(Customer, LoopBackAuth, $rootScope) => ({
    restrict: 'E',
    template,
    scope: {
        showRegisterForm: '=',
        showLoginForm: '=',
        showMixForm: '='
    },
    link: (scope, element, attrs)=> {

        Customer.findById(LoopBackAuth.currentUserId).$promise.then(
            (response)=>{
                $rootScope.customer = response;
            }
        );



        Customer.getCurrent({
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
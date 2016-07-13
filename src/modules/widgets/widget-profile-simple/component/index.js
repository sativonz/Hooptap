import template from './template.jade';

export default($rootScope, Customer, LoopBackAuth, viewHandler) => ({
    restrict: 'E',
    scope: {},
    link: (scope, element, attrs)=> {
        $rootScope.currentView = 'profileSimple.default';
    },
    controller:()=>{
      
        Customer.findById(LoopBackAuth.currentUserId).$promise.then(
            (response)=>{
                console.log(response);
                $rootScope.customer = response;
            }
        );
    },
    template

});
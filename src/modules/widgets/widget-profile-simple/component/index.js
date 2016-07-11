import template from './template.jade';

export default($rootScope, Customer, LoopBackAuth) => ({
    restrict: 'E',
    scope: {},
    link: (scope, element, attrs)=> {

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
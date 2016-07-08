import template from './template.jade';

export default($rootScope, Customer, LoopBackAuth) => ({
    restrict: 'E',
    scope: {},
    link: (scope, element, attrs)=> {


        $rootScope.history = [];

        $rootScope.setCurrentView = (view, data) => {
            $rootScope.history.push($rootScope.currentView);
            $rootScope.currentView = view;
            $rootScope.viewData = data;
        };

        $rootScope.goBack = ()=> {
            $rootScope.currentView = $rootScope.history.pop();

        };

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
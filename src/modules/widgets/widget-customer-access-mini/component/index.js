//TODO ngdocs
export default(Customer, LoopBackAuth, $rootScope, clientHelper) => ({
    restrict: 'E',
    template,
    scope: {
    },
    controller: ($scope, $rootScope)=> {
        var loginEvent = $rootScope.$on("$loginSuccess", (event, response)=> {
            getMessage();
        });
        function getMessage() {
            $rootScope.customer = {};
            $rootScope.customer.logged = true;
        }


        //Destroy Events
        $scope.$on('$destroy', ()=> {
            loginEvent();
        });



    }
});
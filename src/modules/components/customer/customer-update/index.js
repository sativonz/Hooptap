import template from './template.jade';

export default() => ({
    restrict: 'E',
    scope: {},
    template,
    controller: ($scope, $rootScope, Customer, LoopBackAuth)=> {
        //TODO por hacer..
        // var actualPass = $scope.actualPassword;
        // $scope.update = ()=> {
        //     if(actualPass == Customer.password) {
        //         Customer.update({
        //             "password" : $scope.newPassword2
        //         });
        //
        //     }
        //
        //
        // };
    }
});
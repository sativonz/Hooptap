export default function ($scope, Member) {

    var token;

    $scope.userLogin = ()=> {
        var accesToken = Member.login({
            "email": $scope.email,
            "password": $scope.password
        }).$promise.then((response)=> {
            token = response.id;
            return Member.findById({id: response.userId}).$promise;
        }).then(user => {
            $scope.member = user;
        });
    };


}
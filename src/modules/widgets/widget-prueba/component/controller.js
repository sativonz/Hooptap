export default function ($scope, Member, Badge) {

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
    /*    $scope.member = {
     "name": "string",
     "realm": "string",
     "username": "string",
     "credentials": {},
     "challenges": {},
     "email": "string",
     "emailVerified": true,
     "status": "string",
     "created": "$now",
     "lastUpdated": "2016-06-21",
     "id": "string",
     "modified": "$now"
     };*/

    $scope.badges = [
        {
            "id": "5762c031b32c917c23d2a127",
            "productId": "5762c031b32c917c23d2a126",
            "name": "El super badge",
            "desc": "Se gana cuando blabla",
            "created": "2016-06-16T15:05:21.592Z",
            "modified": "2016-06-16T15:05:21.593Z"
        },
        {
            "id": "5762c031b32c917c23d2a129",
            "productId": "5762c031b32c917c23d2a126",
            "name": "El super badge",
            "desc": "Se gana cuando blabla",
            "created": "2016-06-16T15:05:21.724Z",
            "modified": "2016-06-16T15:05:21.724Z"
        }
    ];

}
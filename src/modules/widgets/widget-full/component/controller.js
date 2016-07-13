export default  ($scope, Customer, LoopBackAuth, $rootScope, viewHandler)=>{

    Customer.findById(LoopBackAuth.currentUserId).$promise.then(
        (response)=>{
            $rootScope.customer = response;
        }
    );
    
    $scope.menuItems = [
        {view: 'profileWidgetFull.questsList', title:'Quests'},
        {view: 'profileWidgetFull.badgesList', title: 'Badges'}
    ];
};
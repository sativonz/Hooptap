export default  ($scope, Customer, LoopBackAuth, $rootScope, viewHandler)=>{

    Customer.findById(LoopBackAuth.currentUserId).$promise.then(
        (response)=>{
            $rootScope.customer = response;
        }
    );
    
    $scope.menuItems = [
        {view: 'profileWidgetFull.questsList', title: 'QUESTS.title'},
        {view: 'profileWidgetFull.badgesList', title: 'BADGES.title'},
        {view: 'profileWidgetFull.customerUpdate', title: 'CUSTOMER.common.edit'}
    ];
};
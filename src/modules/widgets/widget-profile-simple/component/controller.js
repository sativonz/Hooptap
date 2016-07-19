export default ($rootScope, Customer, LoopBackAuth) => {

        //TODO F: What is this¿?¿?¿?
        Customer.findById(LoopBackAuth.currentUserId).$promise.then(
            (response)=> {
                $rootScope.customer = response;
            }
        );


}

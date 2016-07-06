/**
 * Created by fer-hooptap on 6/07/16.
 */
export default ($rootScope) => {
    
    $rootScope.$on('changeView', function(event, response){
        $rootScope.view = response.view;
        console.log(response);
    });

    $rootScope.changeView = (view) => {
        if($rootScope.view){
            $rootScope.lastView = $rootScope.view;
        }
        $rootScope.$broadcast('changeView', {view:view});
    };



}
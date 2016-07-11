/**
 * Created by fer-hooptap on 6/07/16.
 */
export default ($rootScope) => {

    
    $rootScope.history = [];
    
    $rootScope.setCurrentView = (view, data) => {
        $rootScope.history.push($rootScope.currentView);

        $rootScope.currentView = view;
        console.log($rootScope.currentView);
        $rootScope.viewData = data;
    };

    $rootScope.goBack = ()=> {
        $rootScope.currentView = $rootScope.history.pop();

    };



}
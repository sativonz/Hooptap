//TODO por rehacer, está activo el servicio services/viewHandler.js
import template from './template.jade';

export default($rootScope, greeterService) => ({
    restrict: 'A',
    scope: {
        
    },
    template,
    link: (scope, element, attrs)=> {
        $scope.configurableGreeting = greeterService.getGreeter();

        //
        // $rootScope.setCurrentView = (view, data) => {
        //     $rootScope.history.push($rootScope.currentView);
        //
        //     $rootScope.currentView = view;
        //     console.log($rootScope.currentView);
        //     $rootScope.viewData = data;
        // };
        //
        // $rootScope.goBack = ()=> {
        //     $rootScope.currentView = $rootScope.history.pop();
        //
        // };


    },
});

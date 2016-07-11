import angular from 'angular-mod';

let module  = angular.module('htRoute', []);

export default module;

export default($rootScope) => ({
    restrict: 'A',
    scope: {
    },
    link: (scope, element, attrs)=> {

        

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

});
import template from './template.jade';


export default() => ({
    restrict: 'E',
    scope: {},
    link: (scope, element, attrs)=>{
        //TODO Método paginación por revisar
        $rootScope.viewHandler = (view)=>{
            if($rootScope.view){
                $rootScope.lastView = $rootScope.view;
            }
            $rootScope.view = view;
        };


        //init
        $rootScope.viewHandler('1');

    },
    template

});
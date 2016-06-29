import template from './template.jade';

export default($rootScope) => ({
    restrict: 'E',
    scope: {},
    link:(scope,element,attrs)=>{
        //TODO Revisar metodo paginacion y mejorar
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
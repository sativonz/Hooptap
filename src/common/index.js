import angular from 'angular-mod';
let module = angular.module('common',[])
    //TODO Borrar o sustituir por el nuevo create-router .directive('viewHandler', require('./components/viewHandler').default)

    .factory('clientHelper',require('./services/clientHelper').default)
;

export default module.name;
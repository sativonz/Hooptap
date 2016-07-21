import angular from 'angular-mod';

let module = angular.module('viewHandler', [])
    .provider('viewHandlerService',require('./provider').default)
        .config(require('./config').default)

    .directive('vhRef', require('./directives/vhRef').default)
    .directive('vhView', require('./directives/vhView').default)
    ;

    export default module.name;
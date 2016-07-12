import angular from 'angular-mod';

let module = angular.module('common', [])
    .provider('greeterService', () =>{
            
        var message;
    
        this.setMessage = function(msg){
            message = msg;
        };
    
        this.$get = function greeterFactory(){
    
            return {
                greeting: 'Hello ' + message
            };
        };
    })
        .config(require('./components/viewHandler/config').default)
        .service(require('./components/viewHandler/greeterService').default)
        .directive('viewHandler', require('./components/viewHandler').default);
    
    export default module.name;
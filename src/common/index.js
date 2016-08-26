import angular from 'angular-mod';
let module = angular.module('common', [])
        .directive('viewHandler', require('./components/viewHandler').default)


        //Models
        .factory('BaseModel',           require('./models/BaseModel').default)
        .factory('_Extendable',         require('./models/_Extendable').default)
        .factory('_Savable',            require('./models/_Savable').default)
        .factory('_Customer',           require('./models/_Customer').default)
        .factory('_Badge',              require('./models/_Badge').default)
        .factory('_Quest',              require('./models/_Quest').default)
        .factory('_ScoreUnit',          require('./models/_ScoreUnit').default)
        ;

export default module.name;
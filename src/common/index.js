let module = angular.module('common', [])
    //TODO Borrar o sustituir por el nuevo create-router .directive('viewHandler', require('./components/viewHandler').default)


        .factory('clientHelper', require('./services/clientHelper').default)

        //Models
        .factory('BaseModel', require('./models/BaseModel').default)
        .factory('_Extendable', require('./models/_Extendable').default)

        .factory('_isWidget', require('./models/_isWidget').default)
        .factory('_isCustomer', require('./models/_isCustomer').default)

        .factory('_hasCustomer', require('./models/_hasCustomer').default)
        .factory('_hasLogin', require('./models/_hasLogin').default)
        .factory('_hasScoreUnits',          require('./models/_hasScoreUnits').default)

        .factory('_hasBadges',              require('./models/_hasBadges').default)
        // .factory('_Savable',            require('./models/_Savable').default)
        // .factory('_hasQuests',              require('./models/_hasQuests').default)
    ;
export default module.name;


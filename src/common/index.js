
import angular from '';
let module = angular.module('common',[])
    .directive('viewHandler', require('./components/viewHandler').default);

export default module.name;
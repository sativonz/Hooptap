import template from './template.jade';
import './styles.scss';

export default(clientHelper) => ({
    restrict: 'E',
    scope: {
        showTitle: '=?',
        showDesc: '=?',
        numberCols: '='
    },
    template,
    controller: ($scope, $rootScope, Customer, LoopBackAuth)=> {},
    link: (scope, element, attrs)=> {

        //Default values for widget customer access
        let defaults = {
            showTitle: true,
            showDesc: true
        };

        clientHelper.setDefaultAttributes(defaults, scope, attrs);
    }

});
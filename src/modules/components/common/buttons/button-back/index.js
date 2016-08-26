import template from './template.jade';
import './styles.scss';
/**
 * @ngdoc directive
 * @name Button back
 * @module Components
 * @description Among component back views
 * @restrict E
 * @element ANY
 */
export default($rootScope) => ({
    restrict: 'E',
    template,
    link: (scope, element, attrs)=>{
        scope.goBack = ()=> {
            $rootScope.selectItem = false;
        };
    }
});
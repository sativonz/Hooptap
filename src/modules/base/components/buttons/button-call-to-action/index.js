import template from './template.jade';
import './styles.scss';
/**
 * @ngdoc directive
 * @name Button call to action
 * @module Components
 * @description Button that alerts an action to perform
 * @restrict E
 * @element ANY
 */
export default() => ({
    restrict: 'E',
    template,
    scope: {
        
    },
    link: (attrs, scope, element) => {
 
    }
});
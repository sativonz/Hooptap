import template from './template.jade';
import './styles.scss';

export default() => ({
    restrict: 'E',
    transclude: true,
    scope: {
        title: '@'
    },

    link: (scope, element, attrs)=>{
    },
    template

});
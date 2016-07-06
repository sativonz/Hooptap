import template from './template.jade';
import './styles.scss';

export default() => ({
    restrict: 'E',
    scope: {
        title: '@'
    },

    link: (scope, element, attrs)=>{
    },
    template

});
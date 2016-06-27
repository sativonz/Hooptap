import template from './template.jade';
import './styles.scss';

export default() => ({
    restrict: 'E',
    scope: {
        items: '=',
        columns: '='
    },
    link: (element, attrs, scope)=>{
    },
    template

});
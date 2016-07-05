import template from './template.jade';
import './styles.scss';

export default() => ({
    restrict: 'E',
    scope: {
        dynamic: '=',
        type: '='
    },
    link: (scope, element, attrs)=>{

    },
    template

});
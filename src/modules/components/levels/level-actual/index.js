import template from './template.jade';
import './styles.scss';

export default($timeout) => ({
    restrict: 'E',
    scope: {
        image: '@',
        dynamic: '=',
        type: '='
    },
    transclude: true,
    link: (scope, element, attrs)=> {

    },
    template

});
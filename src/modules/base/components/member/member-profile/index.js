import template from './template.jade';
import './styles.scss';

export default() => ({
    restrict: 'E',
    scope: {
        name: '@',
        username: '@',
        email: '@',
        image: '@',
        imageverified: '@'
    },
    link: (scope, element, attrs)=> {
    },
    template

});
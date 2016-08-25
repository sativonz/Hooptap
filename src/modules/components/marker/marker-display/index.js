import template from './template.jade';
import './styles.scss';
//TODO Ngdocs
export default($timeout, $rootScope) => ({
    restrict: 'E',
    scope: {
        options: '='
    },
    template,
    link: (scope, element, attrs)=> {}
});
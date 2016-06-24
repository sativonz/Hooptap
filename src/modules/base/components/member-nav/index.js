import template from './template.jade';
import './styles.scss';
import controller from './controller';

export default() => ({
    restrict: 'E',
    scope: {},
    template,
    controller

});
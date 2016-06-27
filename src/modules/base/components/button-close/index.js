import template from './template.jade';
import './styles.scss';

export default() => ({
    restrict: 'E',
    template,
    link: (attrs, scope, element) => {
        $('.close-widget-js').click(function() {
            $('#ht-widget').hide(500);
        });
    }
});
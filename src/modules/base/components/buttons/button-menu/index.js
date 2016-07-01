import template from './template.jade';
import './styles.scss';

export default() => ({
    restrict: 'E',
    scope: {
    },
    template,
    link: (attrs, scope, element) => {

        // $('c-button-init').click(function(ev) {
        //     $('#ht-widgets').show("slow");
        //     $('c-button-init').hide(100);
        // });

    }
});
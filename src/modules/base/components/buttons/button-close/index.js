import template from './template.jade';
import './styles.scss';

export default() => ({
    restrict: 'E',
    template,
    link: (attrs, scope, element) => {
        //TODO Por borrar
        // $('c-notifications-popup c-button-close').click(function(ev) {
        //     var $target = $(ev.target);
        //     var $parent = $target.closest('c-notifications-popup');
        //     $parent.hide(500);
        // });

        $('c-button-close').click(function(ev) {
            $('#ht-widgets').fadeOut().css("display" , "none");
            $('c-button-init').show("slow");

        });
    }
});
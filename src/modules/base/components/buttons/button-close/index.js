import template from './template.jade';
import './styles.scss';
/**
 * @ngdoc directive
 * @name Button close
 * @module Components
 * @description Button to close the widget
 * @restrict E
 * @element ANY
 */
export default() => ({
    restrict: 'E',
    template,
    link: (attrs, scope, element) => {
        $('c-button-close').click(function(ev) {
            $('#ht-widgets').fadeOut().css("display" , "none");
            $('c-button-init').show("slow");

        });
    }
});
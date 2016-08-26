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
    link: (scope, element, attrs)=>{
        $('c-button-close').click(function(ev) {
            $('c-button-init').show("slow");
            $('#ht-widgets').fadeOut().css("display" , "none");
        });
    }
});
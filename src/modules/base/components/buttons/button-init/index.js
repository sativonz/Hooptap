import template from './template.jade';
import './styles.scss';
/**
 * @ngdoc directive
 * @name Button init
 * @module Components
 * @description Button to open the widgets, it is the first button you see.
 * @restrict E
 * @element ANY
 */
export default() => ({
    restrict: 'E',
    scope: {
        text: '@',
    },
    template,
    link: (scope, element, attrs)=>{
        $('c-button-init').click(function(ev) {
            $('#ht-widgets').show("slow");
            $('c-button-init').hide(100);
        });

    }
});
import template from './template.jade';
import './styles.scss';
/**
 * @ngdoc directive
 * @name Button init
 * @module Components
 * @description Button to open the widget
 * @restrict E
 * @params {String} text Text of the button
 * @params {String} image Image of the button, positioned to the left
 * @element ANY
 */
export default() => ({
    restrict: 'E',
    scope: {
        text: '@',
        image: '@'
    },
    template,
    link: (scope, element, attrs)=>{
        // $('c-button-init').click(function(ev) {
        //     $('#ht-widgets').fadeIn().css("display" , "block");
        //     $('c-button-init').hide(100);
        // });

    }
});
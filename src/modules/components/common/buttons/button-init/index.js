import template from './template.jade';
import $ from 'jquery';
import './styles.scss';
/**
 * @ngdoc directive
 * @name Button init
 * @module Components
 * @description Button to open the widgets, it is the first button you see.
 * @restrict E
 * @params {String} text Text of the button
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
            $('#ht-widgets').fadeIn().css("display" , "block");
            $('c-button-init').hide(100);
        });

    }
});
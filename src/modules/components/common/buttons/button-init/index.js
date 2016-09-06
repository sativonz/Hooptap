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
export default($rootScope) => ({
    restrict: 'E',
    scope: {
        text: '@',
        image: '@'
    },
    template,
    link: (scope, element, attrs)=>{
        if(!angular.isDefined($rootScope.widgetOpened)){
            $rootScope.widgetOpened = false;
        }

        element.on('click', (event)=>{
            $rootScope.widgetOpened = !$rootScope.widgetOpened;
            $rootScope.$apply();
        });
    }
});
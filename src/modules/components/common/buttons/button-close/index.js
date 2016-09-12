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
export default($rootScope) => ({
    restrict: 'E',
    template,
    link: (scope, element, attrs)=>{
        console.log($rootScope.widgetOpened);

        element.on('click', (event)=>{
            $rootScope.widgetOpened = false;
            $rootScope.$apply();

        });
    }
});
import template from './template.jade';
import './styles.scss';
/**
 * //TODO por ver como se plantean los pasos de la mision... hecha solo la vista.....
 * @ngdoc directive
 * @name Progressbar badges
 * @module Components
 * @description Component to see the user's progress at the current badge
 * @restrict E
 * @element ANY
 */
export default() => ({
    restrict: 'E',
    scope: {
        steps: '=value'
    },
    link: (scope, element, attrs)=>{

        scope.$watch('steps',(steps)=>{
            if (typeof steps !== 'undefined'){
                scope.num_of_steps = scope.steps;
                scope.width_of_step = 100/scope.num_of_steps + '%';
                console.log(scope.steps);
                console.log(scope.width_of_step);
            }
        });
    },
    template

});
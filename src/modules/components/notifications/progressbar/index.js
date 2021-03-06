import template from './template.jade';
import './styles.scss';
/**
 * @ngdoc directive
 * @name Progressbar
 * @module Components
 * @description Component to see the user's progress for badges and quest, to show the progress
 * @restrict E
 * @param {Object} steps The total of steps
 * @param {Object} currentStep The current step of the user
 * @element ANY
 */
export default() => ({
    restrict: 'E',
    scope: {
        steps: '=',
        currentStep: '='
    },
    link: (scope, element, attrs)=> {
        let steps = scope.steps;
        //TODO Ask to back recieved object for steps
        if (!scope.currentStep) {
            scope.currentStep = 0;
        }

        if (typeof steps !== 'undefined') {
            let customSteps;
            //If steps is object is Quest Else Badge step
            if (typeof steps === 'object') {
                customSteps = Object.keys(scope.steps);
            } else {
                customSteps = [];
                for (var step = 0; step < parseInt(scope.steps); step++) {
                    if (step < scope.currentStep) {
                        customSteps.push({complete: true});
                    } else {
                        customSteps.push({complete: false});
                    }
                }
                scope.steps = customSteps;
            }
            scope.stepWidth = Math.floor(100 / customSteps.length) + '%';
        }
        window.steps = scope;





    },

    template

});
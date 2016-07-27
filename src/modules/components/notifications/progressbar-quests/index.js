import template from './template.jade';
import './styles.scss';
/**
 * //TODO por ver como se plantean los pasos de la mision... hecha solo la vista.....
 * @ngdoc directive
 * @name Progressbar quests
 * @module Components
 * @description Component to see the user's progress at the current quest
 * @restrict E
 * @element ANY
 */
export default() => ({
    restrict: 'E',
    scope: {
    },
    link: (scope, element, attrs)=>{

        //Number of steps in the quests
        scope.numberStepsQuest = new Array(10);


        scope.quests = {
            "steps": {

                "step1": {
                    "complete": true,
                    "lapsed": false,
                },
                "step2": {
                    "complete": true,
                    "lapsed": true,
                },
                "step3": {
                    "complete": false,
                    "lapsed": true,
                },
                "step4": {
                    "complete": false,
                    "lapsed": false,
                },
                "step5": {
                    "complete": true,
                    "lapsed": false,
                }
            }
        };
        scope.num_of_steps = Object.keys(scope.quests.steps).length;
        scope.width_of_step = Math.floor(100/scope.num_of_steps) + '%';
    },
    template

});
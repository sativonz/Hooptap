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
        scope.numberStepsQuest = new Array(9);

    },
    template

});
import template from './template.jade';
import './styles.scss';
/**
 * @ngdoc directive
 * @name Widget quests
 * @module Components
 * @description Component for widget quests, where it is displayed the image or number of the quest, state and the steps
 * @restrict E
 * @param {image} image Quest image
 * @param {Boolean} showCompleteQuests Whether to display the complete quests
 * @element ANY
 */
export default() => ({
    restrict: 'E',
    scope: {
    },
    link: (scope, element, attrs)=>{


    },
    template

});
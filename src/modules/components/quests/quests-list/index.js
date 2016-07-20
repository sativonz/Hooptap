import template from './template.jade';
import './styles.scss';
/**
 * @ngdoc directive
 * @name Quests list
 * @module Components
 * @description Component for see the quest list
 * @restrict E
 * @param {String} title => Title of the quests
 * @param {String} desc => Description of the quests
 * @param {Image} img => Image of the quests
 * @element ANY
 */
export default() => ({
    restrict: 'E',
    transclude: true,
    scope: {
    },
    link: (scope, element, attrs)=>{

        scope.toggleDetailQuest = () => {

            //Toggle the details on quest
            scope.showDetailQuests = !scope.showDetailQuests;
            if($('.quest--row--status-label').hasClass("hide")){
                $('.quest--row--status-label').show("slow");
            }else if (!$('.quest--row--status-label').hasClass("hide")){
                $('.quest--row--status-label').hide("slow");
            }
            $('.quest--row--status-label').toggleClass("hide");

        };
    },
    template

});
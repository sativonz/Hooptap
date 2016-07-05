import template from './template.jade';
import './styles.scss';

export default() => ({
    restrict: 'E',
    transclude: true,
    scope: {
    },
    link: (scope, element, attrs)=>{

        scope.toggleDetailQuest = () => {
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
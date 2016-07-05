import template from './template.jade';
import './styles.scss';

export default() => ({
    restrict: 'E',
    scope: {
        dynamic: '=',
        type: '='
    },
    link: (scope, element, attrs)=>{

        //Number of steps in the quests
        scope.numberStepsQuest = new Array(4);

    },
    template

});
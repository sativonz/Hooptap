import template from './template.jade';
import './styles.scss';

export default() => ({
    restrict: 'E',
    scope: {
        image: '@',
    },
    link: (scope, element, attrs)=> {
        var amt = 66;

        scope.countTo = amt;
        scope.countFrom = 0;

        setTimeout(function(){
            scope.progressValue = amt;
        }, 200);

    },
    template

});
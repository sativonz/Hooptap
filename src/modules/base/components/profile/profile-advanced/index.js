import template from './template.jade';
import './styles.scss';

export default() => ({
    restrict: 'E',
    scope: {
        name: '@',
        username: '@',
        email: '@',
        id: '@',
        image: '@',
        imageverified: '@',
        imagegender: '@',
        points: '@',
        dynamic: '=',
        type: '='

    },
    transclude: true,
    link: (scope, element, attrs)=> {
        
        //Definir el numero de cols
        scope.numberCols = 3;
        scope.colWidth = 12/ scope.numberCols;

        //Definir el numero de badges en cada columna
        scope.numberBadges = new Array(6);
        

    },
    template

});
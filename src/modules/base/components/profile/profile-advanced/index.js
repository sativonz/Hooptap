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
        
        //Definir el numero de columnas
        scope.numberCols = new Array(2);

        //Definir el numero de badges en cada columna
        scope.numberBadges = new Array(3);
        

    },
    template

});
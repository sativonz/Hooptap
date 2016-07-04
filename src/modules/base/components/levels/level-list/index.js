import template from './template.jade';
import './styles.scss';

export default($timeout) => ({
    restrict: 'E',
    scope: {
    },
    link: (scope, element, attrs)=> {
        //Definir el numero de niveles
        scope.numberLevels = new Array(10);


    },
    template

});
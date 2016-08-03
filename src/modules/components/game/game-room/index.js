import template from './template.jade';
import './styles.scss';
//TODO ngDocs
export default($timeout) => ({
    restrict: 'E',
    template,
    scope: {
    },
    link: (scope, element, attrs)=> {

        //Definir el numero de cols
        scope.numberCols = 5;

        scope.gameroom = [
            {
                "id": "5775397981dbc14a04530f73",
                "name": "Título",
                "title": "Título",
                "desc": "Descripción",
                "img" :  "http://hooptap.s3.amazonaws.com/widgets/icono-default.png",
            },
            {
                "id": "5775397981dbc14a04530f73",
                "name": "Título",
                "title": "Título",
                "desc": "Descripción",
                "img" :  "http://hooptap.s3.amazonaws.com/widgets/icono-default.png",
            },
            {
                "id": "5775397981dbc14a04530f73",
                "name": "Título",
                "title": "Título",
                "desc": "Descripción",
                "img" :  "http://hooptap.s3.amazonaws.com/widgets/icono-default.png",
            },
            {
                "id": "5775397981dbc14a04530f73",
                "name": "Título",
                "title": "Título",
                "desc": "Descripción",
                "img" :  "http://hooptap.s3.amazonaws.com/widgets/icono-default.png",
            },
            {
                "id": "5775397981dbc14a04530f73",
                "name": "Título",
                "title": "Título",
                "desc": "Descripción",
                "img" :  "http://hooptap.s3.amazonaws.com/widgets/icono-default.png",
            }
        ];
    }
});
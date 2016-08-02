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
        scope.numberCols = 2;

        switch (scope.numberCols) {
            case 2:
                scope.colWidth = 6;
                break;
            case 3:
                scope.colWidth = 4;
                break;
            case 5:
                scope.htCol5 = "width: 20%;float:left;padding-right:10px;padding-left:10px;";
                break;
            case 6:
                scope.colWidth = 2;
                break;
            case 4:
            default:
                scope.colWidth = 3;
                break;
        }

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
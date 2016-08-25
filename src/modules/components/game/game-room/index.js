import template from './template.jade';
import './styles.scss';
//TODO ngDocs
export default($timeout) => ({
    restrict: 'E',
    template,
    scope: {
        showTitle: '=',
        showDesc: '=',
    },
    link: (scope, element, attrs)=> {

        //Definir el numero de cols entre 2, 3, 4 y 5
        scope.numberCols = 3;
        scope.defaultImage = "http://hooptap.s3.amazonaws.com/widgets/gameroom/icono-default.png";
        scope.gameroom = [
            {
                "id": "5775397981dbc14a04530f73",
                "name": "Colin McRae",
                "title": "Colin McRae",
                "desc": "Campeonato WRC",
                "customImage": "http://www.cochesgt.com/wp-content/uploads/2015/09/Subaru-Impreza-Colin-McRae-2-750x400.jpg",
                "img" :  "http://hooptap.s3.amazonaws.com/widgets/gameroom/icono-default.png",
            },
            {
                "id": "5775397981dbc14a04530f73",
                "name": "Título",
                "title": "Título",
                "desc": "Descripción",
                "customImage": "",
                "img" :  "http://hooptap.s3.amazonaws.com/widgets/gameroom/icono-default.png",
            },
            {
                "id": "5775397981dbc14a04530f73",
                "name": "Título",
                "title": "Título",
                "desc": "Descripción",
                "customImage": "",
                "img" :  "http://hooptap.s3.amazonaws.com/widgets/gameroom/icono-default.png",
            },
            {
                "id": "5775397981dbc14a04530f73",
                "name": "Título",
                "title": "Título",
                "desc": "Descripción",
                "customImage": "",
                "img" :  "http://hooptap.s3.amazonaws.com/widgets/gameroom/icono-default.png",
            },
            {
                "id": "5775397981dbc14a04530f73",
                "name": "Título",
                "title": "Título",
                "desc": "Descripción",
                "customImage": "",
                "img" :  "http://hooptap.s3.amazonaws.com/widgets/gameroom/icono-default.png",
            }
        ];
    }
});
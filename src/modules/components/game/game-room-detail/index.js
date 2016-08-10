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
        scope.numberCols = 4;
        scope.defaultImage = "http://hooptap.s3.amazonaws.com/widgets/icono-default.png";
        scope.gameromDetail = [
            {
                "id": "5775397981dbc14a04530f73",
                "name": "",
                "title": "",
                "desc": "",
                "customImage": "https://lh3.googleusercontent.com/x07sJgv3AuWnD8ZC4zZeVbDXU-dfhznouXxuNekDhTNYNSc745rW21iGYmFj9fFe6g=w300",
                "img" :  "http://hooptap.s3.amazonaws.com/widgets/icono-default.png",
            },
            {
                "id": "5775397981dbc14a04530f73",
                "name": "",
                "title": "",
                "desc": "",
                "customImage": "https://lh3.googleusercontent.com/x07sJgv3AuWnD8ZC4zZeVbDXU-dfhznouXxuNekDhTNYNSc745rW21iGYmFj9fFe6g=w300",
                "img" :  "http://hooptap.s3.amazonaws.com/widgets/icono-default.png",
            },
            {
                "id": "5775397981dbc14a04530f73",
                "name": "Título",
                "title": "Título",
                "desc": "Descripción",
                "customImage": "",
                "img" :  "http://hooptap.s3.amazonaws.com/widgets/icono-default.png",
            },
            {
                "id": "5775397981dbc14a04530f73",
                "name": "Título",
                "title": "Título",
                "desc": "Descripción",
                "customImage": "",
                "img" :  "http://hooptap.s3.amazonaws.com/widgets/icono-default.png",
            },
            {
                "id": "5775397981dbc14a04530f73",
                "name": "Título",
                "title": "Título",
                "desc": "Descripción",
                "customImage": "",
                "img" :  "http://hooptap.s3.amazonaws.com/widgets/icono-default.png",
            }
        ];
    }
});
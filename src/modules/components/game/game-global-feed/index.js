import template from './template.jade';
import './styles.scss';
//TODO ngDocs
export default($timeout) => ({
    restrict: 'E',
    template,
    scope: {},
    link: (scope, element, attrs)=> {
        scope.activity = {
            "global": {
                "name": "Actividad global",
                "img": "http://www.artecnics.com/img/inicio/pasafotos/circuloazul.png",
                "feed": [
                    {
                        "title": "Has ganado un badge: Jugón",
                        "date": "22/12/2015",
                        "img": "https://www.uts.edu.au/sites/default/files/Andy%20So_circle.jpg",
                    },
                    {
                        "title": "Has ganado 1000 pts",
                        "date": "5/1/2016",
                        "img": "http://icons.iconarchive.com/icons/seanau/fresh-web/512/Badge-icon.png",
                    },
                    {
                        "title": "Has ganado 2 diamantes",
                        "date": "22/05/2016",
                        "img": "https://www.uts.edu.au/sites/default/files/Andy%20So_circle.jpg",
                    },
                    {
                        "title": "Has ganado 500 monedas",
                        "date": "21/02/2016",
                        "img": "https://www.uts.edu.au/sites/default/files/Andy%20So_circle.jpg",
                    },
                    {
                        "title": "Has ganado 4 estrellas",
                        "date": "12/09/2015",
                        "img": "https://www.uts.edu.au/sites/default/files/Andy%20So_circle.jpg",
                    },
                    {
                        "title": "Has ganado 2500 pts",
                        "date": "2/05/2016",
                        "img": "https://www.uts.edu.au/sites/default/files/Andy%20So_circle.jpg",
                    }
                ],
            },
        };
    }

});
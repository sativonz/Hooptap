import template from './template.jade';
import stampit from 'stampit';
import './styles.scss';
var defaultImage =  require('./images/global.png');

//TODO ngDocs

export default(BaseModel, $rootScope, Customer, LoopBackAuth, _hasCustomer) => ({
    restrict: 'E',
    template,
    scope: {
        item: '=?'
    },
    link: (scope, element, attrs)=> {

        scope.defaultImage = defaultImage;

        //Get events
        let WidgetModel = stampit().compose(BaseModel, _hasCustomer);
        let CustomerId = scope.item.id;

        WidgetModel().getEvents(CustomerId).$promise.then((response)=> {
            scope.item.events = response;
        }).catch((error)=> {
            console.log(error);
        });






        scope.activity = {
            "global": {
                "name": "Actividad global",
                "img": "http://www.artecnics.com/img/inicio/pasafotos/circuloazul.png",
                "feed": [
                    {
                        "title": "Has ganado un badge: Jugón",
                        "date": "22/12/2015",
                        "time": "10:50",
                        "img": "https://cdn0.iconfinder.com/data/icons/gamification-flat-awards-and-badges/500/star13-512.png",
                    },
                    {
                        "title": "Has ganado 1000 pts",
                        "date": "5/1/2016",
                        "time": "10:50",
                        "img": "http://icons.iconarchive.com/icons/seanau/fresh-web/512/Badge-icon.png",
                    },
                    {
                        "title": "Has ganado 2 diamantes",
                        "date": "22/05/2016",
                        "time": "19:50",
                        "img": "http://365psd.com/images/premium/thumbs/199/jewelry-sign-icon-ring-with-diamond-symbol-circle-flat-button-with-shadow-modern-ui-website-navigation-vector-830686.jpg",
                    },
                    {
                        "title": "Has ganado 500 monedas",
                        "date": "21/02/2016",
                        "time": "20:00",
                        "img": "https://cdn4.iconfinder.com/data/icons/game-design-flat-icons-2/512/10_flag_finish_game_design_flat_icon-512.png",
                    },
                    {
                        "title": "Has ganado 4 estrellas",
                        "date": "12/09/2015",
                        "time": "10:00",
                        "img": "https://cdn0.iconfinder.com/data/icons/gamification-flat-awards-and-badges/500/star2-512.png",
                    },
                    {
                        "title": "Has ganado 2500 pts",
                        "date": "2/05/2016",
                        "time": "12:50",
                        "img": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTIYKGzVEdXvFbcDCDV6xVdH4V7-1pmYfGh-dDR4OpqXkyb7u0H",
                    }
                ],
            },
        };
    }

});
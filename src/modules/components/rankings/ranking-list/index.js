import template from './template.jade';
import './styles.scss';
/**
 * @ngdoc directive
 * @name Ranking list
 * @module Components
 * @description Component for see the total ranking
 * @restrict E
 * //TODO revisar params
 * @param {String} username Username of the user of the ranking
 * @param {String} position Position in the ranking of the user
 * @param {String} score Score in the ranking of the user
 * @element ANY
 */
export default() => ({
    restrict: 'E',
    template,
    scope: {},
    transclude: true,

    link: (scope, element, attrs)=> {


        scope.rankings = {
            "diamond": {
                "name": "Ranking de diamantes",
                "img": "http://es.seaicons.com/wp-content/uploads/2016/03/diamond-icon.png",
                "users": [
                    {
                        "username": "Sat1",
                        "showProfileImg": false,
                        "img": "https://www.uts.edu.au/sites/default/files/Andy%20So_circle.jpg",
                        "score": 1120,
                    },
                    {
                        "username": "Sergux",
                        "showProfileImg": true,
                        "mePosition": true,
                        "img": "http://yuki-sato.com/profile_circle.png",
                        "score": 9991050,
                    },
                    {
                        "username": "Paul Stak",
                        "showProfileImg": true,
                        "img": "http://quinnpalmer.co/wp-content/uploads/2013/04/Circle-Profile.png",
                        "score": 900,
                    },
                    {
                        "username": "Korsakof",
                        "showProfileImg": false,
                        "img": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRkjAbZruKW50DZ70xgI9l03MV1bUUPXriVYcCub3Go7rrSsDD4",
                        "score": 1500,
                    },
                    {
                        "username": "Jos1",
                        "showProfileImg": true,
                        "img": "https://www.uts.edu.au/sites/default/files/Alexandria%20Hipolito_circle.jpg",
                        "score": 2000,
                    },
                    {
                        "username": "Jos1",
                        "showProfileImg": true,
                        "img": "https://www.uts.edu.au/sites/default/files/Alexandria%20Hipolito_circle.jpg",
                        "score": 2000,
                    },
                    {
                        "username": "Jos1",
                        "showProfileImg": true,
                        "img": "https://www.uts.edu.au/sites/default/files/Alexandria%20Hipolito_circle.jpg",
                        "score": 2000,
                    },
                    {
                        "username": "Jos1",
                        "showProfileImg": true,
                        "img": "https://www.uts.edu.au/sites/default/files/Alexandria%20Hipolito_circle.jpg",
                        "score": 2000,
                    },
                    {
                        "username": "Jos1",
                        "showProfileImg": true,
                        "img": "https://www.uts.edu.au/sites/default/files/Alexandria%20Hipolito_circle.jpg",
                        "score": 2000,
                    },
                    {
                        "username": "Jos1",
                        "showProfileImg": true,
                        "img": "https://www.uts.edu.au/sites/default/files/Alexandria%20Hipolito_circle.jpg",
                        "score": 2000,
                    },
                    {
                        "username": "Jos1",
                        "showProfileImg": true,
                        "img": "https://www.uts.edu.au/sites/default/files/Alexandria%20Hipolito_circle.jpg",
                        "score": 2000,
                    },
                    {
                        "username": "Jos1",
                        "showProfileImg": true,
                        "img": "https://www.uts.edu.au/sites/default/files/Alexandria%20Hipolito_circle.jpg",
                        "score": 2000,
                    }

                ]
            },
        };



    },


});
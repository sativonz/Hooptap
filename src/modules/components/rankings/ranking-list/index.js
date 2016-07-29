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
                        "showProfileImg": true,
                        "img": "https://www.uts.edu.au/sites/default/files/Andy%20So_circle.jpg",
                        "score": 1120,
                    },
                    {
                        "username": "Sergux",
                        "showProfileImg": true,
                        "img": "http://yuki-sato.com/profile_circle.png",
                        "score": 1050,
                    },
                    {
                        "username": "Paul Stak",
                        "showProfileImg": true,
                        "img": "http://quinnpalmer.co/wp-content/uploads/2013/04/Circle-Profile.png",
                        "score": 900,
                    },
                    {
                        "username": "Korsakof",
                        "showProfileImg": true,
                        "img": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRkjAbZruKW50DZ70xgI9l03MV1bUUPXriVYcCub3Go7rrSsDD4",
                        "score": 1500,
                    },
                    {
                        "username": "Jos1",
                        "showProfileImg": true,
                        "img": "https://www.uts.edu.au/sites/default/files/Alexandria%20Hipolito_circle.jpg",
                        "score": 2000,
                    },

                ]
            },
        };


        scope.items = [
            {position: '2', username: 'sat1', score: 1000},
            {position: '1', username: 'jos1', score: 5000},
            {position: '2', username: 'blan', score: 3000},
            {position: '4', username: 'vonz', score: 4500},
            {position: '22', username: 'sergux', score: 200},
            {position: '12', username: 'korsakof', score: 100},
            {position: '10', username: 'paul', score: 500},
            {position: '5', username: 'stalck', score: 2540},
            {position: '9', username: 'atpc', score: 1254}

        ];


    },


});
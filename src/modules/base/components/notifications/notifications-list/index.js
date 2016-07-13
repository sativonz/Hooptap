import template from './template.jade';
import './styles.scss';
/**
 * @ngdoc directive
 * @name Notification list
 * @module Components
 * @description List of all notifications received and their status , read or not.
 * @restrict E
 * @param {String} title => Title or name of the notification
 * @param {Img} image => Image boolean to see the state of the notificaion (read or not)
 * @element ANY
 */
export default() => ({
    restrict: 'E',
    scope: {
        title: '@',
        image: '@'
    },
    link: (scope, element, attrs)=> {
        scope.items = [
            {
                title: 'Has ganado 10 pts',
                state: 'https://cdn4.iconfinder.com/data/icons/checkboxes-and-switches/100/checkbox-round-checked-green-128.png'
            },
            {
                title: 'Has ganado 200 pts',
                state: 'https://cdn4.iconfinder.com/data/icons/checkboxes-and-switches/100/checkbox-round-checked-green-128.png'
            },
            {
                title: 'Has subido al nivel 2',
                state: 'http://i912.photobucket.com/albums/ac329/dippeanut/checkbox_checked.png'
            },
            {
                title: 'Has ganado 1.000 pts',
                state: 'http://i912.photobucket.com/albums/ac329/dippeanut/checkbox_checked.png'
            },
            {
                title: 'Has subido al nivel 3',
                state: 'https://cdn4.iconfinder.com/data/icons/checkboxes-and-switches/100/checkbox-round-checked-green-128.png'
            },
        ];

            },
            template

    });
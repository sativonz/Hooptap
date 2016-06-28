import template from './template.jade';
import './styles.scss';

export default() => ({
    restrict: 'E',
    scope: {
        title: '@',
        image: '@'
    },
    link: (scope, element, attrs)=>{
        scope.items = [
            {title:'Has ganado 10 pts', state: 'https://cdn4.iconfinder.com/data/icons/checkboxes-and-switches/100/checkbox-round-checked-green-128.png'},
            {title:'Has ganado 200 pts', state:'https://cdn4.iconfinder.com/data/icons/checkboxes-and-switches/100/checkbox-round-checked-green-128.png'},
            {title:'Has subido al nivel 2', state:'http://i912.photobucket.com/albums/ac329/dippeanut/checkbox_checked.png'},
            {title:'Has ganado 1.000 pts', state:'http://i912.photobucket.com/albums/ac329/dippeanut/checkbox_checked.png'},
            {title:'Has subido al nivel 3', state:'https://cdn4.iconfinder.com/data/icons/checkboxes-and-switches/100/checkbox-round-checked-green-128.png'},
        ];

    },
    template

});
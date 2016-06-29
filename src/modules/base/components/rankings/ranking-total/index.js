import template from './template.jade';
import './styles.scss';

export default() => ({
    restrict: 'E',
    scope: {
    },


    link: (scope, element, attrs)=>{

        scope.rankings = [
            {desc: 'sat1', img: "http://vignette3.wikia.nocookie.net/alderapedia/images/5/5e/Ranking_icon.png/revision/latest?cb=20140822102748&path-prefix=es"},
            {desc: 'jos1', img: "http://vignette3.wikia.nocookie.net/alderapedia/images/5/5e/Ranking_icon.png/revision/latest?cb=20140822102748&path-prefix=es"},
            {desc: 'blan', img: "http://vignette3.wikia.nocookie.net/alderapedia/images/5/5e/Ranking_icon.png/revision/latest?cb=20140822102748&path-prefix=es"},
            {desc: 'vonz', img: "http://vignette3.wikia.nocookie.net/alderapedia/images/5/5e/Ranking_icon.png/revision/latest?cb=20140822102748&path-prefix=es"},
            {desc: 'vonz', img: "http://vignette3.wikia.nocookie.net/alderapedia/images/5/5e/Ranking_icon.png/revision/latest?cb=20140822102748&path-prefix=es"},
            {desc: 'vonz', img: "http://vignette3.wikia.nocookie.net/alderapedia/images/5/5e/Ranking_icon.png/revision/latest?cb=20140822102748&path-prefix=es"},
            {desc: 'vonz', img: "http://vignette3.wikia.nocookie.net/alderapedia/images/5/5e/Ranking_icon.png/revision/latest?cb=20140822102748&path-prefix=es"},
            {desc: 'sergux', img: "http://vignette3.wikia.nocookie.net/alderapedia/images/5/5e/Ranking_icon.png/revision/latest?cb=20140822102748&path-prefix=es"},
            {desc: 'korsakof', img: "http://vignette3.wikia.nocookie.net/alderapedia/images/5/5e/Ranking_icon.png/revision/latest?cb=20140822102748&path-prefix=es"},

        ];
    },
    template

});
import template from './template.jade';
import './styles.scss';

export default() => ({
    restrict: 'E',
    scope: {},
    template,
    link: (scope, element, attrs)=>{
        console.log("nav");
    }

});
import template from './template.jade';

export default() => ({
    restrict: 'E',
    scope: {},
    template,
    link: (scope, element, attrs)=>{
        console.log("nav");
    }

});
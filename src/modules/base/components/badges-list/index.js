import template from './template.jade';


export default() => ({
    restrict: 'E',
    scope: {
        items: '=',
        columns: '='
    },
    link: (element, attrs, scope)=>{
    },
    template

});
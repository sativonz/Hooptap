import template from './template.jade';

export default() => ({
    restrict: 'E',
    transclude: true,
    scope: {
        title: '@'
    },

    link: (scope, element, attrs)=>{
    },
    template

});
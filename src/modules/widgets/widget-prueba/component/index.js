import Template from './template.jade';
import Controller from './controller.js';

export default() => ({
    restrict: 'E',
    scope: {},
    controller: Controller,
    template: Template

});
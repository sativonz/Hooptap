 import template from './template.jade';
import './styles.scss';
 /**
  * @ngdoc directive
  * @name Notification popup
  * @module Components
  * @description Popup notifications on the activity performed by the user
  * @restrict E
  * @param {String} message => Message of the popup
  * @element ANY
  */
export default() => ({
    restrict: 'E',
    scope: {},
    template,
    link: (scope, element, attrs)=>{}
});
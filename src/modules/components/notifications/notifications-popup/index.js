import template from './template.jade';
import './styles.scss';
//TODO ngDocs remake
 /**
  * @ngdoc directive
  * @name Notification popup
  * @module Components
  * @description Popup notifications of the global activity
  * @restrict E
  * @element ANY
  */
export default() => ({
    restrict: 'E',
    scope: {},
    template
});
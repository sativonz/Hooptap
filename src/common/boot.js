

import loginSuccesTemplate from  './services/Notifier/templates/success.jade';
import eventBadgeTemplate from  './services/Notifier/templates/eventBadge.jade';
import eventScoreUnitTemplate from  './services/Notifier/templates/eventScoreUnit.jade';
import warningTemplate from  './services/Notifier/templates/warning.jade';
import errorTemplate from  './services/Notifier/templates/error.jade';

export default ($templateCache)=>{
    //Notificator templates from services/Notifier/templates
    $templateCache.put('success.html',  loginSuccesTemplate());
    $templateCache.put('eventBadge.html',  eventBadgeTemplate());
    $templateCache.put('eventScoreUnit.html',  eventScoreUnitTemplate());
    $templateCache.put('warning.html',  warningTemplate());
    $templateCache.put('error.html',  errorTemplate());
}
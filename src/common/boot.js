import loginSuccesTemplate from  './services/Notifier/templates/success.jade';
import eventTemplate from  './services/Notifier/templates/event.jade';
import warningTemplate from  './services/Notifier/templates/warning.jade';
import errorTemplate from  './services/Notifier/templates/error.jade';

export default ($templateCache)=>{
    //Notificator templates from services/Notifier/templates
    $templateCache.put('success.html',  loginSuccesTemplate());
    $templateCache.put('event.html',  loginSuccesTemplate());
    $templateCache.put('warning.html',  warningTemplate());
    $templateCache.put('error.html',  errorTemplate());
}
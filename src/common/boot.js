import loginSuccesTemplate from  './services/Notifier/templates/success.jade';
import warningTemplate from  './services/Notifier/templates/warning.jade';
import errorTemplate from  './services/Notifier/templates/error.jade';

export default ($templateCache)=>{
    //Notificator templates
    $templateCache.put('success.html',  loginSuccesTemplate());
    $templateCache.put('warning.html',  warningTemplate());
    $templateCache.put('error.html',  errorTemplate());
}
export default (LoopBackResourceProvider, $httpProvider, GLOBAL_CONFIG)=> {

    $httpProvider.defaults.headers.common['api-key'] = GLOBAL_CONFIG.apiKey;

    //Loopback Angular Sdk Config
    LoopBackResourceProvider.setUrlBase('http://52.209.100.27:8080/api');
}
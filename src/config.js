export default (LoopBackResourceProvider, $httpProvider, GLOBAL_CONFIG)=> {
    //Http Provider for interceptors
    $httpProvider.interceptors.push('httpInterceptorService');

    $httpProvider.defaults.headers.common['api-key'] = GLOBAL_CONFIG.apiKey;

    //Loopback Angular Sdk Config
    //LoopBackResourceProvider.setUrlBase('http://52.209.100.27:8080/api');
    LoopBackResourceProvider.setUrlBase('http://52.211.32.45:3000/api');
}
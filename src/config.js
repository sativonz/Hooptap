export default (LoopBackResourceProvider, $httpProvider)=> {

    //Loopback Angular Sdk Config
    //LoopBackResourceProvider.setUrlBase('http://52.19.196.75:8080/api');
    //LoopBackResourceProvider.setUrlBase('http://dev-hooptap.eu-gb.mybluemix.net/api');
    LoopBackResourceProvider.setUrlBase('http://52.209.100.27:8080/api');
    $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
}
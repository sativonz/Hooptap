export default (greetingServiceProvider)=> {

    greetingServiceProvider
        .setView('pepe',{
            name: 'hola',
            view: 'adios'
        })
        .setView('pepe.detail',{
            name: 'hola',
            view: 'adios'
        });

}
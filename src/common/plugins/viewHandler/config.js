//TODO ngDocs
// Default config of viewHandler
export default (viewHandlerServiceProvider)=> {

    viewHandlerServiceProvider
        .setView('pepe',{
            name: 'hola',
            view: 'adios'
        })
        .setView('pepe.detail',{
            name: 'hola',
            view: 'adios'
        });

}
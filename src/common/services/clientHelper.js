export default ()=>{
    
    return {
        //Sets default attributes for a widget
        setDefaultAttributes(defaults, targetScope, attrs){
            for(var optionKey in defaults) {
                if(attrs[optionKey]){
                    if(targetScope[optionKey] && typeof targetScope[optionKey] === 'object'){
                        targetScope[optionKey] = Object.assign(defaults[optionKey], targetScope[optionKey]);
                    }
                }else{
                    targetScope[optionKey] = defaults[optionKey];
                }}
        }
    }
}
export default ()=> {
    return {
        //Config object
        createWidget(widgetConfig){
            //TODO
            let node = document.createElement(widgetConfig.tag);
            if (widgetConfig.hasOwnProperty('attrs')) {
                console.log(widgetConfig);

                Object.keys(widgetConfig.attrs).forEach((attr)=> {
                    console.log(attr);
                    node.setAttribute(attr, widgetConfig.attrs[attr]);
                });
            }
            return node;
        }
    }
}
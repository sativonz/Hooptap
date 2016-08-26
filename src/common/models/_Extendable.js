import stampit  from 'stampit';

export default () => {
    return stampit()
        .init(({}) => {
        })
        .methods({
            extend (...factories) {
                return stampit.compose.apply(null, factories.concat([this._stamp]));
            }
        })
        .refs({})
        .props({

        });
};
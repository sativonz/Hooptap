import stampit  from 'stampit';

export default ($q, $translate) => {

    return stampit()
        .methods({
            //TODO save to put data
            save (filter) {
                if (typeof this.beforeSave == "function")
                    this.beforeSave();

                if (this.isNew()) {

                    // TODO set locale minimums when void
                    if (!this.hasOwnProperty('locale') || !Object.keys(this.locale).length) {
                        this.locale = {};
                        this.locale[$translate.use().split('-')[0]] = {
                            name: this.name || ""
                        };
                    }
                    return this.create();
                }

                let diffs = this.toJsonDiffs(filter);

                let preventVoidObjectKey = (object) => {
                    if (typeof object == 'object')
                        for (let key in object)
                            if (typeof object[key] == 'object' && !Object.keys(object[key]).length)
                                delete object[key];
                    return object;
                };

                if (diffs.hasOwnProperty('locale')) {
                    if (Object.keys(diffs.locale).length)
                        diffs.locale = preventVoidObjectKey(diffs.locale);
                }

                if (Object.keys(diffs).length == 0) {
                    return $q.resolve(this);
                }

                return this._factory.prototype$updateAttributes({id: this.id}, diffs).$promise
                    .then((data) => {
                        if (typeof this.afterSave == "function")
                            return this.afterSave(data);
                        return data;
                    })
                    .then((data) => {
                        this.initialize(data);
                        return this;
                    });

            }
        });
}
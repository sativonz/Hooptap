var isObject = require('./utils/isObject.js'),
    isString = require('./utils/isString.js'),
    isFunction = require('./utils/isFunction'),
    isDefined = require('./utils/isDefined.js'),
    forEach = require('async-foreach').forEach,
    extend = require('util')._extend;

export default function () {
    var message = "";
    var views = {};
    var queue = [];
    var currentView = {};
    var view = {};

    var viewBuilder = {

        // Derive parent view from a hierarchical name only if 'parent' is not explicitly defined.
        // view.children = [];
        // if (parent) parent.children.push(view);
        parent: function (view) {
            if (isDefined(view.parent) && view.parent) return findView(view.parent);
            // regex matches any valid composite view name
            // would match "contact.list" but not "contacts"
            var compositeName = /^(.+)\.[^.]+$/.exec(view.name);
            return compositeName ? findView(compositeName[1]) : null;
        },

        // inherit 'data' from parent and override by own values (if any)
        data: function (view) {
            if (view.parent && view.parent.data) {
                view.data = view.self.data = inherit(view.parent.data, view.data);
            }
            return view.data;
        },

        // Keep track of the closest ancestor view that has a URL (i.e. is navigable)
        navigable: function (view) {
            return view.url ? view : (view.parent ? view.parent.navigable : null);
        },

        // Own parameters for this view. view.url.params is already built at this point. Create and add non-url params
        ownParams: function (view) {
            var params = view.params;
            /*        var params = view.url && view.url.params || new $$UMFP.ParamSet();
             forEach(view.params || {}, function (config, id) {
             if (!params[id]) params[id] = new $$UMFP.Param(id, null, config, "config");
             });*/
            return params;
        },

        // Derive parameters for this view and ensure they're a super-set of parent's parameters
        params: function (view) {
            return view.parent && view.parent.params;
        },

        // If there is no explicit multi-view configuration, make one up so we don't have
        // to handle both cases in the view directive later. Note that having an explicit
        // 'views' property will mean the default unnamed view properties are ignored. This
        // is also a good time to resolve view names to absolute names, so everything is a
        // straight lookup at link time.
        views: function (view) {
            var views = {};
            forEach(isDefined(view.views) ? view.views : {'': view}, function (view, name) {
                if (name.indexOf('@') < 0) name += '@' + view.parent.name;
                views[name] = view;
            });
            return views;
        },

        // Keep a full path from the root down to this view as this is needed for view activation.
        path: function (view) {
            return view.parent ? view.parent.path.concat(view) : []; // exclude root from path
        },

        // Speed up $view.contains() as it's used a lot
        includes: function (view) {
            var includes = view.parent ? extend({}, view.parent.includes) : {};
            includes[view.name] = true;
            return includes;
        },

        $delegates: {}
    };

    function findView(viewOrName, base) {
        if (!viewOrName) return undefined;

        var isStr = isString(viewOrName),
            name = isStr ? viewOrName : viewOrName.name,
            path = isRelative(name);

        if (path) {
            if (!base) throw new Error("No reference point given for path '" + name + "'");
            base = findView(base);

            var rel = name.split("."), i = 0, pathLength = rel.length, current = base;

            for (; i < pathLength; i++) {
                if (rel[i] === "" && i === 0) {
                    current = base;
                    continue;
                }
                if (rel[i] === "^") {
                    if (!current.parent) throw new Error("Path '" + name + "' not valid for view '" + base.name + "'");
                    current = current.parent;
                    continue;
                }
                break;
            }
            rel = rel.slice(i).join(".");
            name = current.name + (current.name && rel ? "." : "") + rel;
        }
        var view = views[name];

        if (view && (isStr || (!isStr && (view === viewOrName || view.self === viewOrName)))) {
            return view;
        }
        return undefined;
    }

    function isRelative(viewName) {
        return viewName.indexOf(".") === 0 || viewName.indexOf("^") === 0;
    }


    function registerView(newView) {
        // Wrap a new object around the view so we can store our private details easily.
        view = newView;

        var name = view.name;
        if (!isString(name) || name.indexOf('@') >= 0) throw new Error("State must have a valid name");
        if (views.hasOwnProperty(name)) throw new Error("State '" + name + "' is already defined");

        // Get parent name
        var parentName = (name.indexOf('.') !== -1) ? name.substring(0, name.lastIndexOf('.'))
            : (isString(view.parent)) ? view.parent
            : (isObject(view.parent) && isString(view.parent.name)) ? view.parent.name
            : '';

        // If parent is not registered yet, add view to queue and register later
        if (parentName && !views[parentName]) {
            return queueState(parentName, view.self);
        }

        for (var key in viewBuilder) {
            if (isFunction(viewBuilder[key])) view[key] = viewBuilder[key](view, viewBuilder.$delegates[key]);
        }
        views[name] = view;

        // Register the view in the global view list and with $urlRouter if necessary.
        /*        if (!view[abstractKey] && view.url) {
         $urlRouterProvider.when(view.url, ['$match', '$viewParams', function ($match, $viewParams) {
         if ($view.$current.navigable != view || !equalForKeys($match, $viewParams)) {
         $view.transitionTo(view, $match, {inherit: true, location: false});
         }
         }]);
         }*/

        // Register any queued children
        flushQueuedChildren(name);

        return view;
    }


    function queueState(parentName, view) {
        if (!queue[parentName]) {
            queue[parentName] = [];
        }
        queue[parentName].push(view);
    }

    function flushQueuedChildren(parentName) {
        var queued = queue[parentName] || [];
        while (queued.length) {
            registerState(queued.shift());
        }
    }

    this.setMessage = function (msg) {
        message = msg;
    };
    this.setView = (name, definition)=> {

        if (isObject(name)) definition = name;
        else definition.name = name;
        registerView(definition);
        return this;
    };


    this.$get = ()=> {
        var service = {};
        
        service.getAllViews = views;
        //Set current view object from provider
        service.setCurrentView =
            (view)=> {
                currentView = findView(view);
            };
        
        //Returns Current view object
        service.getCurrentView = ()=> {
            return currentView;
        };

        return service;
    };
}
export default (function () {


/**
 * admits msg and params:
 * params as string: 'info'|'success'|'warning'|'danger'|'alert'|(a matching '/^http/g' string)
 * params as function;
 * params as object:
 * click: function object
 * href: a matching '/^http/g' string
 * timeStay: milliseconds
 * timeIn: milliseconds
 * timeOut: milliseonds
 * persist: boolean
 * closeButton: boolean
 * style: 'info'|'success'|'warning'|'danger'|'alert'
 * color: HEX format OR rgb format OR rgba format
 * background: HEX format OR rgb format OR rgba format
 */

var TOAST = function (title, desc, params) {
    if (!title) return false;
    if (!desc) desc='';

    if ($('c-notifications-popup #TOASTER').length == 0) $('<div id="TOASTER"></div>').appendTo($('c-notifications-popup'));

    var timeStay = 3000;
    var timeIn = 1000;
    var timeOut = 1000;
    var persist = false;
    var TOASTER = $('c-notifications-popup #TOASTER');
    //TODO revisar
    //Tamaño del popup en el template 1
    TOASTER.addClass('template-1-popup');
    //
    var toast = $('<div class="TOAST"><div class="toast-content"><span class="toast-title">'
        + title
        + '</span><span class="toast-desc">'
        + desc
        + '</span></div></div>')
        .click(function () {
            $(this).remove();
        }).css({opacity: 0});

    var setClick = function (action, text) {
        if (typeof action == 'function') {
            text = text || 'DO NOW!';
            toast.find('.toast-content')
                .append($('<span class="toast-content--span"style="">'
                        + text
                        +'</span>').click(function () {
                        toast.remove();
                        action();
                    })
                );
        };
    };
    var setCloseButton = function () {
        toast.append(
            $('<div class="toast-close">x</div>').click( function(){ toast.hide('slow'); })
        );
    };
    var setLink = function (href, text) {
        if (typeof href == 'string' && (href.match('^(http|\/)', 'g'))) {
            text = text || 'GO NOW!';
            toast.find('.toast-content')
                .append($('<a href="'
                        + href
                        + '" class="toast-content--href">'
                        + text
                        +'</a>').click(function () {
                        toast.remove();
                        action();
                    })
                );
        };
    };
    var setStyle = function (styleType) {
        switch (styleType) {
            case 'info':
                toast.css({color: '#006594', background: 'white'});
                break;
            // case 'info':
            //     toast.css({color: 'white', background: '#0086cb'});
            //     break;
            case 'success':
                toast.css({color: '#000', background: '#90fb61'});
                break;
            case 'warning':
                toast.css({color: 'white', background: 'orange'});
                break;
            case 'danger':
                toast.css({color: 'black', background: '#FFF307'});
                break;
            case 'alert':
                toast.css({color: 'white', background: 'red'}).addClass("animated wobble");
                break;
            default:
                toast.css({color: 'white', background: '#333'});
                break;
        }
    };

    setStyle('default');

    if (params) {
        if (typeof params == 'object') {
            if (params.timeIn) timeIn = params.timeIn;
            if (params.timeOut) timeOut = params.timeOut;
            if (params.timeStay) timeStay = params.timeStay;
            if (params.persist) persist = params.persist;
            if (params.style) setStyle(params.style);
            if (params.color) toast.css({color: params.color});
            if (params.background) toast.css({background: params.background});
            if (params.click && typeof params.click == 'function') setClick(params.click, params.buttonText);
            if (params.href && typeof params.href == 'string') setLink(params.href, params.linkText);
            if (params.closeButton) setCloseButton();
            if (params.img) {
                toast.find('.toast-content').prepend( $('<div class="toast-img"></div>') );
                toast.find('.toast-img').html( $('<div/>').append($('<img/>').attr('src', params.img)).html() );
            }
        } else if (typeof params == 'function') {
            setClick(params);
        } else if (typeof params == 'string') {
            switch (params) {
                case 'info':
                case 'success':
                case 'warning':
                case 'danger':
                case 'alert':
                    setStyle(params);
                    break;
                default:
                    if (params.match('^(http|\/)', 'g')) setLink(params);
                    break;
            }
        }
    }
    ;
    toast.appendTo(TOASTER);
    toast.animate({opacity: 1}, timeIn, function () {
        

        if (persist) return;

        var stay = setTimeout(function () {
            toast.animate({opacity: 0}, timeOut, function () {
                toast.remove();
                clearTimeout(stay);
            });
        }, timeStay);
    });
    if (params == undefined)
        return {
            title: title,
            desc: desc,
            toast: toast
        };
    else
        return {
            title: title,
            desc: desc,
            params: params,
            toast: toast
    };


};

window.TOAST = TOAST;

})()

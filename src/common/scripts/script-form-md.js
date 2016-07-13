/**
 * Created by fer-hooptap on 21/06/16.
 */
import $ from 'jquery';

export default (function () {

    $(document).ready(()=> {
        $('.ht-form__input').blur(function (e) {

            var $this = $(this);
            if ($this.val())
                $this.addClass('used');
            else
                $this.removeClass('used');
        });

        var $ripples = $('.ht-form__ripples');

        $ripples.on('click.Ripples', function (e) {

            var $this = $(this);
            var $offset = $this.parent().offset();
            var $circle = $this.find('.ht-form__ripplesCircle');

            var x = e.pageX - $offset.left;
            var y = e.pageY - $offset.top;

            $circle.css({
                top: y + 'px',
                left: x + 'px'
            });

            $this.addClass('is-active');

        });

        $ripples.on('animationend webkitAnimationEnd mozAnimationEnd oanimationend MSAnimationEnd', function (e) {
            $(this).removeClass('is-active');
        });
    });

})()
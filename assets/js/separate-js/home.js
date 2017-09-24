var _font = "300px Gotham Pro Bold";


var homeresize = function () {
    $('.section_title').height(docHeight);
    $('.menu_open_content').width(docWidth);
    var _classNext = '';
    $('.section').each(function () {
        var _top = $(this).offset().top;
        if (docScroll > _top - docHeight / 2) {
            var _e = $(this).find('.section_title_text').eq(0);
            _classNext = $(this).data('class');
            $('.other-2').css('top', _e.offset().top - docScroll).text(_e.text());
        }
    });
    $('body').removeClass().addClass(_classNext);
    $('.careers_text').css('column-gap', $('.wrapper').width() / 12);
    if (window.innerWidth > 1200) {
        requestAnimationFrame(cases_canvas);
    }
};


function cases_canvas() {

    if (docWidth < 1600) {
        _font = "200px Gotham Pro Bold";
    }

    $('.cases_image').each(function () {
        $('.cases_item').not('fade').show();
        $('.cases_item:gt(2)').not('fade').hide();

    });

    $('.cases_canvas').each(function () {
        $('.cases_item').not('fade').show();
        var _this = this;
        var img = $(this).prev();
        _this.width = img.width();
        _this.height = img.height();
        var ctx = _this.getContext('2d');
        var pic = new Image();
        pic.src = img.attr('src');
        pic.onload = function () {
            ctx.globalCompositeOperation = 'source-out';
            ctx.font = _font;
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText($(_this).data('text'), _this.width / 2, _this.height / 2);
            if (window.innerWidth > 1200) {
                $('.cases_item:gt(2)').not('fade').hide();
            }
        };
    });

}
var wi = 0;
$('.head_title_text').each(function () {
    wi += $(this).width() / $('.head_title_text').length;
    $('.head_title_span').width(wi);
});

function increased_number(num, value) {
    num.animate({
        cnt: value
    }, {
        duration: 4000,
        step: function() {
            num.text(String(parseInt(this.cnt)));
        }
    });
};


$(function () {
    $('#number').on('click', function () {
        $('#number').animate({
            cnt: 100001
        }, {
            duration: 4000,
            step: function() {
                num.text(String(parseInt(this.cnt)));
            }
        });
    });
});


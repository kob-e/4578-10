jQuery.noConflict()


    // IIFE
    (function ($) {
        $.fn.lister = function () {
            return this.each(function () {
                const id = $(this).attr('id');
                $(this).html(`<input class='inpt'><button class='btn'>Click (0)</button>
                            <ul class='lst'></ul>`);
                $(this).css('border', '1px solid black');
                $(this).css('padding', '10px');
                $(this).css('margin', '10px');
                let counter = 0;
                $('#' + id + ' .btn').click(function () {
                    const val = $('#' + id + ' .inpt').val();
                    $('#' + id + ' .lst').append('<li>' + val + '</li>');
                    $(this).text('Click (' + ++counter + ')')
                });
                // return this;
            })
        }


    }(jQuery));

jQuery('.myDiv').fadeIn().lister().fadeOut().fadeIn();

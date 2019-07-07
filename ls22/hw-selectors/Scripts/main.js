$(document).ready(function() { 
    /* 1 */
    $('#target1').css('background-color', 'red')


    /* 2 */
    $('#target2 span').text('new text')



    /* 3 */
    $( "#target3" ).clone().insertAfter( "#target3" );

    /* 4 */
    $('.target4:eq(1)').css('background-color', 'red')



    /* 5 */
    $('.target5 button').attr('disabled', true)

    /* 6 */
    $('.target6 input[type="checkbox"]').attr('checked', false)


    /* 7 */
    $("#child").appendTo("#parent2");

    /* 8 */
    $('#target8 input').attr('readonly', true)


    /* 9 */
    $('#target9 select option:eq(1)').attr('selected', 'selected')


    /* 10 */
    const width = $('#target10').width();
    $('#target10').css('width', width * 2 + 'px');
    const height = $('#target10').height();
    $('#target10').css('height', height * 2 + 'px');


    /* 11 */
    $('#target11').empty()

    /* 12 */
    // missing ex

    /* 13 */
    // alert($('#target13 .child').length)



    /* 14 */
    $("#target14").animate({
        width: '+=2px',
		height: '+=2px'
    }, 1000);


    /* 15 */
    $('#target15 option:odd').css('background-color', 'red')

});
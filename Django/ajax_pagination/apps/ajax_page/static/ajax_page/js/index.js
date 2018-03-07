$(document).ready(function(){
    var currentPage = 1;
    var csrf_token = $('#token input').val();

    $('p').click(function(e,d){
        var page = $(this);
        var val = page.html();
        var filter = $('#name-filter').val()
        var curr_page = val
        $.ajax({
            url: '/change_page',
            method: "POST",
            data: {
                filter : filter,
                curr_page: val,
                csrfmiddlewaretoken : csrf_token
            },
            success: function(serverResponse){
                console.log('success')
                console.log(serverResponse);
                $('.change-places').html(serverResponse);
            }
        })
    })

    $('form').submit(function(e){
        e.preventDefault();
    })

    $('#name-filter').focusout(function(){
        var val = $(this).val()
        console.log(val);
        $.ajax({
            url: '/filter_by_name',
            method: "POST",
            data: {
                filter : val,
                csrfmiddlewaretoken : csrf_token
            },
            success: function(serverResponse){
                console.log('success')
                console.log(serverResponse);
                $('.table').html(serverResponse);
            }
        })
    })

    $('#from-filter').focusout(function(){
        console.log('Pudding');
        var val = $(this).val()
        console.log(val);
        $.ajax({
            url: '/',
            method: "POST",
            data: {
                filter : val,
                csrfmiddlewaretoken : csrf_token
            },
            success: function(serverResponse){
                console.log('success')
            }
        })
    })

    $('#up-to-filter').focusout(function(){
        console.log('Pudding');
        var val = $(this).val()
        console.log(val);
        $.ajax({
            url: '/',
            method: "POST",
            data: {
                filter : val,
                csrfmiddlewaretoken : csrf_token
            },
            success: function(serverResponse){
                console.log('success')
            }
        })
    })
})



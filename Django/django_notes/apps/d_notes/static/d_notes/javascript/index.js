    $(document).ready(function(){

        $('form').submit(function(e){
            e.preventDefault()
            $.ajax({
                url: '/add_note',
                method: 'post',
                data: $(this).serialize(),
                success: function(serverResponse){
                $('.notes').html(serverResponse)
                console.log('Success');
                }
            })
        })
    })

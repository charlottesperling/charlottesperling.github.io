
    $( document ).ready(function() {
        $( "#test" ).click(function( event ) {
            alert( "The link will no longer take you to jquery.com" );
            event.preventDefault();
        });
    });


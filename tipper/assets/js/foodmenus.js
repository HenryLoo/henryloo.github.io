(function($) {

	$(function() {

        $( ".menu_select" ).change( function() {

            if( $( this ).val() )
            {
                //$( ".menu_area" ).load( "parts/menus/menu_"+$(this).val()+".html" );

                var menu = "";
                menu += '<table class="food_menus menu_1 alt">';
                menu += '<thead>';
                menu += '<tr>';
                menu += '<th>Name</th>';
                menu += '<th>Description</th>';
                menu += '<th>Price</th>';
                menu += '</tr>';
                menu += '</thead>';
                menu += '<tbody>';

                $.get( "parts/menus/menu_" + $( this ).val() + ".txt", function( data ) {
                    var lines = data.split( "\n" );

                    var i = 0;
                    $.each( lines, function( key, value ){

                        console.log( value );
                        if( i == 0 )
                        {
                            menu += '<tr>';
                        }

                        if( i != 3 )
                        {
                            menu += '<td>' + value + '</td>';
                        }

                        if( i == 2 )
                        {
                            menu += '</tr>';
                        }

                        if( i == 3 )
                        {
                            i = 0;
                        }
                    });

                });

                menu += '<tbody>';
                menu += '</table>';

                $( ".menu_area" ).html( menu );
            }
            else
                $( ".menu_area" ).empty();
        });
	});

})(jQuery);

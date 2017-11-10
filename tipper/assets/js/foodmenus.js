(function($) {

	$(function() {

        $.get( "parts/menus/menu_select.txt", function( data ) {
            var select = '<option value="">- Select a category -</option>';

            var lines = data.split( "\n" );
            var i = 1;
            $.each( lines, function( key, value ) {
                select += '<option value="' + i + '">' + value + '</option>';
                i++;
            });

            $( ".menu_select" ).html( select );
        });

        $( ".menu_select" ).change( function() {

            var menuNum = $( this ).val();
            if( menuNum )
            {
                $.get( "parts/menus/menu_" + menuNum + ".txt", function( data ) {

                    var menu = '<table class="food_menus menu_' + menuNum + ' alt">';
                    menu += '<thead>';
                    menu += '<tr>';
                    menu += '<th>Name</th>';
                    menu += '<th>Description</th>';
                    menu += '<th>Price</th>';
                    menu += '</tr>';
                    menu += '</thead>';
                    menu += '<tbody>';

                    var lines = data.split( "\n" );

                    var i = 0;
                    $.each( lines, function( key, value ) {

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
                        else
                        {
                            i++;
                        }

                    });

                    menu += '</tbody>';
                    menu += '</table>';

                    $( ".menu_area" ).html( menu );
                });

            }
            else
                $( ".menu_area" ).empty();
        });
	});

})(jQuery);

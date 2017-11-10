(function($) {

	$(function() {

        $( ".menu_select" ).change( function() {

            if( $( this ).val() )
            {
                //$( ".menu_area" ).load( "parts/menus/menu_"+$(this).val()+".html" );

                // var lines = ["black bean salsa & chips",
                //     "aka - black bean dip - black beans, red onion, sweet peppers, cilantro, sour cream, Tipper’s own seasoned tortilla chips",
                //     "8.00",
                //     "",
                //     "quesadilla",
                //     "Veggie option, or seasoned chicken, sweet peppers, feta and cheddar",
                //     "12.50",
                //     ""];


                $.get( "parts/menus/menu_" + $( this ).val() + ".txt", function( data ) {

                    var menu = '<table class="food_menus menu_' + $(this).val() + ' alt">';
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
                    var row = "";
                    $.each( lines, function( key, value ){

                        if( i == 0 )
                        {
                            row += '<tr>';
                        }

                        if( i != 3 )
                        {
                            row += '<td>' + value + '</td>';
                        }

                        if( i == 2 )
                        {
                            row += '</tr>';
                        }

                        if( i == 3 )
                        {
                            i = 0;
                            menu += row;
                            row = "";
                        }
                        else
                        {
                            i++;
                        }

                    });

                    menu += '</tbody>';
                    menu += '</table>';

                    console.log( menu );
                    $( ".menu_area" ).html( menu );
                });
                
            }
            else
                $( ".menu_area" ).empty();
        });
	});

})(jQuery);

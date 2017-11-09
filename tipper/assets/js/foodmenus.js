(function($) {

	$(function() {

        $( ".menu_select" ).change( function() {

            if( $(this).val() )
                $( ".menu_area" ).load( "parts/menus/menu_"+$(this).val()+".html" );
            else
                $( ".menu_area" ).empty();
        });
	});

})(jQuery);

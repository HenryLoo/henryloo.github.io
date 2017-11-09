(function($) {

	$(function() {

        $( ".menu_select" ).change( function() {
            $( ".menu_area" ).load( "menus/menu_"+$(this).val()+".html" );
        });
	});

})(jQuery);

$(function() {
    
    $('#fb-icon').hover(
        function() {
            $( this ).addClass('animated tada')
        },
        function() {
            $( this ).removeClass('animated tada')
        });
     
        $('.brands__link').hover(
            function() {
                $( this ).addClass('animated pulse')
            },
            function() {
                $( this ).removeClass('animated pulse')
        });
});

$( document ).ready(function() {
    $('.copy').click(function() {
        foo = $(this).next().prop('outerHTML');
        navigator.clipboard.writeText(foo);

        $(this).text("Copied!")
        $this = $(this)
        setTimeout(function(){
            $this.text("Copy Code")
        }, 1200);
    })

});


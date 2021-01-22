$( document ).ready(function() {
    $('.copy').click(function() {
        foo = $(this).next().prop('outerHTML');
        navigator.clipboard.writeText(foo);
    })
});


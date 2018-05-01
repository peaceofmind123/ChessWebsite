(function() {
    "use strict";
    var $pickedReason = $('#pickedReason')
    $('#pickDropdown li a').click(function(){
        //console.log("Clicked")
        var reason = $(this).text()
        //console.log(reason)
        $pickedReason.text(reason)
        $pickedReason.addClass("active")
    })

    var $btn = $('#dropdownBtn')
    $('#dropdownMenu li a').click(function(){
        var text = $(this).text()
        $btn.text(text+ " ")
        $btn.append("<span class='caret'></span>")

        $btn.addClass("active")
    })
    $('#contactForm input[type=submit]').tooltip({
        delay:{
            show:50,
            hide:500
        }
    })
})();
// step 1
$.fn.pluginName = function() {

}

// step 2
$.fn.pluginName = function() {

    return this;
}

// step 3
(function($) {
    $.fn.pluginName = function() {

        return this;
    }
}(jQuery));

// step 4 - for arrays
(function($) {
     $.fn.pluginName = function() {
        return this.each(function() {
            // some work
            
            // no need to return this, each returns the whole array of the selected elements
        })
        
    }
}(jQuery));
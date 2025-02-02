"use-strict";

$(document).on('change', ':file', function() {
    
    var input = $(this),
        numFiles = input.get(0).files ? input.get(0).files.length : 1,
        label = input.val().replace(/\\/g, '/').replace(/.*\//, '');

    input.trigger('fileselect', [numFiles, label]);
});


$(document).ready( function() {
    $(':file').on('fileselect', function(event, numFiles, label) {

        $('#uploadSpan').html(`Successfully uploaded ${label}`)
    });
});


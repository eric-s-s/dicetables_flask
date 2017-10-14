
$(document).ready(function() {
    $('a#calculate').click(
        function() {
            console.log($("#aval").val());
            $.getJSON(
                $SCRIPT_ROOT + '/_add_numbers',
                {
                    a: $('#aval').val(),
                    b: $('#bval').val()
                },
                function(data) {
                    console.log(data);
                    shower(data);
                    $("#result").text(data.result);
                }
                );
            return false;
        }
        );
});

function shower (data) {
    var dataBtn = $("#getData");
    dataBtn.off();
    dataBtn.click(function () {
        var dataStr = JSON.stringify(data);
        console.log('clicked: ' + dataStr);
        $("#putData").text(dataStr);
    });

}
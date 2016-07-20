function upperCase() {

    var inputString = document.getElementById("inputString").value;
    var url = "http://localhost:8080/upperCase/" + inputString;

    jQuery.ajax({
        type: "GET",
        url: url,
        dataType: "text",
        success: function(data) {
            upperCaseSuccess(data);
        },
        error: function(jqXHR,textStatus,errorThrown){
            upperCaseFailure(jqXHR,textStatus,errorThrown);

            $('#result').html('<p>status code: '+jqXHR.status+'</p><p>errorThrown: ' + errorThrown + '</p><p>jqXHR.responseText:</p><div>'+jqXHR.responseText + '</div>');
            console.log('jqXHR:');
            console.log(jqXHR);
            console.log('textStatus:');
            console.log(textStatus);
            console.log('errorThrown:');
            console.log(errorThrown);
        }

    });
}

function upperCaseSuccess(data) {
    document.getElementById("outputString").innerHTML = data.toString();
}

function upperCaseFailure(jqXHR,textStatus,errorThrown) {
    var errorMessage = "An error was encountered";
    document.getElementById("outputString").innerHTML = errorMessage;
}

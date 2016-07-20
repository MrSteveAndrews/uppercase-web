function upperCase(upperCaseServiceUrl) {

    var inputString = document.getElementById("inputString").value;
    var url = upperCaseServiceUrl + '/' + inputString;

    jQuery.ajax({
        type: "GET",
        url: url,
        dataType: "text",
        success: function(data) {
            upperCaseSuccess(data);
        },
        error: function(jqXHR,textStatus,errorThrown){
            upperCaseFailure(jqXHR,textStatus,errorThrown);
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

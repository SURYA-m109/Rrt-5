// URL se parameter nikalne ke liye function
function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    var results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
}

// Drive ID ko process karna
window.onload = function() {
    var idParam = getUrlParameter('id');
    if (idParam) {
        console.log("Drive ID found and loading...");
    } else {
        console.log("No ID provided. Playing default sample.");
    }
}

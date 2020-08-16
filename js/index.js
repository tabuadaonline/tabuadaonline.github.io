$(function () {
    //pp
    checkCookie();

    $('.alert').alert();

    $('#pp-alert').on('closed.bs.alert', function () {
        // do something…
        setCookie("cookieconsentstatus", 'dismiss' , 365);
    });
});


function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function checkCookie() {
    var status = getCookie("cookieconsentstatus");
    if (status != "") {
        $('.alert').addClass('d-none');
    } else {
        $('.alert').removeClass('d-none').addClass('d-block');
    }
}
$(document).ready(function (){
    $.getJSON('/SBMHS/php/ping.php', function (data){
        if (data.Status == 'Online'){
            $('#statusalert').html('<div class="alert alert-success">Online</div>');
            $('#control').removeClass("disabled");
        }
        else if (data.Status == "Offline"){
            $('#statusalert').html('<div class="alert alert-danger">Offline</div>');
            $('#control').addClass("disabled");
        }
    });
    setInterval(function (){
        $.getJSON('/SBMHS/php/ping.php', function (data){
            if (data.Status == 'Online'){
                $('#statusalert').html('<div class="alert alert-success">Online</div>');
                $('#control').removeClass("disabled");
            }
            else if (data.Status == "Offline"){
                $('#statusalert').html('<div class="alert alert-danger">Offline</div>');
                $('#control').addClass("disabled");
            }
        });
    }, 10000);
});
function analysedata(){
    location.href = "dataanalysis.html";
}
function graph(){
    location.href = "control.html"
}

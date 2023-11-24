// Функций которые открывают и прячут div с id wrapper form за 1.2 секунды для плавности
// работают при нажатий на кнопки с id submit-button, reset-button

$(document).ready(function(){
    $("#submit-button").click(function(){
        $("#wrapper").toggle(1200);
    });
});


$(document).ready(function(){
    $("#reset-button").click(function(){
        $("#wrapper").toggle(1200);
    });
});
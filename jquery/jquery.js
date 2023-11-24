// Функций которые открывают и закрывают форму с id form за 1.2 секунды для плавности
// работают при нажатий на кнопки с id find-button, reset-button

$(document).ready(function(){
    $("#find-button").click(function(){
        $("#form").toggle(1200);
        $("#wrapper").css({
            "background-color": "teal",
        });
    });
});

$(document).ready(function(){
    $("#reset-button").click(function(){
        $("#form").toggle(1200);
        $("#wrapper").css({
            "background-color": "teal",
        });
    });
});

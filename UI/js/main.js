async function connect_pressed() {
    /*
          Check PlayStation FTP connection
      */
    let status = document.getElementById("wb_uid1");
    let ip = document.getElementById("ip_field").value;
    let port = document.getElementById("port_field").value;

    status.innerHTML = "CONNECTING...";
    let respond = await eel.init_connection(ip, port)();
    if (respond[0] == false) {
        alert(respond[1]);
        status.innerHTML = "FAILED TO CONNECT";
        status.style.color = "red";
        status.style.fontSize = "15px";
    } else {
        status.innerHTML = "CONNECTED";
        status.style.color = "green";
        status.style.fontSize = "15px";
    }
}

$(document).ready(function() {
    $("a[href*='#trophies_layout_grid']").click(function(event) {
        event.preventDefault();
        $("html, body")
            .stop()
            .animate({
                    scrollTop: $("#wb_trophies_layout_grid").offset().top - 88,
                },
                600,
                "easeOutCirc"
            );
    });
    $("#ip_field").validate({
        required: true,
        bootstrap: true,
        type: "custom",
        param: /\b(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\b/,
        length_min: "4",
        color_text: "#000000",
        color_hint: "#00FF00",
        color_error: "#FF0000",
        color_border: "#808080",
        nohint: false,
        font_family: "Arial",
        font_size: "13px",
        position: "topleft",
        offsetx: 0,
        offsety: 0,
        effect: "none",
        error_text: "Invalid IP",
    });
    $("#ip_field").inputmask({
        alias: "ip",
    });
    $("#port_field").validate({
        required: true,
        bootstrap: true,
        type: "number",
        expr_min: ">=",
        expr_max: "",
        value_min: "0",
        value_max: "",
        length_min: "1",
        length_max: "8",
        color_text: "#000000",
        color_hint: "#00FF00",
        color_error: "#FF0000",
        color_border: "#808080",
        nohint: false,
        font_family: "Arial",
        font_size: "13px",
        position: "topleft",
        offsetx: 0,
        offsety: 0,
        effect: "none",
        error_text: "Invalid Port",
    });
    $("#level_percentage").progressbar({
        value: 0,
        change: function() {
            $("#level_percentage-label").text($(this).progressbar("value") + "%");
        },
    });
    $("#save_btn").button({
        icon: "ui-primary",
        iconPosition: "beginning",
    });
    $("#fetch_btn").button();
    $("#connect_btn").button();
});
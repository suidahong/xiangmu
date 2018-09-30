// function handleClick(){
//     var r_left=document.getElementsByClassName("l_left")[0]||document.getElementsByClassName("r_left")[0];
//     var appear=document.getElementsByClassName("appear1")[0]||document.getElementsByClassName("appear2")[0];
//     if(r_left.className.indexOf('l_left')>=0){
//         r_left.className='r_left'
//
//
//     }else{
//         r_left.className='l_left';
//         appear.className='appear2'
//     }
//     // r_left.style.width=parseInt(r_left.style.width)+125+'px';
// }
$(document).ready(function(){
    $("#right").hide();
    $(".appear1").hide();
    $("body").delegate(".level1", "click", function(obj){
        var mindValue = $(this).data("mind");
        if ($(".mind"+mindValue).is(":hidden")) {
            $(".level2").hide(0);
        }
        $(".mind"+mindValue).slideToggle(0);
    });

    // $("#center").dblclick(function(){
    //     $(".l_left").css("width", "165px");
    //     $(".appear1").show();
    //     $(".col-xs-11").css("margin-left", "20px");
    //     $("#center").css("left", "165px");
    //     $("#right").css("padding-left","200px")
    //     $(this).find("img").slideToggle(0);
    // });
    $("#center").click(function(){
        $(".appear1").hide();
        $(".l_left").css("width", "40px");
        $(".level2").hide();
        $(".col-xs-11").css("margin-left", "-5px");
        $(this).find(".img-rounded").slideToggle(0);
        $("#center").css("left", "42px");
        $("#right").css("padding-left","80px")
    });

    $(".level1").mouseenter(function(){
        $(this).css("backgroundColor", "#le556e");
        $(this).css("color", "#f0f0f0");
        $(this).find(".img-rounded").slideToggle(0);
    });
    $(".level1").click(function(){
        $(".col-xs-11").css("margin-left", "20px");
        $(".l_left").css("width", "165px");
        $(".appear1").show();
        $("#center").css("left", "167px");
        $("#center").find(".img-rounded").slideToggle(1);
        $("#right").css("padding-left","200px")
        $(".img_add").show();
    });
    // $(".level1").dblclick(function(){
    //     $(".appear1").hide();
    //     $(".l_left").css("width", "40px");
    //     $(".level2").hide();
    //     $(".col-xs-11").css("margin-left", "-5px");
    //     $("#center").css("left", "40px");
    //     $("#right").css("padding-left","80px")
    // });
    $(".level1").mouseleave(function(){
        $(this).css("backgroundColor", "#CFD5DA");
        $(this).css("color", "black");
        $(this).find(".img-rounded").slideToggle(0);
        $(this).css("borderColor", "#dedede");
    });

    $(".level2").mouseenter(function(){
        $(this).css("backgroundColor", "#23566E");
        $(this).css("color", "#f0f0f0");
        $(this).find(".img-rounded2").slideToggle(0);
    });
    $(".level2").mouseleave(function(){
        $(this).css("backgroundColor", "#E2E6E9");
        $(this).css("color", "#333");
        $(this).find(".img-rounded2").slideToggle(0);
    })

    $(".ova").click(function () {
        $("#right").show();
        $("#right").css("padding-left","200px")
    });

    $("input").mouseenter(function(){
        $(this).css("backgroundColor", "#23566E");
    });

    $('.img-rounded2').click(function () {
        $(this).parents('.mind2').remove();
    })


    var count = '1';
    $('.img_add').on('click', function () {
        var newli = $('<div class="hidden_div"><img src="/img/menu-2nd-selected.png" class="hidden_img img-rounded2"/><input type="text"/> </div>')
        newli.find('.img-rounded2').eq(0).html(++count);
        newli.appendTo('.help');

        $('.hidden_img').click(function () {
            $(this).parents('.hidden_div').remove();
            // console.log("hahahah")
        })
    });
    $.ajax({
        type: "GET",
        url: "http:/10.4.247.90:8083//portal/ws/menu/selectMenu",
        data: {},
        dataType: "json",
        success: function(data){
            console.log(data);
        },
        error:function(){
            alert(2);
        }
    });

});




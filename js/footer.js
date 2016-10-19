
$(function () {
    //获取所有的foot-icon-img下的li中的i
    var icons = $(".foot-icon-img li i");
    for(var i = 0 ; i<icons.length;i++){
        //获取每个i标签
        var icon = icons[i];
//                console.log(index);
        if(i>=1){
            //设置backgroundPosition的值
            var sum = -60*i+"px";
            //设置每个i标签样式
            $(icon).css("background","url('images/icon_footer.png') no-repeat "+sum+" 0 ");
        }
        //鼠标进入所有的foot-icon-img下的li中的i标签改变样式
        $(icon).mouseover(function () {
            //设置i标签坐标位置
            $(this).css("backgroundPosition-y","-60px");
        }).mouseout(function () {//鼠标离开
            //设置i标签变回原来的样式
            $(".foot-icon-img li i").css("backgroundPosition-y","0px");
        });
    }
    $(".foot-icon-dl>dl:eq(0)").css("borderLeft","none");

    $(".image-dv div").mouseenter(function () {
        $(this).css({"opacity":"0.1","transform":"scale(1.1)",}).siblings().css();
    }).mouseleave(function () {
        $(this).css("opacity","0");
    });
});
document.getElementsByClassName()

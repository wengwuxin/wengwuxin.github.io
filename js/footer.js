
$(function () {
    //��ȡ���е�foot-icon-img�µ�li�е�i
    var icons = $(".foot-icon-img li i");
    for(var i = 0 ; i<icons.length;i++){
        //��ȡÿ��i��ǩ
        var icon = icons[i];
//                console.log(index);
        if(i>=1){
            //����backgroundPosition��ֵ
            var sum = -60*i+"px";
            //����ÿ��i��ǩ��ʽ
            $(icon).css("background","url('images/icon_footer.png') no-repeat "+sum+" 0 ");
        }
        //���������е�foot-icon-img�µ�li�е�i��ǩ�ı���ʽ
        $(icon).mouseover(function () {
            //����i��ǩ����λ��
            $(this).css("backgroundPosition-y","-60px");
        }).mouseout(function () {//����뿪
            //����i��ǩ���ԭ������ʽ
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

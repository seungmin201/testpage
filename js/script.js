$(".btn>li").click(function(){
    $(this).addClass('active')
    $(this).siblings().removeClass('active')
    let i=$(this).attr('data-filter') //data-filer 속성 호출
    $(".gallery").isotope({ filter: i })
})

setTimeout(function(){$(".gallery").isotope('layout')},100)

const grid=new Isotope(".gallery",{

    itemSelector:".box"
});
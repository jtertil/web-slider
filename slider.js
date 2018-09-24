var s_num = 0

function change()
{
    s_num++; if(s_num>5) s_num=1

    var slide ="<img src=\"slides/s"+ s_num +".png\" />"

    document.getElementById("slider").innerHTML = slide
    setTimeout("change()",1000)
}

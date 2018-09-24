var s_num = 0;
var s_num_r = Math.floor(Math.random()*5)+1;

function change()
{
    s_num++; if(s_num>5) s_num=1

    var slide ="<img src=\"slides/s"+ s_num +".png\" />"

    document.getElementById("slider").innerHTML = slide
    setTimeout("change()",1000)
}



function change_r()
{

    s_num_r++; if(s_num_r>5) s_num_r=1

    var slide ="<img src=\"slides/s"+ s_num_r +".png\" />"

    document.getElementById("slider").innerHTML = slide
    setTimeout("change_r()",1000)
}

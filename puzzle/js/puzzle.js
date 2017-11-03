/**
 * Created by 13687 on 5/26/2017.
 */
window.onload=function(){
    reset();
}
var d=new Array(10);
var d_direct=new Array(
    [0],
    [2,4],
    [1,3,5],
    [2,6],
    [1,5,7],
    [2,4,6,8],
    [3,5,9],
    [4,8],
    [5,7,9],
    [6,8]
);
var d_posXY=new Array(
    [0],
    [0,0],
    [150,0],
    [300,0],
    [0,150],
    [150,150],
    [300,150],
    [0,300],
    [150,300],
    [300,300]
);
d[1]=1;d[2]=2;d[3]=3;d[4]=4;d[5]=5;d[6]=6;d[7]=7;d[8]=8;d[9]=0;
function move(id)
{
    for(var i=1;i<10;i++)
    {
        if(d[i]==id)
        break;
    }
    var target=0;
    target=whereGo(i);
   if( target!=0)
   {
       d[i]=0;
       d[target]=id;
       document.getElementById("d"+id).style.left=d_posXY[target][0]+"px";
       document.getElementById("d"+id).style.top=d_posXY[target][1]+"px";
   }
    var win_flag=true;
   for(var k=1;k<9;k++)
   {
       if(d[k]!=k)
       {
           win_flag=false;
           break;
       }
   }
    if(win_flag==true)
    {

        document.getElementById("container").innerHTML='<img src="img/timg.jpg" height="450" width="450" />';
        alert("恭喜您闯关成功！");
    }
}
function whereGo(i)
{
    var flag=false;
    for(var j=0;j< d_direct[i].length;j++)
    {
        if(d[d_direct[i][j]]==0)
        {
            flag=true;
            break;
        }

    }
    if(flag==true)
    {
        return d_direct[i][j];
    }
    else
    {return 0;}
}
  function reset()
  {
    for(var i=9;i>0;i--)
    {
        var to=parseInt(Math.random()*(i-1)+1);
        if(d[i]!=0){
            document.getElementById("d"+d[i]).style.left=d_posXY[to][0]+"px";
            document.getElementById("d"+d[i]).style.top=d_posXY[to][1]+"px";
        }
        if(d[to]!=0){
            document.getElementById("d"+d[to]).style.left=d_posXY[i][0]+"px";
            document.getElementById("d"+d[to]).style.top=d_posXY[i][1]+"px";
        }
        var tem=d[to];
        d[to]=d[i];
        d[i]=tem;
    }
  }

$(document).ready(function ()
{
    $("#reset").click()
    {
        reset();
    }

});
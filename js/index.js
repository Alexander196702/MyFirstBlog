//生成验证码
function createCheckSum(){
  var c=  document.getElementById('check_sum')
  var ctx=c.getContext('2d')
  ctx.fillStyle="#FF0000";
  var r=getRand()

ctx.fillText(r,5,13)
}
createCheckSum()
function getRand(){
    var r=0;
    for(var i=0;i<6;i++){
        var rand=Math.round(Math.random()*10)
        r+=rand*Math.pow(10,i)
    }
    return r
}
//验证信息
function verify(){
    var login=document.getElementById('go')
    var user=document.getElementById('user')
    var pass=document.getElementById('pass')
    var check_sum=document.getElementById('check_sum')
    login.onclick()=function(){
        if(user.value==""||pass.value==""||check_sum.value==""){
            return
        }
    }
}

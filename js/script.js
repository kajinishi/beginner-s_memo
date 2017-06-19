//描写
function photo(kind, str, memo) { //しゃべる描写の関数
  var pkind = new Array("img/teacher.png", "img/student.png"); //偶数teacher,奇数studentにしたい
  var role = new Array("教師","生徒");
  var rcolor = new Array("background-color:rgb(99, 181, 189);","background-color:rgb(231, 90, 90);");
  var num=pkind.length;

  if(memo==null){
    document.write("<table>");
    document.write("<tr height=auto>");
    document.write('<td><font><img src=' + pkind[kind] + ' alt='+role[Number(kind%2)]+' width="40" height="40"></font></td>');
    document.write('<td><div class="balloonl" ><span style="color:black;">'+ str +'<br></span></div></td>');
    document.write('<div style="clear:both;"></div>');
    document.write("</tr>");
    document.write("</table>");
  }else if(memo=="right" || memo=="r"){
    document.write("<table align='right'>");
    document.write("<tr height=auto style='float:right;'>");
    document.write('<td><p class="balloonr" ><span style="color:black;">'+ str +'<br></span></p></td>');
    document.write('<td><font><img src=' + pkind[kind] + ' alt='+role[Number(kind%2)]+' width="40" height="40"></font></td>');
    document.write('<div style="clear:both;"></div>');
    document.write("</tr>");
    document.write("</table>");
    document.write("<br clear='all'>");
  }
}

//幅変化
function fullwidth(target){
  var fullsize=$("#mainWrap").width();
  console.log(fullsize+"px");
  $(target).css("width", fullsize-50 + "px");
}

//判定
function OSjudge(){//OSの判定
  var ua = navigator.userAgent;
  if (navigator.platform.indexOf("Win") != -1)return "Windows";
  else if(ua.match(/Mac|PPC/))return 'Mac';
  else if (ua.match(/Linux/)) return 'Linux';
  else return 'unknown';
}
function browserjudge(){//使用中のブラウザ判定
    var userAgent = window.navigator.userAgent.toLowerCase();
    if (userAgent.indexOf('opera') != -1) {
    return 'opera';
  } else if (userAgent.indexOf('msie') != -1) {//Microsoft IE
    return 'ie';
    } else if (userAgent.indexOf('chrome') != -1) {
    return 'chrome';
    } else if (userAgent.indexOf('safari') != -1) {
    return 'safari';
    } else if(userAgent.indexOf('Firefox') != -1){
        return 'firefox';
    } else if (userAgent.indexOf('gecko') != -1) {
    return 'gecko';
    } else return false;
}
setInterval ( 'clocknow()',1000 );
 
function clocknow(){
    weeks = new Array("Sun","Mon","Thu","Wed","Thr","Fri","Sat") ;
    now = new Date() ;
    y = now.getFullYear() ;
    mo = now.getMonth() + 1 ;
    d = now.getDate() ;
    w = weeks[now.getDay()] ;
    h = now.getHours();
    mi = now.getMinutes();
    s = now.getSeconds();
 
    // 月、日、時、分、秒が一桁のとき、頭に0を付与
    if ( mo < 10 ) { mo = "0" + mo ; }
    if ( d < 10 ) { d = "0" + d ; }
    if ( h < 10 ) { h = "0" + h ; }
    if ( mi < 10 ) { mi = "0" + mi ; }
    if ( s < 10 ) { s = "0" + s ; }
 
    // HTML内に日付・日時を挿入
    document.getElementById("clock").innerHTML = "<span id="+ "date" +">" + y + "/" + mo + "/" + d + "/(" + w + ")</span><span id=" + "time" + ">" + h + ":" + mi + ":" + s;
}
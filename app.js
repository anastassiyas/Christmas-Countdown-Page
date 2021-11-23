// function cdtime(container, targetdate){
//     if (!document.getElementById || !document.getElementById(container)) return
//     this.container=document.getElementById(container)
//     this.currentTime=new Date()
//     this.targetdate=new Date(targetdate)
//     this.timesup=false
//     this.updateTime()
//     }
//     cdtime.prototype.updateTime=function(){
//     var thisobj=this
//     this.currentTime.setSeconds(this.currentTime.getSeconds()+1)
//     setTimeout(function(){thisobj.updateTime()}, 1000)
//     }
//     cdtime.prototype.displaycountdown=function(baseunit, functionref){
//     this.baseunit=baseunit
//     this.formatresults=functionref
//     this.showresults()
//     }
//     cdtime.prototype.showresults=function(){
//     var thisobj=this
//     var timediff=(this.targetdate-this.currentTime)/1000
//     if (timediff<0){
//     this.timesup=true
//     this.container.innerHTML=this.formatresults()
//     return
//     }
//     var oneMinute=60
//     var oneHour=60*60
//     var oneDay=60*60*24
//     var dayfield=Math.floor(timediff/oneDay)
//     var hourfield=Math.floor((timediff-dayfield*oneDay)/oneHour)
//     var minutefield=Math.floor((timediff-dayfield*oneDay-hourfield*oneHour)/oneMinute)
//     var secondfield=Math.floor((timediff-dayfield*oneDay-hourfield*oneHour-minutefield*oneMinute))
//     if (this.baseunit=="hours"){
//     hourfield=dayfield*24+hourfield
//     dayfield="n/a"
//     }
//     else if (this.baseunit=="minutes"){
//     minutefield=dayfield*24*60+hourfield*60+minutefield
//     dayfield=hourfield="n/a"
//     }
//     else if (this.baseunit=="seconds"){
//     var secondfield=timediff
//     dayfield=hourfield=minutefield="n/a"
//     }
//     this.container.innerHTML=this.formatresults(dayfield, hourfield, minutefield, secondfield)
//     setTimeout(function(){thisobj.showresults()}, 1000)
//     }
//     function formatresults2(){
//     if (this.timesup==false){
//     var displaystring="<span class='nonewyear'>"+arguments[0]+" Days "+arguments[1]+" Hours <br>"+arguments[2]+" Minutes "+arguments[3]+" Seconds "
//     }
//     else{
//     var displaystring="'newyear1' Merry christmas!!!"
//     //alert("Merry Christmas!!!")
//     }
//     return displaystring
//     }

//     var currentyear=new Date().getFullYear()
//  var thischristmasyear=(new Date().getMonth()==0 && new Date().getDate()==1)? currentyear : currentyear 
//  var christmas=new cdtime("countdowncontainer2", "December 25, "+thischristmasyear+" 0:0:00")
//  christmas.displaycountdown("days", formatresults2)

function CountdownTimer(elm,tl,mes){
    this.initialize.apply(this,arguments);
   }
   CountdownTimer.prototype={
    initialize:function(elm,tl,mes) {
     this.elem = document.getElementById(elm);
     this.tl = tl;
     this.mes = mes;
    },countDown:function(){
     var timer='';
     var today=new Date();
     var day=Math.floor((this.tl-today)/(24*60*60*1000));
     var hour=Math.floor(((this.tl-today)%(24*60*60*1000))/(60*60*1000));
     var min=Math.floor(((this.tl-today)%(24*60*60*1000))/(60*1000))%60;
     var sec=Math.floor(((this.tl-today)%(24*60*60*1000))/1000)%60%60;
     var me=this;
   
     if( ( this.tl - today ) > 0 ){
      timer += '<span class="number-wrapper"><div class="line"></div><div class="caption">DAYS</div><span class="number day">'+day+'</span></span>';
      timer += '<span class="number-wrapper"><div class="line"></div><div class="caption">HOURS</div><span class="number hour">'+hour+'</span></span>';
      timer += '<span class="number-wrapper"><div class="line"></div><div class="caption">MINS</div><span class="number min">'+this.addZero(min)+'</span></span><span class="number-wrapper"><div class="line"></div><div class="caption">SECS</div><span class="number sec">'+this.addZero(sec)+'</span></span>';
      this.elem.innerHTML = timer;
      tid = setTimeout( function(){me.countDown();},10 );
     }else{
      this.elem.innerHTML = this.mes;
      return;
     }
    },addZero:function(num){ return ('0'+num).slice(-2); }
   }
   function CDP(){
   
    // Set countdown limit
    var tl = new Date('2021/12/25 00:00:00');
   
    // You can add time's up message here
    var timer = new CountdownTimer('CDP',tl,'<span class="number-wrapper"><div class="line"></div><span class="number end">Time is up!</span></span>');
    timer.countDown();
   }
   window.onload=function(){
    CDP();
   }
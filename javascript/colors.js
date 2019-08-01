var setcolor = {
  span:function(color){
    // var i = 0;
    // var slist = document.querySelectorAll('span');
    // while(i < slist.length) {
    //   slist[i].style.background = color;
    //   i++;
    // }
    $('span').css('background', color);
  },
  colb:function(color){
    // var i = 0;
    // var clist = document.querySelectorAll('.colb');
    // while(i < clist.length) {
    //   clist[i].style.color = color;
    //   i++;
    // }
    $('.colb').css('color', color);
  }
}

var body = {
  setcolor:function(color) {
    // document.querySelector('body').style.backgroundColor = color;
    $('body').css('backgroundColor', color);
  },
  setbackgroundcolor:function(color) {
    // document.querySelector('body').style.color = color;
    $('body').css('color', color);
  }
}

function nightdayHandler(self){
  if(self.value == 'night') {
    body.setcolor('black');
    body.setbackgroundcolor('white');
    self.value = 'day';
    setcolor.span('black');
    setcolor.colb('yellow');
  }
  else {
    body.setcolor('white');
    body.setbackgroundcolor('black');
    self.value = 'night';
    setcolor.span('powderblue');
    setcolor.colb('blue');
  }
}

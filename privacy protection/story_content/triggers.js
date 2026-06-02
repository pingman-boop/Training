function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5vYqb2VkWWn":
        Script1();
        break;
      case "6dH7LyypvWc":
        Script2();
        break;
      case "6eAKfWUwryk":
        Script3();
        break;
      case "6JHAYCfd7y1":
        Script4();
        break;
      case "5oFyutEgn1w":
        Script5();
        break;
      case "6aON62xKorh":
        Script6();
        break;
      case "6QMbL10RQAX":
        Script7();
        break;
      case "5q5wVhBwazy":
        Script8();
        break;
      case "6LCBzofB0i7":
        Script9();
        break;
      case "64jOIBSQU3Q":
        Script10();
        break;
      case "5rIv2qldBSv":
        Script11();
        break;
      case "5n64BopPXbe":
        Script12();
        break;
      case "64ibhBJixXP":
        Script13();
        break;
      case "5lWlNVZQ5jI":
        Script14();
        break;
      case "6LTGLoNR7NC":
        Script15();
        break;
      case "60zX6sZ2CQN":
        Script16();
        break;
      case "6bt84t1Y4oP":
        Script17();
        break;
      case "5keAYyyansw":
        Script18();
        break;
      case "6GFVQWr2Mpe":
        Script19();
        break;
      case "6T3K2MIgD4z":
        Script20();
        break;
      case "5WqDxI8qxGL":
        Script21();
        break;
      case "5e6Ag9A3075":
        Script22();
        break;
      case "5chjH7q3KGJ":
        Script23();
        break;
      case "5h6LbvovJQg":
        Script24();
        break;
      case "6H4Tv29c0pa":
        Script25();
        break;
      case "6Bac3SnDZFD":
        Script26();
        break;
      case "5gDAEtnTtSV":
        Script27();
        break;
      case "62LELYeFueP":
        Script28();
        break;
      case "6EtZRlN6uyT":
        Script29();
        break;
      case "6XpcNvjvleq":
        Script30();
        break;
      case "5hF6eX3K2S1":
        Script31();
        break;
      case "5gSRD9KJ7ys":
        Script32();
        break;
      case "6KjjYI5YCJQ":
        Script33();
        break;
      case "5dZKenhGexY":
        Script34();
        break;
      case "6j9T3qvZ7dP":
        Script35();
        break;
      case "657ONYPgCIy":
        Script36();
        break;
      case "6XtW4stMLKk":
        Script37();
        break;
      case "5bErqN5cZRe":
        Script38();
        break;
      case "6AzasTSOJGw":
        Script39();
        break;
      case "6025zfSCueq":
        Script40();
        break;
      case "6khVux90PFd":
        Script41();
        break;
      case "5vIeOG1ka9F":
        Script42();
        break;
      case "5saAVheNjut":
        Script43();
        break;
      case "6JotwpLNWQk":
        Script44();
        break;
      case "6XQFTcBAeg6":
        Script45();
        break;
      case "6ljdJuPgDu0":
        Script46();
        break;
      case "5tpe2Xglf4H":
        Script47();
        break;
      case "6hbCx8i0ulh":
        Script48();
        break;
      case "68J9ZtVkkEU":
        Script49();
        break;
      case "5nBvXWQMn4l":
        Script50();
        break;
      case "6kZJyyR3OFM":
        Script51();
        break;
      case "6VlKDmUSgeA":
        Script52();
        break;
      case "6gtddTs0du0":
        Script53();
        break;
      case "5mDHJ0y6vj5":
        Script54();
        break;
      case "65aYmHsmP2X":
        Script55();
        break;
      case "6MRT1GlUdxN":
        Script56();
        break;
      case "5u8qKjyV1qA":
        Script57();
        break;
      case "6KbyQdI1SHn":
        Script58();
        break;
      case "6hI8loD8cm7":
        Script59();
        break;
      case "61eLscqblDa":
        Script60();
        break;
      case "6Hvl3pGGc8j":
        Script61();
        break;
      case "5sSbCFwXwy3":
        Script62();
        break;
      case "6XEgvXK6DGe":
        Script63();
        break;
      case "5w3HKUmVdyG":
        Script64();
        break;
      case "6jD8ibXXV1q":
        Script65();
        break;
      case "6BcgV1bRE2V":
        Script66();
        break;
      case "6IkMWpYhvuZ":
        Script67();
        break;
      case "6OlgZZ7VjmC":
        Script68();
        break;
      case "67IAq6F1xT5":
        Script69();
        break;
      case "5dt51LY7Eqb":
        Script70();
        break;
      case "5dXoOEw3gUe":
        Script71();
        break;
      case "5VHBydul7AT":
        Script72();
        break;
      case "5ea012Egk4A":
        Script73();
        break;
  }
}

window.InitExecuteScripts = function()
{
var player = GetPlayer();
var object = player.object;
var once = player.once;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
var update = player.update;
var pointerX = player.pointerX;
var pointerY = player.pointerY;
var showPointer = player.showPointer;
var hidePointer = player.hidePointer;
var slideWidth = player.slideWidth;
var slideHeight = player.slideHeight;
var getKeyDown = player.getKeyDown;
var keydown = player.keydown;
var keyup = player.keyup;
window.Script1 = function()
{
  const target = object('64P5JYGPuBh');
const duration = 750;
const easing = 'ease-out';
const id = '6WRH9yYEg6z';
const growAmount = 0.2;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script2 = function()
{
  const target = object('64P5JYGPuBh');
const duration = 750;
const easing = 'ease-out';
const id = '6WRH9yYEg6z';
const growAmount = 0.2;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script3 = function()
{
  const target = object('64P5JYGPuBh');
const duration = 750;
const easing = 'ease-out';
const id = '5fLx1pGyTNu';
player.addForTriggers(
id,
target.animate(
[ {opacity: 1 }, 
{opacity: 0 }, 
{opacity: 1 }, 
{opacity: 0 }, 
{opacity: 1 } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script4 = function()
{
  const target = object('64P5JYGPuBh');
const duration = 750;
const easing = 'ease-out';
const id = '5fLx1pGyTNu';
player.addForTriggers(
id,
target.animate(
[ {opacity: 1 }, 
{opacity: 0 }, 
{opacity: 1 }, 
{opacity: 0 }, 
{opacity: 1 } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script5 = function()
{
  const target = object('5rCQRcsKpFI');
const duration = 750;
const easing = 'ease-out';
const id = '6kbgDx4gGJW';
const growAmount = 0.2;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script6 = function()
{
  const target = object('5rCQRcsKpFI');
const duration = 750;
const easing = 'ease-out';
const id = '6kbgDx4gGJW';
const growAmount = 0.2;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script7 = function()
{
  const target = object('5rCQRcsKpFI');
const duration = 750;
const easing = 'ease-out';
const id = '61YrqtTC53W';
player.addForTriggers(
id,
target.animate(
[ {opacity: 1 }, 
{opacity: 0 }, 
{opacity: 1 }, 
{opacity: 0 }, 
{opacity: 1 } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script8 = function()
{
  const target = object('5rCQRcsKpFI');
const duration = 750;
const easing = 'ease-out';
const id = '61YrqtTC53W';
player.addForTriggers(
id,
target.animate(
[ {opacity: 1 }, 
{opacity: 0 }, 
{opacity: 1 }, 
{opacity: 0 }, 
{opacity: 1 } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script9 = function()
{
  const target = object('6VLAeqyo33r');
const duration = 750;
const easing = 'ease-out';
const id = '60DwUumlhDP';
const floatAmount = 5;
player.addForTriggers(
id,
target.animate(
[ {translate: `0 -${floatAmount}px` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script10 = function()
{
  const target = object('6VLAeqyo33r');
const duration = 750;
const easing = 'ease-out';
const id = '60DwUumlhDP_reverse';
const floatAmount = 0;
player.addForTriggers(
id,
target.animate(
[ {translate: `0 -${floatAmount}px` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script11 = function()
{
  const target = object('5mPre9bhYyr');
const duration = 750;
const easing = 'ease-out';
const id = '5zzeVJYsYps';
const floatAmount = 5;
player.addForTriggers(
id,
target.animate(
[ {translate: `0 -${floatAmount}px` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script12 = function()
{
  const target = object('6TWNNW1UQf2');
const duration = 750;
const easing = 'ease-out';
const id = '6SL19j6rvyj';
const floatAmount = 5;
player.addForTriggers(
id,
target.animate(
[ {translate: `0 -${floatAmount}px` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script13 = function()
{
  const target = object('6TWNNW1UQf2');
const duration = 750;
const easing = 'ease-out';
const id = '6SL19j6rvyj_reverse';
const floatAmount = 0;
player.addForTriggers(
id,
target.animate(
[ {translate: `0 -${floatAmount}px` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script14 = function()
{
  const target = object('6QJ8jkjOmUQ');
const duration = 750;
const easing = 'ease-out';
const id = '6pCrfDSOL2p';
const floatAmount = 5;
player.addForTriggers(
id,
target.animate(
[ {translate: `0 -${floatAmount}px` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script15 = function()
{
  const target = object('6QJ8jkjOmUQ');
const duration = 750;
const easing = 'ease-out';
const id = '6pCrfDSOL2p_reverse';
const floatAmount = 0;
player.addForTriggers(
id,
target.animate(
[ {translate: `0 -${floatAmount}px` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script16 = function()
{
  const target = object('6mPR1z4pxYC');
const duration = 750;
const easing = 'ease-out';
const id = '5gQTQ7mZkAi';
const floatAmount = 5;
player.addForTriggers(
id,
target.animate(
[ {translate: `0 -${floatAmount}px` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script17 = function()
{
  const target = object('5jy1MfotIIJ');
const duration = 750;
const easing = 'ease-out';
const id = '5VGDIQ7n0d6';
const floatAmount = 5;
player.addForTriggers(
id,
target.animate(
[ {translate: `0 -${floatAmount}px` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script18 = function()
{
  const target = object('5jy1MfotIIJ');
const duration = 750;
const easing = 'ease-out';
const id = '5VGDIQ7n0d6_reverse';
const floatAmount = 0;
player.addForTriggers(
id,
target.animate(
[ {translate: `0 -${floatAmount}px` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script19 = function()
{
  const target = object('5zifXgdLGF0');
const duration = 750;
const easing = 'ease-out';
const id = '5nFe92mSidP';
const floatAmount = 5;
player.addForTriggers(
id,
target.animate(
[ {translate: `0 -${floatAmount}px` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script20 = function()
{
  const target = object('5zifXgdLGF0');
const duration = 750;
const easing = 'ease-out';
const id = '5nFe92mSidP_reverse';
const floatAmount = 0;
player.addForTriggers(
id,
target.animate(
[ {translate: `0 -${floatAmount}px` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script21 = function()
{
  const target = object('5aoMh3gLBUA');
const duration = 750;
const easing = 'ease-out';
const id = '5j9X324VXEz';
const floatAmount = 5;
player.addForTriggers(
id,
target.animate(
[ {translate: `0 -${floatAmount}px` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script22 = function()
{
  const target = object('5aoMh3gLBUA');
const duration = 750;
const easing = 'ease-out';
const id = '5j9X324VXEz_reverse';
const floatAmount = 0;
player.addForTriggers(
id,
target.animate(
[ {translate: `0 -${floatAmount}px` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script23 = function()
{
  const target = object('5aBof5RsCH1');
const duration = 750;
const easing = 'ease-out';
const id = '6gQtQQSIzxr';
const floatAmount = 5;
player.addForTriggers(
id,
target.animate(
[ {translate: `0 -${floatAmount}px` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script24 = function()
{
  const target = object('5aBof5RsCH1');
const duration = 750;
const easing = 'ease-out';
const id = '6gQtQQSIzxr_reverse';
const floatAmount = 0;
player.addForTriggers(
id,
target.animate(
[ {translate: `0 -${floatAmount}px` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script25 = function()
{
  const target = object('6kAsndfLzOQ');
const duration = 750;
const easing = 'ease-out';
const id = '5w2zqsAB4n2';
const floatAmount = 5;
player.addForTriggers(
id,
target.animate(
[ {translate: `0 -${floatAmount}px` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script26 = function()
{
  const target = object('6kAsndfLzOQ');
const duration = 750;
const easing = 'ease-out';
const id = '5w2zqsAB4n2_reverse';
const floatAmount = 0;
player.addForTriggers(
id,
target.animate(
[ {translate: `0 -${floatAmount}px` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script27 = function()
{
  const target = object('6g28IJA9dJj');
const duration = 750;
const easing = 'ease-out';
const id = '600upwb6K23';
const floatAmount = 5;
player.addForTriggers(
id,
target.animate(
[ {translate: `0 -${floatAmount}px` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script28 = function()
{
  const target = object('6g28IJA9dJj');
const duration = 750;
const easing = 'ease-out';
const id = '600upwb6K23_reverse';
const floatAmount = 0;
player.addForTriggers(
id,
target.animate(
[ {translate: `0 -${floatAmount}px` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script29 = function()
{
  const target = object('6biMXN9JxEI');
const duration = 750;
const easing = 'ease-out';
const id = '6VayQgRqVJa';
const floatAmount = 5;
player.addForTriggers(
id,
target.animate(
[ {translate: `0 -${floatAmount}px` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script30 = function()
{
  const target = object('6biMXN9JxEI');
const duration = 750;
const easing = 'ease-out';
const id = '6VayQgRqVJa_reverse';
const floatAmount = 0;
player.addForTriggers(
id,
target.animate(
[ {translate: `0 -${floatAmount}px` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script31 = function()
{
  const target = object('6KGcEIS6jcV');
const duration = 750;
const easing = 'ease-out';
const id = '5YBTrDFWPmc';
const floatAmount = 5;
player.addForTriggers(
id,
target.animate(
[ {translate: `0 -${floatAmount}px` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script32 = function()
{
  const target = object('61gYSiwcHIV');
const duration = 750;
const easing = 'ease-out';
const id = '6Njv6iaGKIu';
const floatAmount = 5;
player.addForTriggers(
id,
target.animate(
[ {translate: `0 -${floatAmount}px` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script33 = function()
{
  const target = object('61gYSiwcHIV');
const duration = 750;
const easing = 'ease-out';
const id = '6Njv6iaGKIu_reverse';
const floatAmount = 0;
player.addForTriggers(
id,
target.animate(
[ {translate: `0 -${floatAmount}px` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script34 = function()
{
  const target = object('6glr0fG1Uqk');
const duration = 750;
const easing = 'ease-out';
const id = '6cVCljjoXHo';
const floatAmount = 5;
player.addForTriggers(
id,
target.animate(
[ {translate: `0 -${floatAmount}px` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script35 = function()
{
  const target = object('6615lZxxm5h');
const duration = 750;
const easing = 'ease-out';
const id = '61qMwtsYHIQ';
const floatAmount = 5;
player.addForTriggers(
id,
target.animate(
[ {translate: `0 -${floatAmount}px` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script36 = function()
{
  const target = object('6615lZxxm5h');
const duration = 750;
const easing = 'ease-out';
const id = '61qMwtsYHIQ_reverse';
const floatAmount = 0;
player.addForTriggers(
id,
target.animate(
[ {translate: `0 -${floatAmount}px` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script37 = function()
{
  const target = object('6ne6Y5nfrI7');
const duration = 750;
const easing = 'ease-out';
const id = '6eSVDJYLbwl';
const floatAmount = 5;
player.addForTriggers(
id,
target.animate(
[ {translate: `0 -${floatAmount}px` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script38 = function()
{
  const target = object('6h8AAv96Woj');
const duration = 750;
const easing = 'ease-out';
const id = '69zRRUlZNyT';
const floatAmount = 5;
player.addForTriggers(
id,
target.animate(
[ {translate: `0 -${floatAmount}px` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script39 = function()
{
  const target = object('6h8AAv96Woj');
const duration = 750;
const easing = 'ease-out';
const id = '69zRRUlZNyT_reverse';
const floatAmount = 0;
player.addForTriggers(
id,
target.animate(
[ {translate: `0 -${floatAmount}px` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script40 = function()
{
  const target = object('5z3f38cPSLk');
const duration = 750;
const easing = 'ease-out';
const id = '6SwCTJCsW3v';
const floatAmount = 5;
player.addForTriggers(
id,
target.animate(
[ {translate: `0 -${floatAmount}px` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script41 = function()
{
  const target = object('6C4Sm6YJA77');
const duration = 750;
const easing = 'ease-out';
const id = '6ceDRHkwsj8';
const floatAmount = 5;
player.addForTriggers(
id,
target.animate(
[ {translate: `0 -${floatAmount}px` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script42 = function()
{
  const target = object('6C4Sm6YJA77');
const duration = 750;
const easing = 'ease-out';
const id = '6ceDRHkwsj8_reverse';
const floatAmount = 0;
player.addForTriggers(
id,
target.animate(
[ {translate: `0 -${floatAmount}px` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script43 = function()
{
  const target = object('6qYj2mnw5el');
const duration = 750;
const easing = 'ease-out';
const id = '6YKrmBWnbH4';
const floatAmount = 5;
player.addForTriggers(
id,
target.animate(
[ {translate: `0 -${floatAmount}px` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script44 = function()
{
  const target = object('5z8xn9XnNEU');
const duration = 750;
const easing = 'ease-out';
const id = '5wEVLCg90bS';
const floatAmount = 5;
player.addForTriggers(
id,
target.animate(
[ {translate: `0 -${floatAmount}px` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script45 = function()
{
  const target = object('5z8xn9XnNEU');
const duration = 750;
const easing = 'ease-out';
const id = '5wEVLCg90bS_reverse';
const floatAmount = 0;
player.addForTriggers(
id,
target.animate(
[ {translate: `0 -${floatAmount}px` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script46 = function()
{
  const target = object('5hvTAVj1N8G');
const duration = 750;
const easing = 'ease-out';
const id = '6p6mbrr66qt';
const floatAmount = 5;
player.addForTriggers(
id,
target.animate(
[ {translate: `0 -${floatAmount}px` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script47 = function()
{
  const target = object('5j07yomIyyW');
const duration = 750;
const easing = 'ease-out';
const id = '69zevtW6ROy';
const floatAmount = 5;
player.addForTriggers(
id,
target.animate(
[ {translate: `0 -${floatAmount}px` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script48 = function()
{
  const target = object('5j07yomIyyW');
const duration = 750;
const easing = 'ease-out';
const id = '69zevtW6ROy_reverse';
const floatAmount = 0;
player.addForTriggers(
id,
target.animate(
[ {translate: `0 -${floatAmount}px` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script49 = function()
{
  const target = object('5nQwRDZEwWW');
const duration = 750;
const easing = 'ease-out';
const id = '5l06uS8hGGn';
const floatAmount = 5;
player.addForTriggers(
id,
target.animate(
[ {translate: `0 -${floatAmount}px` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script50 = function()
{
  const target = object('5sCFnSMwHM0');
const duration = 750;
const easing = 'ease-out';
const id = '6NR6EXYt3xJ';
const floatAmount = 5;
player.addForTriggers(
id,
target.animate(
[ {translate: `0 -${floatAmount}px` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script51 = function()
{
  const target = object('5sCFnSMwHM0');
const duration = 750;
const easing = 'ease-out';
const id = '6NR6EXYt3xJ_reverse';
const floatAmount = 0;
player.addForTriggers(
id,
target.animate(
[ {translate: `0 -${floatAmount}px` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script52 = function()
{
  const target = object('5j1pIDi7KBU');
const duration = 750;
const easing = 'ease-out';
const id = '6SxdaCsn3g8';
const floatAmount = 5;
player.addForTriggers(
id,
target.animate(
[ {translate: `0 -${floatAmount}px` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script53 = function()
{
  const target = object('6Rli6Dhwrqc');
const duration = 750;
const easing = 'ease-out';
const id = '6bwX9b3QHDV';
const floatAmount = 5;
player.addForTriggers(
id,
target.animate(
[ {translate: `0 -${floatAmount}px` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script54 = function()
{
  const target = object('6Rli6Dhwrqc');
const duration = 750;
const easing = 'ease-out';
const id = '6bwX9b3QHDV_reverse';
const floatAmount = 0;
player.addForTriggers(
id,
target.animate(
[ {translate: `0 -${floatAmount}px` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script55 = function()
{
  const target = object('6V2D1XFXeb6');
const duration = 750;
const easing = 'ease-out';
const id = '6bEtCc8YFeI';
const floatAmount = 5;
player.addForTriggers(
id,
target.animate(
[ {translate: `0 -${floatAmount}px` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script56 = function()
{
  const target = object('6V2D1XFXeb6');
const duration = 750;
const easing = 'ease-out';
const id = '6bEtCc8YFeI_reverse';
const floatAmount = 0;
player.addForTriggers(
id,
target.animate(
[ {translate: `0 -${floatAmount}px` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script57 = function()
{
  const target = object('6XdSWzoPNnF');
const duration = 750;
const easing = 'ease-out';
const id = '5YYCWZcuoAf';
const floatAmount = 5;
player.addForTriggers(
id,
target.animate(
[ {translate: `0 -${floatAmount}px` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script58 = function()
{
  const target = object('6XdSWzoPNnF');
const duration = 750;
const easing = 'ease-out';
const id = '5YYCWZcuoAf_reverse';
const floatAmount = 0;
player.addForTriggers(
id,
target.animate(
[ {translate: `0 -${floatAmount}px` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script59 = function()
{
  const target = object('6cXAQz2Z5PI');
const duration = 750;
const easing = 'ease-out';
const id = '6Tu2rfnuvHE';
const floatAmount = 5;
player.addForTriggers(
id,
target.animate(
[ {translate: `0 -${floatAmount}px` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script60 = function()
{
  const target = object('6cXAQz2Z5PI');
const duration = 750;
const easing = 'ease-out';
const id = '6Tu2rfnuvHE_reverse';
const floatAmount = 0;
player.addForTriggers(
id,
target.animate(
[ {translate: `0 -${floatAmount}px` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script61 = function()
{
  const target = object('68PMpR8pCo8');
const duration = 750;
const easing = 'ease-out';
const id = '5tQjoGsxOMo';
const floatAmount = 5;
player.addForTriggers(
id,
target.animate(
[ {translate: `0 -${floatAmount}px` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script62 = function()
{
  const target = object('68PMpR8pCo8');
const duration = 750;
const easing = 'ease-out';
const id = '5tQjoGsxOMo_reverse';
const floatAmount = 0;
player.addForTriggers(
id,
target.animate(
[ {translate: `0 -${floatAmount}px` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script63 = function()
{
  const target = object('6dJWAUBpXac');
const duration = 750;
const easing = 'ease-out';
const id = '6jk7KszCx5C';
const floatAmount = 5;
player.addForTriggers(
id,
target.animate(
[ {translate: `0 -${floatAmount}px` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script64 = function()
{
  const target = object('6dJWAUBpXac');
const duration = 750;
const easing = 'ease-out';
const id = '6jk7KszCx5C_reverse';
const floatAmount = 0;
player.addForTriggers(
id,
target.animate(
[ {translate: `0 -${floatAmount}px` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script65 = function()
{
  const target = object('6Vr9HYSrMwJ');
const duration = 750;
const easing = 'ease-out';
const id = '65Rb41m0050';
const floatAmount = 5;
player.addForTriggers(
id,
target.animate(
[ {translate: `0 -${floatAmount}px` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script66 = function()
{
  const target = object('6Vr9HYSrMwJ');
const duration = 750;
const easing = 'ease-out';
const id = '65Rb41m0050_reverse';
const floatAmount = 0;
player.addForTriggers(
id,
target.animate(
[ {translate: `0 -${floatAmount}px` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

};

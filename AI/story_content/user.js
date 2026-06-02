window.InitUserScripts = function()
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
window.Script54 = function()
{
  var player = GetPlayer();

// מביא את התאריך של היום
var today = new Date();

// פורמט יפה (לדוגמה: 17/03/2026)
var day = String(today.getDate()).padStart(2, '0');
var month = String(today.getMonth() + 1).padStart(2, '0');
var year = today.getFullYear();

var formattedDate = day + "/" + month + "/" + year;

// שומר במשתנה של Storyline
player.SetVar("CompletionDate", formattedDate);
}

window.Script55 = function()
{
  // בחירת האלמנטים (השמות צריכים להתאים לשמות ב-Timeline)
var front = document.querySelectorAll("[data-acc-text='CardFront']");
var back = document.querySelectorAll("[data-acc-text='CardBack']");

// אנימציית סיבוב תלת-ממדית
gsap.to(front, {duration: 0.6, rotationY: 180, opacity: 0, ease: "back.inOut"});
gsap.fromTo(back, {rotationY: -180, opacity: 0}, {duration: 0.6, rotationY: 0, opacity: 1, ease: "back.inOut"});

// הפיכת הצד האחורי לנראה
back[0].style.visibility = "visible";
}

window.Script56 = function()
{
  // בחירת האלמנטים (השמות צריכים להתאים לשמות ב-Timeline)
var front = document.querySelectorAll("[data-acc-text='CardFront2']");
var back = document.querySelectorAll("[data-acc-text='CardBack']");

// אנימציית סיבוב תלת-ממדית
gsap.to(front, {duration: 0.6, rotationY: 180, opacity: 0, ease: "back.inOut"});
gsap.fromTo(back, {rotationY: -180, opacity: 0}, {duration: 0.6, rotationY: 0, opacity: 1, ease: "back.inOut"});

// הפיכת הצד האחורי לנראה
back[0].style.visibility = "visible";
}

window.Script57 = function()
{
  // בחירת האלמנטים (השמות צריכים להתאים לשמות ב-Timeline)
var front = document.querySelectorAll("[data-acc-text='CardFront3']");
var back = document.querySelectorAll("[data-acc-text='CardBack']");

// אנימציית סיבוב תלת-ממדית
gsap.to(front, {duration: 0.6, rotationY: 180, opacity: 0, ease: "back.inOut"});
gsap.fromTo(back, {rotationY: -180, opacity: 0}, {duration: 0.6, rotationY: 0, opacity: 1, ease: "back.inOut"});

// הפיכת הצד האחורי לנראה
back[0].style.visibility = "visible";
}

window.Script58 = function()
{
  // בחירת האלמנטים (השמות צריכים להתאים לשמות ב-Timeline)
var front = document.querySelectorAll("[data-acc-text='CardFront4']");
var back = document.querySelectorAll("[data-acc-text='CardBack']");

// אנימציית סיבוב תלת-ממדית
gsap.to(front, {duration: 0.6, rotationY: 180, opacity: 0, ease: "back.inOut"});
gsap.fromTo(back, {rotationY: -180, opacity: 0}, {duration: 0.6, rotationY: 0, opacity: 1, ease: "back.inOut"});

// הפיכת הצד האחורי לנראה
back[0].style.visibility = "visible";
}

window.Script59 = function()
{
  // בחירת האלמנטים (השמות צריכים להתאים לשמות ב-Timeline)
var front = document.querySelectorAll("[data-acc-text='CardFront5']");
var back = document.querySelectorAll("[data-acc-text='CardBack']");

// אנימציית סיבוב תלת-ממדית
gsap.to(front, {duration: 0.6, rotationY: 180, opacity: 0, ease: "back.inOut"});
gsap.fromTo(back, {rotationY: -180, opacity: 0}, {duration: 0.6, rotationY: 0, opacity: 1, ease: "back.inOut"});

// הפיכת הצד האחורי לנראה
back[0].style.visibility = "visible";
}

};

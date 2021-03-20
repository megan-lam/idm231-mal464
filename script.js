
const noseObj = document.getElementById('nose');
const ussObj = document.getElementById('uss');
const sanObj = document.getElementById('san');
const hangObj = document.getElementById('hang');
const whiteObj = document.getElementById('white');
const playObj = document.getElementById('play');
const shutObj = document.getElementById('shut');
const hatedObj = document.getElementById('hated');
const blackObj = document.getElementById('black');
const entireObj = document.getElementById('entire');
const crocObj = document.getElementById('croc');
const arkObj = document.getElementById('ark');
const help = document.getElementById('help');

  noseObj.addEventListener('click', function (evt) {
    console.log('nosedive button clicked: ' + evt.target.id);
    const idName = evt.target.id;
    userPicked(idName);
  });
  ussObj.addEventListener('click', function (evt) {
    console.log('uss callister button clicked: ' + evt.target.id);
    const idName = evt.target.id;
    userPicked(idName);
  });
  sanObj.addEventListener('click', function (evt) {
    console.log('san junipero button clicked: ' + evt.target.id);
    const idName = evt.target.id;
    userPicked(idName);
  });
  hangObj.addEventListener('click', function (evt) {
    console.log('hang the dj button clicked: ' + evt.target.id);
    const idName = evt.target.id;
    userPicked(idName);
  });
  whiteObj.addEventListener('click', function (evt) {
    console.log('white bear button clicked: ' + evt.target.id);
    const idName = evt.target.id;
    userPicked(idName);
  });
  playObj.addEventListener('click', function (evt) {
    console.log('playtest button clicked: ' + evt.target.id);
    const idName = evt.target.id;
    userPicked(idName);
  });
  shutObj.addEventListener('click', function (evt) {
    console.log('shut up and dance button clicked: ' + evt.target.id);
    const idName = evt.target.id;
    userPicked(idName);
  });
  hatedObj.addEventListener('click', function (evt) {
    console.log('hated in the nation button clicked: ' + evt.target.id);
    const idName = evt.target.id;
    userPicked(idName);
  });
  blackObj.addEventListener('click', function (evt) {
    console.log('black museum button clicked: ' + evt.target.id);
    const idName = evt.target.id;
    userPicked(idName);
  });
  entireObj.addEventListener('click', function (evt) {
    console.log('entire history of you button clicked: ' + evt.target.id);
    const idName = evt.target.id;
    userPicked(idName);
  });
  crocObj.addEventListener('click', function (evt) {
    console.log('crocodile button clicked: ' + evt.target.id);
    const idName = evt.target.id;
    userPicked(idName);
  });
  arkObj.addEventListener('click', function (evt) {
    console.log('ark button clicked: ' + evt.target.id);
    const idName = evt.target.id;
    userPicked(idName);
  });
  help.addEventListener('click', function(evt) {
    console.log('help button clicked: ' + evt.target.id);
    const idName = evt.target.id;
    userPicked(idName);
  });

    // modals //
const img = document.getElementById('img');
const ep = document.getElementById('ep');
const title = document.getElementById('title');
const date = document.getElementById('date');
const info = document.getElementById('info');

function userPicked(whichOne) {
    console.log('userPicked called: ' + whichOne);
    switch (whichOne) {
case 'nose' :
    img.src = 'images/modal_img/modal_nose.png';
    ep.innerHTML = "SEASON 3 EPISODE 1";
    title.innerHTML = "NOSEDIVE";
    date.innerHTML = "02/19 - 03/20";
    info.innerHTML = "In a world where social standing gives you privelege, Lacy gets an opportunity to boost her ratings at a friend's wedding - but things don't go exactly as planned.";
    modal.hidden = !modal.hidden;
    stopAllAudio();
    s_nose.play();
    break;

case 'uss' :
    img.src = 'images/modal_img/modal_uss.png';
    ep.innerHTML = "SEASON 4 EPISODE 1";
    title.innerHTML = "USS CALLISTER";
    date.innerHTML = "03/21 - 04/19";
    info.innerHTML = "Captain Robert Daly and his crew welcome a new member on their spaceship, but the new member quickly realizes something's wrong.";
    modal.hidden = !modal.hidden;
    stopAllAudio();
    s_uss.play();
    break;

case 'san' :
    img.src = 'images/modal_img/modal_san.png';
    ep.innerHTML = "SEASON 3 EPISODE 4";
    title.innerHTML = "SAN JUNIPERO";
    date.innerHTML = "04/20 - 05/20";
    info.innerHTML = "Back in 1987, a shy introvert meets a extroverted party girl and they quickly begin to develop a timeless bond.";
    modal.hidden = !modal.hidden;
    stopAllAudio();
    s_san.play();
    break;

case 'hang' :
    img.src = 'images/modal_img/modal_hang.png';
    ep.innerHTML = "SEASON 4 EPISODE 4";
    title.innerHTML = "HANG THE DJ";
    date.innerHTML = "05/21 - 06/21";
    info.innerHTML = "Frank and Amy begin to question the legitimacy of a trusted dating program that gives all relationships an expiration date.";
    modal.hidden = !modal.hidden;
    stopAllAudio();
    s_hang.play();
    break;

case 'white' :
    img.src = 'images/modal_img/modal_white.png';
    ep.innerHTML = "SEASON 2 EPISODE 2";
    title.innerHTML = "WHITEBEAR";
    date.innerHTML = "01/20 - 02/18";
    info.innerHTML = "Waking up dazed and confused, Victoria tries to navigate through the world but it seems as if everyone around her is just watching.";
    modal.hidden = !modal.hidden;
    stopAllAudio();
    s_white.play();
    break;

case 'play' :
    img.src = 'images/modal_img/modal_play.png';
    ep.innerHTML = "SEASON 3 EPISODE 2";
    title.innerHTML = "PLAYTEST";
    date.innerHTML = "08/23 - 09/22";
    info.innerHTML = "In an attempt to make some quick cash, an American traveler signs up to test a revolutionary new gaming system, but soon realizes the game is a little too realistic.";
    modal.hidden = !modal.hidden;
    stopAllAudio();
    s_play.play();
    break;

case 'shut' :
    img.src = 'images/modal_img/modal_shut.png';
    ep.innerHTML = "SEASON 3 EPISODE 3";
    title.innerHTML = "SHUT UP AND DANCE";
    date.innerHTML = "06/22 - 07/22";
    info.innerHTML = "A teen tries to keep his secrets in the dark after a virus takes over his laptop and begins receiving tasks from an anonymous messenger.";
    modal.hidden = !modal.hidden;
    stopAllAudio();
    s_shut.play();
    break;

case 'hated' :
    img.src = 'images/modal_img/modal_hated.png';
    ep.innerHTML = "SEASON 3 EPISODE 6";
    title.innerHTML = "HATED IN THE NATION";
    date.innerHTML = "12/22 - 01/19";
    info.innerHTML = "A journalist under fire dies, putting a veteran detective and her rookie partner's true skills to the test.";
    modal.hidden = !modal.hidden;
    stopAllAudio();
    s_hated.play();
    break;

case 'black' :
    img.src = 'images/modal_img/modal_black.png';
    ep.innerHTML = "SEASON 4 EPISODE 6";
    title.innerHTML = "BLACK MUSEUM";
    date.innerHTML = "10/24 - 11/21";
    info.innerHTML = "A young girl comes across a museum that boasts criminal artifacts. With high tech devices and seemingly harmless tools, nothing compares to the main attraction.";
    modal.hidden = !modal.hidden;
    stopAllAudio();
    s_black.play();
    break;

case 'entire' :
    img.src = 'images/modal_img/modal_entire.png';
    ep.innerHTML = "SEASON 1 EPISODE 3";
    title.innerHTML = "ENTIRE HISTORY OF YOU";
    date.innerHTML = "09/23 - 10/23";
    info.innerHTML = "Grains: the next innovation in technology that allows people to record and rewatch everything they do, see, and say, but is it really for the better?";
    modal.hidden = !modal.hidden;
    stopAllAudio();
    s_entire.play();
    break;

case 'croc' :
    img.src = 'images/modal_img/modal_croc.png';
    ep.innerHTML = "SEASON 4 EPISODE 3";
    title.innerHTML = "CROCODILE";
    date.innerHTML = "07/23 - 08/22";
    info.innerHTML = "An insurance investigator continues with her daily tasks until she comes across an accident that may be part of something much bigger.";
    modal.hidden = !modal.hidden;
    stopAllAudio();
    s_croc.play();
    break;

case 'ark' :
    img.src = 'images/modal_img/modal_ark.png';
    ep.innerHTML = "SEASON 4 EPISODE 2";
    title.innerHTML = "ARKANGEL";
    date.innerHTML = "11/22 - 12/21";
    info.innerHTML = "After a close encounter with her daughter's safety, Marie opts to install a tracking and monitoring device, but that's not all it does.";
    modal.hidden = !modal.hidden;
    stopAllAudio();
    s_ark.play();
    break;

case 'help':
    img.src = 'images/help.png';
    title.innerHTML = "HELP";
    ep.innerHTML = "Black Mirror Zodiac";
    info.innerHTML = "This is the Black Mirror Zodiac! Click on an image from the show or enter your birthday and hit submit to find out which episode you are. Then click the X button to return. Images from show are courtesy of Netflix.";
    modal.hidden = !modal.hidden;
    break;
    }}

// calendar input//
const userSubmitObj = document.getElementById('submit');

userSubmitObj.addEventListener('click', function(){
    console.log('User clicked submit');

const userBday = new Date( document.getElementById('bday').value);
    console.log('userBday is:' + userBday);

const whichDayOfMonth = userBday.getUTCDate();
    console.log('whichDayOfMonth is: ' + whichDayOfMonth);

let whichMonth = userBday.getUTCMonth();
    whichMonth++;
    console.log('whichMonth is: ' + whichMonth);

let AstroSign = "";

if ((whichMonth == 12 && whichDayOfMonth >= 22) || (whichMonth == 1 && whichDayOfMonth <= 19)) {
    AstroSign = "hated";
  } else if ((whichMonth == 11 && whichDayOfMonth >= 22) || (whichMonth == 12 && whichDayOfMonth <= 21)) {
    AstroSign = "ark";
  } else if ((whichMonth == 10 && whichDayOfMonth >= 24) || (whichMonth == 11 && whichDayOfMonth <= 21)) {
    AstroSign = "black";
  } else if ((whichMonth == 9 && whichDayOfMonth >= 23) || (whichMonth == 10 && whichDayOfMonth <= 23)) {
    AstroSign = "entire";
  } else if ((whichMonth == 8 && whichDayOfMonth >= 23) || (whichMonth == 9 && whichDayOfMonth <= 22)) {
    AstroSign = "play";
  } else if ((whichMonth == 7 && whichDayOfMonth >= 23) || (whichMonth == 8 && whichDayOfMonth <= 22)) {
    AstroSign = "croc";
  } else if ((whichMonth == 6 && whichDayOfMonth >= 22) || (whichMonth == 7 && whichDayOfMonth <= 22)) {
    AstroSign = "shut";
  } else if ((whichMonth == 5 && whichDayOfMonth >= 21) || (whichMonth == 6 && whichDayOfMonth <= 21)) {
    AstroSign = "hang";
  } else if ((whichMonth == 4 && whichDayOfMonth >= 20) || (whichMonth == 5 && whichDayOfMonth <= 20)) {
    AstroSign = "san";
  } else if ((whichMonth == 3 && whichDayOfMonth >= 21) || (whichMonth == 4 && whichDayOfMonth <= 19)) {
    AstroSign = "uss";
  } else if ((whichMonth == 2 && whichDayOfMonth >= 19) || (whichMonth == 3 && whichDayOfMonth <= 20)) {
    AstroSign = "nose";
  } else if ((whichMonth == 1 && whichDayOfMonth >= 20) || (whichMonth == 2 && whichDayOfMonth <= 18)) {
    AstroSign = "white";
  }

  console.log('AstroSign is: ' + AstroSign);
  userPicked(AstroSign);

});


    // modal stuff//
const modal = document.getElementById('modal');
const closeModalObj = document.getElementById('btn-modal-close');

closeModalObj.addEventListener('click', function() {
  console.log('Close modal!');
  stopAllAudio();
  modal.hidden = !modal.hidden;
});

// sounds //
const s_nose = document.getElementById('s_nose');
const s_uss = document.getElementById('s_uss');
const s_san = document.getElementById('s_san');
const s_hang = document.getElementById('s_hang');
const s_white = document.getElementById('s_white');
const s_play = document.getElementById('s_play');
const s_shut = document.getElementById('s_shut');
const s_hated = document.getElementById('s_hated');
const s_black = document.getElementById('s_black');
const s_entire = document.getElementById('s_entire');
const s_croc = document.getElementById('s_croc');
const s_ark = document.getElementById('s_ark');

//stop audio//
function stopAllAudio(){
    s_nose.pause();
    s_nose.currentTime = 0;

    s_uss.pause();
    s_uss.currentTime = 0;

    s_san.pause();
    s_san.currentTime = 0;

    s_hang.pause();
    s_hang.currentTime = 0;

    s_white.pause();
    s_white.currentTime = 0;

    s_play.pause();
    s_play.currentTime = 0;

    s_shut.pause();
    s_shut.currentTime = 0;

    s_hated.pause();
    s_hated.currentTime = 0;
    
    s_black.pause();
    s_black.currentTime = 0;

    s_entire.pause();
    s_entire.currentTime = 0;

    s_croc.pause();
    s_croc.currentTime = 0;

    s_ark .pause();
    s_ark.currentTime = 0;
}
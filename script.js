
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
    info.innerHTML = "A woman desperate to boost her social media score hits the jackpot when she’s invited to a swanky wedding. But the trip doesn’t go as planned.";
    modal.hidden = !modal.hidden;
    stopAllAudio();
    s_nose.play();
    break;

case 'uss' :
    img.src = 'images/modal_img/modal_uss.png';
    ep.innerHTML = "SEASON 4 EPISODE 1";
    title.innerHTML = "USS CALLISTER";
    date.innerHTML = "03/21 - 04/19";
    info.innerHTML = "Capt. Robert Daly presides over his crew with wisdom and courage. But a new recruit will soon discover nothing on this spaceship is what it seems.";
    modal.hidden = !modal.hidden;
    stopAllAudio();
    s_uss.play();
    break;

case 'san' :
    img.src = 'images/modal_img/modal_san.png';
    ep.innerHTML = "SEASON 3 EPISODE 4";
    title.innerHTML = "SAN JUNIPERO";
    date.innerHTML = "04/20 - 05/20";
    info.innerHTML = "In a seaside town in 1987, a shy young woman and an outgoing party girl strike up a powerful bond that seems to defy the laws of space and time.";
    modal.hidden = !modal.hidden;
    stopAllAudio();
    s_san.play();
    break;

case 'hang' :
    img.src = 'images/modal_img/modal_hang.png';
    ep.innerHTML = "SEASON 4 EPISODE 4";
    title.innerHTML = "HANG THE DJ";
    date.innerHTML = "05/21 - 06/21";
    info.innerHTML = "Paired up by a dating program that puts an expiration date on all relationships, Frank and Amy soon begin to question the system's logic.";
    modal.hidden = !modal.hidden;
    stopAllAudio();
    s_hang.play();
    break;

case 'white' :
    img.src = 'images/modal_img/modal_white.png';
    ep.innerHTML = "SEASON 2 EPISODE 2";
    title.innerHTML = "WHITEBEAR";
    date.innerHTML = "01/20 - 02/18";
    info.innerHTML = "Victoria wakes up and cannot remember anything about her life. Everyone she encounters refuses to communicate with her.";
    modal.hidden = !modal.hidden;
    stopAllAudio();
    s_white.play();
    break;

case 'play' :
    img.src = 'images/modal_img/modal_play.png';
    ep.innerHTML = "SEASON 3 EPISODE 2";
    title.innerHTML = "PLAYTEST";
    date.innerHTML = "08/23 - 09/22";
    info.innerHTML = "An American traveler short on cash signs up to test a revolutionary new gaming system, only to discover the thrills are a little too real.";
    modal.hidden = !modal.hidden;
    stopAllAudio();
    s_play.play();
    break;

case 'shut' :
    img.src = 'images/modal_img/modal_shut.png';
    ep.innerHTML = "SEASON 3 EPISODE 3";
    title.innerHTML = "SHUT UP AND DANCE";
    date.innerHTML = "06/22 - 07/22";
    info.innerHTML = "After a virus infects his laptop, a teen faces a daunting choice: carry out orders delivered by text message, or risk having intimate secrets exposed.";
    modal.hidden = !modal.hidden;
    stopAllAudio();
    s_shut.play();
    break;

case 'hated' :
    img.src = 'images/modal_img/modal_hated.png';
    ep.innerHTML = "SEASON 3 EPISODE 6";
    title.innerHTML = "HATED IN THE NATION";
    date.innerHTML = "12/22 - 01/19";
    info.innerHTML = "The death of a journalist at the senter of a social media firestorm leads a veteran detective and her tech-savvy apprentice to a chilling discovery.";
    modal.hidden = !modal.hidden;
    stopAllAudio();
    s_hated.play();
    break;

case 'black' :
    img.src = 'images/modal_img/modal_black.png';
    ep.innerHTML = "SEASON 4 EPISODE 6";
    title.innerHTML = "BLACK MUSEUM";
    date.innerHTML = "10/24 - 11/21";
    info.innerHTML = "On a dusty stretch of highway, a traveler stumbles across a museum that boasts rare criminal artifacts -- and a disturbing main attraction.";
    modal.hidden = !modal.hidden;
    stopAllAudio();
    s_black.play();
    break;

case 'entire' :
    img.src = 'images/modal_img/modal_entire.png';
    ep.innerHTML = "SEASON 1 EPISODE 3";
    title.innerHTML = "ENTIRE HISTORY OF YOU";
    date.innerHTML = "09/23 - 10/23";
    info.innerHTML = "In the near future, everyone has access to a memory implant that records everything humans do, see, and hear.";
    modal.hidden = !modal.hidden;
    stopAllAudio();
    s_entire.play();
    break;

case 'croc' :
    img.src = 'images/modal_img/modal_croc.png';
    ep.innerHTML = "SEASON 4 EPISODE 3";
    title.innerHTML = "CROCODILE";
    date.innerHTML = "07/23 - 08/22";
    info.innerHTML = "Architect Mia scrambles to keep a dark secret under wraps, while insurance investigator Shazia harvests people's memories of a nearby accident scene.";
    modal.hidden = !modal.hidden;
    stopAllAudio();
    s_croc.play();
    break;

case 'ark' :
    img.src = 'images/modal_img/modal_ark.png';
    ep.innerHTML = "SEASON 4 EPISODE 2";
    title.innerHTML = "ARKANGEL";
    date.innerHTML = "11/22 - 12/21";
    info.innerHTML = "Worried about her daughter's safety, single mom Marie signs up for a cutting-edge device that monitors the girl's whereabouts -- and much more. ";
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
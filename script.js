
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

function userPicked (whichOne){
    console.log('userPicked this function ' + whichOne )
}
    // modals //
const img = document.getElementById('img');
const ep = document.getElementById('ep');
const title = document.getElementById('title');
const date = document.getElementById('date');
const info = document.getElementById('info');

function userPicked(whichOne) {
    console.log('userPicked called: ' + whichOne);
    switch (whichOne) {
case 'noseObj' :
    img.src = 'images/modal_img/modal_nose.png';
    ep.innerHTML = "SEASON 3 EPISODE 1";
    title.innerHTML = "NOSEDIVE";
    date.innerHTML = "02/19 - 03/20";
    info.innerHTML = "A woman desperate to boost her social media score hits the jackpot when she’s invited to a swanky wedding. But the trip doesn’t go as planned."
    modal.hidden = !modal.hidden;
    break;

case 'ussObj' :
    img.src = 'images/modal_img/modal_uss.png';
    ep.innerHTML = "SEASON 4 EPISODE 1";
    title.innerHTML = "USS CALLISTER";
    date.innerHTML = "03/21 - 04/19";
    info.innerHTML = "Capt. Robert Daly presides over his crew with wisdom and courage. But a new recruit will soon discover nothing on this spaceship is what it seems."
    modal.hidden = !modal.hidden;
    break;

case 'sanObj' :
    img.src = 'images/modal_img/modal_san.png';
    ep.innerHTML = "SEASON 3 EPISODE 4";
    title.innerHTML = "SAN JUNIPERO";
    date.innerHTML = "04/20 - 05/20";
    info.innerHTML = "In a seaside town in 1987, a shy young woman and an outgoing party girl strike up a powerful bond that seems to defy the laws of space and time."
    modal.hidden = !modal.hidden;
    break;

case 'hangObj' :
    img.src = 'images/modal_img/modal_hang.png';
    ep.innerHTML = "SEASON 4 EPISODE 4";
    title.innerHTML = "NOSEDIVE";
    date.innerHTML = "02/19 - 3/20";
    info.innerHTML = "Paired up by a dating program that puts an expiration date on all relationships, Frank and Amy soon begin to question the system's logic."
    modal.hidden = !modal.hidden;
    break;

case 'whiteObj' :
    img.src = 'images/modal_img/modal_white.png';
    ep.innerHTML = "SEASON 2 EPISODE 2";
    title.innerHTML = "NOSEDIVE";
    date.innerHTML = "02/19 - 3/20";
    info.innerHTML = "Victoria wakes up and cannot remember anything about her life. Everyone she encounters refuses to communicate with her."
    modal.hidden = !modal.hidden;
    break;

case 'playObj' :
    img.src = 'images/modal_img/modal_play.png';
    ep.innerHTML = "SEASON 3 EPISODE 2";
    title.innerHTML = "NOSEDIVE";
    date.innerHTML = "02/19 - 03/20";
    info.innerHTML = "An American traveler short on cash signs up to test a revolutionary new gaming system, only to discover the thrills are a little too real."
    modal.hidden = !modal.hidden;
    break;

case 'shutObj' :
    img.src = 'images/modal_img/modal_shut.png';
    ep.innerHTML = "SEASON 3 EPISODE 3";
    title.innerHTML = "NOSEDIVE";
    date.innerHTML = "02/19 - 03/20";
    info.innerHTML = "After a virus infects his laptop, a teen faces a daunting choice: carry out orders delivered by text message, or risk having intimate secrets exposed."
    modal.hidden = !modal.hidden;
    break;

case 'hatedObj' :
    img.src = 'images/modal_img/modal_hated.png';
    ep.innerHTML = "SEASON 3 EPISODE 6";
    title.innerHTML = "NOSEDIVE";
    date.innerHTML = "02/19 - 03/20";
    info.innerHTML = "The death of a journalist at the senter of a social media firestorm leads a veteran detective and her tech-savvy apprentice to a chilling discovery."
    modal.hidden = !modal.hidden;
    break;

case 'blackObj' :
    img.src = 'images/modal_img/modal_black.png';
    ep.innerHTML = "SEASON 4 EPISODE 6";
    title.innerHTML = "NOSEDIVE";
    date.innerHTML = "02/19 - 03/20";
    info.innerHTML = "On a dusty stretch of highway, a traveler stumbles across a museum that boasts rare criminal artifacts -- and a disturbing main attraction."
    modal.hidden = !modal.hidden;
    break;

case 'entireObj' :
    img.src = 'images/modal_img/modal_entire.png';
    ep.innerHTML = "SEASON 1 EPISODE 3";
    title.innerHTML = "NOSEDIVE";
    date.innerHTML = "02/19 - 03/20";
    info.innerHTML = "In the near future, everyone has access to a memory implant that records everything humans do, see, and hear."
    modal.hidden = !modal.hidden;
    break;

case 'crocObj' :
    img.src = 'images/modal_img/modal_croc.png';
    ep.innerHTML = "SEASON 4 EPISODE 3";
    title.innerHTML = "CROCODILE";
    date.innerHTML = "02/19 - 03/20";
    info.innerHTML = "Architect Mia scrambles to keep a dark secret under wraps, while insurance investigator Shazia harvests people's memories of a nearby accident scene."
    modal.hidden = !modal.hidden;
    break;

case 'arkObj' :
    img.src = 'images/modal_img/modal_ark.png';
    ep.innerHTML = "SEASON 4 EPISODE 2";
    title.innerHTML = "ARKANGEL";
    date.innerHTML = "11/22 - 12/21";
    info.innerHTML = "Worried about her daughter's safety, single mom Marie signs up for a cutting-edge device that monitors the girl's whereabouts -- and much more. "
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
    AstroSign = "Cap";
  } else if ((whichMonth == 11 && whichDayOfMonth >= 22) || (whichMonth == 12 && whichDayOfMonth <= 21)) {
    AstroSign = "Sag";
  } else if ((whichMonth == 10 && whichDayOfMonth >= 24) || (whichMonth == 11 && whichDayOfMonth <= 21)) {
    AstroSign = "Sco";
  } else if ((whichMonth == 9 && whichDayOfMonth >= 23) || (whichMonth == 10 && whichDayOfMonth <= 23)) {
    AstroSign = "Lib";
  } else if ((whichMonth == 8 && whichDayOfMonth >= 23) || (whichMonth == 9 && whichDayOfMonth <= 22)) {
    AstroSign = "Vir";
  } else if ((whichMonth == 7 && whichDayOfMonth >= 23) || (whichMonth == 8 && whichDayOfMonth <= 22)) {
    AstroSign = "Leo";
  } else if ((whichMonth == 6 && whichDayOfMonth >= 22) || (whichMonth == 7 && whichDayOfMonth <= 22)) {
    AstroSign = "Can";
  } else if ((whichMonth == 5 && whichDayOfMonth >= 21) || (whichMonth == 6 && whichDayOfMonth <= 21)) {
    AstroSign = "Gem";
  } else if ((whichMonth == 4 && whichDayOfMonth >= 20) || (whichMonth == 5 && whichDayOfMonth <= 20)) {
    AstroSign = "Tau";
  } else if ((whichMonth == 3 && whichDayOfMonth >= 21) || (whichMonth == 4 && whichDayOfMonth <= 19)) {
    AstroSign = "Ari";
  } else if ((whichMonth == 2 && whichDayOfMonth >= 19) || (whichMonth == 3 && whichDayOfMonth <= 20)) {
    AstroSign = "Pis";
  } else if ((whichMonth == 1 && whichDayOfMonth >= 20) || (whichMonth == 2 && whichDayOfMonth <= 18)) {
    AstroSign = "Aqu";
  }

console.log('AstroSign is: ' + AstroSign);

}, false);



    // modal stuff//
const modal = document.getElementById('modal');
const closeModalObj = document.getElementById('btn-modal-close');

closeModalObj.addEventListener('click', function() {
  console.log('Close modal!');
  modal.hidden = !modal.hidden;
});


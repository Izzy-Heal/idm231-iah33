const HerObj = document.getElementById('hermes');
const DemObj = document.getElementById('demeter');
const DionObj = document.getElementById('dionysus');
const ApolObj = document.getElementById('apollo');
const HadeObj = document.getElementById('hades');
const AphroObj = document.getElementById('aphrodite');
const HeraObj = document.getElementById('hera');
const AthenObj = document.getElementById('athena');
const ZeusObj = document.getElementById('zeus');
const PosObj = document.getElementById('posideon');
const ArtObj = document.getElementById('artemis');
const AresObj = document.getElementById('ares');

const displayObj = document.getElementById('display');
const godNameObj = document.getElementById('title');
const dateRangeObj = document.getElementById('dateRange');
const infoObj = document.getElementById('info');
const helpObj = document.getElementById('help');

const sndAphroditeObj = document.getElementById('sndAphrodite');
const sndApolloObj = document.getElementById('sndApollo');
const sndAresObj = document.getElementById('sndAres')
const sndArtemisObj = document.getElementById('sndArtemis');
const sndAthenaObj = document.getElementById('sndAthena');
const sndDemeterObj = document.getElementById('sndDemeter')
const sndDionysusObj = document.getElementById('sndDionysus');
const sndHadesObj = document.getElementById('sndHades');
const sndHeraObj = document.getElementById('sndHera')
const sndHermesObj = document.getElementById('sndHermes');
const sndPoseidonObj = document.getElementById('sndPoseidon');
const sndZeusObj = document.getElementById('sndZeus')

helpObj.addEventListener('click', function(evt){
  console.log('help button clicked');
  const idName = evt.target.id;
  userPicked(idName);
});
HerObj.addEventListener('click', function (evt) {
    console.log('Hermes button clicked: ' + evt.target.id);
    const idName = evt.target.id;
    userPicked(idName);
  });
  
DemObj.addEventListener('click', function (evt) {
    console.log('Demeter button clicked: ' + evt.target.id);
    const idName = evt.target.id;
    userPicked(idName);
  });

DionObj.addEventListener('click', function (evt) {
    console.log('Dionysus button clicked: ' + evt.target.id);
    const idName = evt.target.id;
    userPicked(idName);
  });

ApolObj.addEventListener('click', function (evt) {
    console.log('Apollo button clicked: ' + evt.target.id);
    const idName = evt.target.id;
    userPicked(idName);
  });
  
HadeObj.addEventListener('click', function (evt) {
    console.log('Hades button clicked: ' + evt.target.id);
    const idName = evt.target.id;
    userPicked(idName);
  });

AphroObj.addEventListener('click', function (evt) {
    console.log('Aphrodite button clicked: ' + evt.target.id);
    const idName = evt.target.id;
    userPicked(idName);
  });

HeraObj.addEventListener('click', function (evt) {
    console.log('Apollo button clicked: ' + evt.target.id);
    const idName = evt.target.id;
    userPicked(idName);
  });
  
AthenObj.addEventListener('click', function (evt) {
    console.log('Hades button clicked: ' + evt.target.id);
    const idName = evt.target.id;
    userPicked(idName);
  });

ZeusObj.addEventListener('click', function (evt) {
    console.log('Aphrodite button clicked: ' + evt.target.id);
    const idName = evt.target.id;
    userPicked(idName);
  });

PosObj.addEventListener('click', function (evt) {
    console.log('Apollo button clicked: ' + evt.target.id);
    const idName = evt.target.id;
    userPicked(idName);
  });
  
ArtObj.addEventListener('click', function (evt) {
    console.log('Hades button clicked: ' + evt.target.id);
    const idName = evt.target.id;
    userPicked(idName);
  });

AresObj.addEventListener('click', function (evt) {
    console.log('Aphrodite button clicked: ' + evt.target.id);
    const idName = evt.target.id;
    userPicked(idName);
  });


  function userPicked(whichOne) {
    console.log('userPicked called: ' + whichOne);
    switch (whichOne) {
        case 'hermes':
            displayObj.src = 'portraits/hermes.png';
            godNameObj.innerHTML = 'Hermes';
            dateRangeObj.innerHTML = 'Dec 22 to Jan 19';
            infoObj.innerHTML = 'Hermes is the messenger god. He also controles dreams, roads, and doorways.';
            sndHermesObj.play();
        break;
        case 'demeter':
            displayObj.src = 'portraits/demeter.png';
            godNameObj.innerHTML = 'Demeter';
            dateRangeObj.innerHTML = 'Nov 22 to Dec 21';
            infoObj.innerHTML = 'Demeter is the godess of the harvest as well as the imortant cycle of life.';
            sndDemeterObj.play();
        break;  
        case 'dionysus':
            displayObj.src = 'portraits/dionysus.png';
            godNameObj.innerHTML = 'Dionysus';
            dateRangeObj.innerHTML = 'Oct 24 to Nov 21';
            infoObj.innerHTML = 'Dionysus is the god of parties, wine, and all around good times.';
            sndDionysusObj.play();
        break;
        case 'apollo':
            displayObj.src = 'portraits/apollo.png'
            godNameObj.innerHTML = 'Apollo';
            dateRangeObj.innerHTML = 'Sep 23 to Oct 23';
            infoObj.innerHTML = 'Apollo is the god of the sun, twin brother of artemis.';
            sndApolloObj.play();
        break;
        case 'hades':
            displayObj.src = 'portraits/hades.png';
            godNameObj.innerHTML = 'Hades';
            dateRangeObj.innerHTML = 'Aug 23 to Sep 22'
            infoObj.innerHTML = 'Hades is the god of the dead and is the brother of Poseidon and Zeus.';
            sndHadesObj.play();
        break;  
        case 'aphrodite':
            displayObj.src = 'portraits/aphrodite.png';
            godNameObj.innerHTML = 'Aphrodite';
            dateRangeObj.innerHTML = 'July 23 - Aug 22';
            infoObj.innerHTML = 'Aphrodite is the godess of love, romance and sexuality.';
            sndAphroditeObj.play();
        break;
        case 'hera':
            displayObj.src = 'portraits/hera.png';
            godNameObj.innerHTML = 'Hera';
            dateRangeObj.innerHTML = 'June 22 to July 22';
            infoObj.innerHTML = 'Hera is the godess of marriage and fertility, and is the wife of Zeus.';
            sndHeraObj.play();
        break;
        case 'athena':
            displayObj.src = 'portraits/athena.png';
            godNameObj.innerHTML = 'Athena';
            dateRangeObj.innerHTML = 'May 21 to June 21';
            infoObj.innerHTML = 'Athena is the godess of wisdom and stategy, espesially war tactics.';
            sndAthenaObj.play();
        break;  
        case 'zeus':
            displayObj.src = 'portraits/zeus.png';
            godNameObj.innerHTML = 'Zeus';
            dateRangeObj.innerHTML = 'Apr 20 to May 20';
            infoObj.innerHTML = 'The leader of the gods and the god of lighning. Brother of Hades and Posiedon.';
            sndZeusObj.play();
        break;
        case 'posideon':
            displayObj.src = 'portraits/poseidon.png';
            godNameObj.innerHTML = 'Poseidon';
            dateRangeObj.innerHTML = 'Mar 23 to Apr 19';
            infoObj.innerHTML = 'Poseidon is the god of the sea and brother of Zeus and Hades';
            sndPoseidonObj.play();
        break;
        case 'artemis':
            displayObj.src = 'portraits/artemis.png';
            godNameObj.innerHTML = 'Artemis';
            dateRangeObj.innerHTML = 'Feb 19 to Mar 20';
            infoObj.innerHTML = 'Twin sister to Apollo, Artemis is the godess of the moon and the hunt.';
            sndArtemisObj.play();
        break;  
        case 'ares':
            displayObj.src = 'portraits/ares.png';
            godNameObj.innerHTML = 'Ares';
            dateRangeObj.innerHTML = 'Jan 20 to Feb 18';
            infoObj.innerHTML = 'Ares is the god of war. He is short tempered and always looking for a fight';
            sndAresObj.play();
        break;
        case 'help':
            displayObj.src = 'portraits/blank.png';
            godNameObj.innerHTML = 'How To:';
            dateRangeObj.innerHTML = 'Either enter your birthday up top and click the submit button, or click one of the buttons below.';
            infoObj.innerHTML = '';

        default:
        displayObj.src = 'portraits/blank.png';
    }
  }

 const userSubmitObj = document.getElementById('userSubmit');

 userSubmitObj.addEventListener('click', function () {
    console.log('User submit button clicked');
  
    const userBday = new Date(document.getElementById('bday').value);
    console.log('userBday is: ' + userBday);
  
    // Figure out the zodiac sign based on month and of year and day of month
    let whichMonth = userBday.getUTCMonth();
    whichMonth++;
    console.log('whichMonth is: ' + whichMonth);
  
    const whichDayOfMonth = userBday.getUTCDate();
    console.log('whichDayOfMonth is: ' + whichDayOfMonth);
 

    let AstroSign = "";

    if ((whichMonth == 12 && whichDayOfMonth >= 22) || (whichMonth == 1 && whichDayOfMonth <= 19)) {
        AstroSign = "hermes";
      } else if ((whichMonth == 11 && whichDayOfMonth >= 22) || (whichMonth == 12 && whichDayOfMonth <= 21)) {
        AstroSign = "demeter";
      } else if ((whichMonth == 10 && whichDayOfMonth >= 24) || (whichMonth == 11 && whichDayOfMonth <= 21)) {
        AstroSign = "dionysus";
      } else if ((whichMonth == 9 && whichDayOfMonth >= 23) || (whichMonth == 10 && whichDayOfMonth <= 23)) {
        AstroSign = "apollo";
      } else if ((whichMonth == 8 && whichDayOfMonth >= 23) || (whichMonth == 9 && whichDayOfMonth <= 22)) {
        AstroSign = "hades";
      } else if ((whichMonth == 7 && whichDayOfMonth >= 23) || (whichMonth == 8 && whichDayOfMonth <= 22)) {
        AstroSign = "aphrodite";
      } else if ((whichMonth == 6 && whichDayOfMonth >= 22) || (whichMonth == 7 && whichDayOfMonth <= 22)) {
        AstroSign = "hera";
      } else if ((whichMonth == 5 && whichDayOfMonth >= 21) || (whichMonth == 6 && whichDayOfMonth <= 21)) {
        AstroSign = "athena";
      } else if ((whichMonth == 4 && whichDayOfMonth >= 20) || (whichMonth == 5 && whichDayOfMonth <= 20)) {
        AstroSign = "zeus";
      } else if ((whichMonth == 3 && whichDayOfMonth >= 21) || (whichMonth == 4 && whichDayOfMonth <= 19)) {
        AstroSign = "posideon";
      } else if ((whichMonth == 2 && whichDayOfMonth >= 19) || (whichMonth == 3 && whichDayOfMonth <= 20)) {
        AstroSign = "artemis";
      } else if ((whichMonth == 1 && whichDayOfMonth >= 20) || (whichMonth == 2 && whichDayOfMonth <= 18)) {
        AstroSign = "ares";
      }
    
      console.log('AstroSign is: ' + AstroSign);
    
      userPicked(AstroSign);
    }); 
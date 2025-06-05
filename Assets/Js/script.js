//Referencias al DOM
const formBuscar = document.getElementById('formBuscar');
const txtBuscar = document.getElementById('txtBuscar');
const btnMostrarTodos = document.getElementById('btnMostrarTodos');
const contenedor = document.getElementById('personajes');

//URL de imagenes de personajes enumerado por id.
const imageMap = {
  1: 'https://preview.redd.it/gerald-broflovski-v0-xxipes5625sb1.gif?format=png8&s=710e69cd2c83efafd068d499601201cd33a95115',
  2: 'https://pbs.twimg.com/media/CzHvAZ9UAAAGYQn.jpg',
  3: 'https://imgix.ranker.com/list_img_v2/2392/2862392/original/2862392-u1?auto=format&q=50&fit=crop&fm=pjpg&dpr=2&crop=faces&h=185.86387434554973&w=355',
  4: 'https://www.looper.com/img/gallery/trey-parkers-3-year-old-daughter-once-voiced-ike-on-south-park/l-intro-1677815697.jpg',
  5: 'https://pbs.twimg.com/media/DsAr7fuVYAAE2V0.jpg',
  6: 'https://y.yarn.co/530bd16a-b26d-40df-b952-10df555efdba_screenshot.jpg',
  7: 'https://images.paramount.tech/path/mgid:file:gsp:entertainment-assets:/sps/shared/characters/groups/main-families-murrey-brovflovski.png?height=165',
  8: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRssH13bmvbx_QyWrG290NVa86g04-wj9jE8A&s',
  9: 'https://i.redd.it/w7i0o3p6dt5b1.jpg',
  10: 'https://comicvine.gamespot.com/a/uploads/scale_small/13/135098/6832409-3341648114-liane.jpg',
  11: 'https://i.redd.it/ldktx54h4koa1.jpg',
  12: 'https://i.redd.it/4tsls7w8kfce1.jpeg',
  13: 'https://static.wikia.nocookie.net/southparkla/images/5/55/Fofa.jpg/revision/latest?cb=20120810200101&path-prefix=es',
  14: 'https://static.wikia.nocookie.net/southparkla/images/1/1d/Florencia_Cartman.jpg/revision/latest?cb=20121229040807&path-prefix=es',
  15: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/84707089-0625-40f8-9416-da48a7e76fa8/df5ug25-2fc0717b-1127-4cff-846e-50835eee364b.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzg0NzA3MDg5LTA2MjUtNDBmOC05NDE2LWRhNDhhN2U3NmZhOFwvZGY1dWcyNS0yZmMwNzE3Yi0xMTI3LTRjZmYtODQ2ZS01MDgzNWVlZTM2NGIucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.koaOQjv8sJlIeJiH52P4PZTP0OE2eokFnDMYhfGY1lE',
  16: 'https://static.wikia.nocookie.net/southparkla/images/6/6a/Mabel_Cartman.png/revision/latest?cb=20120727150222&path-prefix=es',
  17: 'https://static.wikia.nocookie.net/southpark/images/1/10/Harold-cartman.png/revision/latest?cb=20170317040658',
  18: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/84707089-0625-40f8-9416-da48a7e76fa8/df6a3to-636555b6-25a9-4940-b777-1736680c9436.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzg0NzA3MDg5LTA2MjUtNDBmOC05NDE2LWRhNDhhN2U3NmZhOFwvZGY2YTN0by02MzY1NTViNi0yNWE5LTQ5NDAtYjc3Ny0xNzM2NjgwYzk0MzYucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.KeQBWJTerJHY2vjIPBhyMY1UzFKqLzamF3nTwDe8xi4',
  19: 'https://static.wikia.nocookie.net/southparkla/images/4/45/Lisa_Cartman.jpg/revision/latest?cb=20120727151441&path-prefix=es',
  20: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHHS_CAzEVRgBgNTAH2Iso7jJmQ4fqoSUB6A&s',
  21: 'https://static.wikia.nocookie.net/southparkla/images/3/3d/Fred_Cartman.jpg/revision/latest?cb=20120729151456&path-prefix=es',
  22: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-viU2mimYM2F5yyeD36g3a9rAz2VUSPkQaw&s',
  23: 'https://images.paramount.tech/uri/mgid:arc:imageassetref:shared.southpark.latam.en-us:0bee656d-e81d-4e0e-9859-dd7e153bf5a8?quality=0.7&gen=ntrn&format=jpg&width=1200&height=630&crop=true',
  24: 'https://i.ytimg.com/vi/PDLTIfEtd_g/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAAHQkCac4bSrUSGO6kHAPigjlhww',
  25: 'https://static.wikia.nocookie.net/southpark/images/0/03/Cartman_Uncle_Funeral.png/revision/latest?cb=20230327233737',
  26: 'https://static.wikia.nocookie.net/southpark/images/a/a4/Yentl_Cartman.png/revision/latest/scale-to-width/360?cb=20211130040929',
  27: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbAa_pWve-it6HcJZjYhKcmQWlPVobTkpbdg&s',
  28: 'https://static.wikia.nocookie.net/southpark/images/8/8c/Moisha_Cartman.png/revision/latest?cb=20211130040927',
  29: 'https://media.tenor.com/hWiwjs98dcwAAAAe/laughs-fuck-you-uncle-kyle-hackelm-cartman.png',
  30: 'https://images.paramount.tech/uri/mgid:arc:imageassetref:shared.southpark.latam.en-us:9047cb22-4cb0-41b8-85a7-fcf0177f3ae8?quality=0.7&gen=ntrn',
  31: 'https://images.paramount.tech/uri/mgid:arc:imageassetref:shared.southpark.global:4a175748-31cd-4af6-8c40-397c405bf771?quality=0.7&gen=ntrn',
  32: 'https://m.media-amazon.com/images/M/MV5BZWZjYzI0ZGItNDY5Yy00MzAzLTgxMzEtOGRmZTI4ZjA0OTY0XkEyXkFqcGdeQVRoaXJkUGFydHlJbmdlc3Rpb25Xb3JrZmxvdw@@._V1_QL75_UX500_CR0,0,500,281_.jpg',
  33: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTV2aNZWD9VXbGlWqMyKzloex0puRNtjCQ1yg&s',
  34: 'https://media2.giphy.com/media/l0Hlx9qtQaWzV3XHi/giphy_s.gif',
  35: 'https://static.wikia.nocookie.net/spsot/images/c/c5/Sparky_command.jpg/revision/latest?cb=20140328013512',
  36: 'https://static.wikia.nocookie.net/southparkfanon/images/1/1d/Jimbo.png/revision/latest?cb=20080821000444',
  37: 'https://static.wikia.nocookie.net/southpark/images/0/00/Grandma-marsh.png/revision/latest?cb=20170317041923',
  38: 'https://static.wikia.nocookie.net/south-park/images/a/a3/Frg6yh.png/revision/latest?cb=20140308132959&path-prefix=pt-br',
  39: 'https://m.media-amazon.com/images/M/MV5BNzhhNDk4ZjYtZTIwNy00ZTJmLTg0NjEtMmExN2RmZGU5MWU4XkEyXkFqcGc@._V1_QL75_UY281_CR155,0,190,281_.jpg',
  40: 'https://static.wikia.nocookie.net/southpark/images/7/7c/StuartSPS.jpg/revision/latest?cb=20120220231741',
  41: 'https://comicvine.gamespot.com/a/uploads/scale_small/11134/111342609/7142570-973306_1331515207377_full.jpg.png',
  42: 'https://w0.peakpx.com/wallpaper/260/571/HD-wallpaper-south-park-tv-show-kenny-mccormick.jpg',
  43: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBizSuFiAjecf2Ox0_C2TkC4jj6mT4-j9lYA&s',
  44: 'https://static.wikia.nocookie.net/p__/images/d/d8/Karen_McCormick_pijama.png/revision/latest?cb=20230714101419&path-prefix=protagonist',
  45: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/84707089-0625-40f8-9416-da48a7e76fa8/df6wco6-0e1b483c-74ff-49e9-9b35-abef4a71db06.png/v1/fit/w_414,h_388/character_icons__grandpa_mccormick_by_cartman1235_df6wco6-414w.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzQzIiwicGF0aCI6IlwvZlwvODQ3MDcwODktMDYyNS00MGY4LTk0MTYtZGE0OGE3ZTc2ZmE4XC9kZjZ3Y282LTBlMWI0ODNjLTc0ZmYtNDllOS05YjM1LWFiZWY0YTcxZGIwNi5wbmciLCJ3aWR0aCI6Ijw9NzkyIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.8AC3V2ZP4f3zh3Krt96zpJOqfYqT0JispM6AWDVwD_0',
  46: 'https://static.wikia.nocookie.net/spsot/images/f/fc/Mradamsscreenshot.png/revision/latest?cb=20180702211313',
  47: 'https://i.pinimg.com/736x/52/c2/c6/52c2c6a9d3cf7805f4fa873a79398560.jpg',
  48: 'https://static.wikia.nocookie.net/southpark/images/8/86/Millard_Anderson%27s_unused_icon.jpeg/revision/latest/scale-to-width-down/250?cb=20230213221437',
  49: 'https://static.wikia.nocookie.net/southpark/images/3/30/Mrs-Anderson.png/revision/latest?cb=20210222083828',
  50: 'https://static.wikia.nocookie.net/spsot/images/5/5d/Filmore_facebook_profile.png/revision/latest?cb=20141118155553',
  51: 'https://static.wikia.nocookie.net/southpark/images/1/1b/Rosie-odonnell.png/revision/latest?cb=20201120221808&path-prefix=fr',
  52: 'https://images.paramount.tech/uri/mgid:arc:imageassetref:shared.southpark.latam.en-us:f3b9de2d-435a-4485-b77f-186376774df5?quality=0.7&gen=ntrn&format=jpg&width=1200&height=630&crop=true',
  53: 'https://static.wikia.nocookie.net/southpark/images/1/11/Barbrady_family_mrs_barbrady.png/revision/latest?cb=20190705220607',
  54: 'https://static.wikia.nocookie.net/southpark/images/d/d9/Barbradys-dog.png/revision/latest?cb=20170121031305',
  55: 'https://static.wikia.nocookie.net/southpark/images/d/de/Mr._Biggles-Butters.transparent.png/revision/latest?cb=20170605104401',
  56: 'https://static.wikia.nocookie.net/southparkla/images/c/c6/MrsBiggle.png/revision/latest?cb=20120924034736&path-prefix=es',
  57: 'https://pm1.aminoapps.com/6967/2e853fa463319aa6ec0a5845a3f1aff0bb9215dcr1-400-300v2_uhq.jpg',
  58: 'https://i.pinimg.com/736x/35/c3/a2/35c3a2f3b41437859c1950cb3b99a764.jpg',
  59: 'https://static.wikia.nocookie.net/southpark/images/c/cd/Mr.Black.png/revision/latest?cb=20161120020241',
  60: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIHOXDuuI0GkefjFveoRBLXAbZFzPHoAyyWA&s',
  61: 'https://pm1.aminoapps.com/6262/0fc87e6ea85fff8e27aff914e7b66c23ca5e7588_00.jpg',
  62: 'https://static.wikia.nocookie.net/southpark/images/8/8c/Richard-burch-0.png/revision/latest?cb=20170806103857',
  63: 'https://static.wikia.nocookie.net/spongebob-new-fanon/images/8/89/Profile_-_Helen_Burch.png/revision/latest?cb=20220209091510',
  64: 'https://static.wikia.nocookie.net/spongebob-new-fanon/images/4/40/Doctor_Timothy.png/revision/latest?cb=20211101092604',
  65: 'https://images.paramount.tech/uri/mgid:arc:imageassetref:shared.southpark.latam.en-us:1efc4beb-9ebd-4513-a4fd-e32892e98d8a?quality=0.7&gen=ntrn',
  66: 'https://static.wikia.nocookie.net/southpark/images/8/88/Charlottes-father-thomas.png/revision/latest/smart/width/250/height/250?cb=20170331083014',
  67: 'https://static.wikia.nocookie.net/southpark/images/b/be/Charlottes-mother.png/revision/latest?cb=20170331085601',
  68: 'https://images.paramount.tech/path/mgid:file:gsp:entertainment-assets:/sps/shared/characters/kids/canadians-charlotte.png?height=165',
  69: 'https://images.paramount.tech/path/mgid:file:gsp:entertainment-assets:/sps/shared/characters/kids/charlottes-family-1st-3rd-graders-charlottes-brother.png',
  70: 'https://static.wikia.nocookie.net/southpark/images/c/ce/Charlottes-sister.png/revision/latest?cb=20170403113144',
  71: 'https://static.wikia.nocookie.net/southpark/images/c/c2/Charlottes-grandmother.png/revision/latest?cb=20170404110637',
  72: 'https://static.wikia.nocookie.net/southpark/images/a/a0/Mr-cotswolds.png/revision/latest?cb=20170122030203',
  73: 'https://m.media-amazon.com/images/M/MV5BMTQ4NTU4MzM2Nl5BMl5BanBnXkFtZTgwMjY5Njg0MjE@._V1_FMjpg_UX1000_.jpg',
  74: 'https://static.wikia.nocookie.net/southpark/images/d/dc/Mark-cotswolds.png/revision/latest/thumbnail/width/360/height/450?cb=20161124174834',
  75: 'https://static.wikia.nocookie.net/loveinterest/images/4/47/312_Monkey_Phonics_9.jpg/revision/latest?cb=20130310123501',
  76: 'https://media.tenor.com/GnWUucRg26AAAAAe/thats-good-william-daniels.png',
  77: 'https://static.wikia.nocookie.net/southpark/images/d/d1/Mrs-daniels.png/revision/latest/smart/width/386/height/259?cb=20170118042110',
  78: 'https://static.wikia.nocookie.net/southpark/images/e/e4/Nichole_2.png/revision/latest/thumbnail/width/360/height/450?cb=20211125042847',
  79: 'https://static.wikia.nocookie.net/southpark/images/4/47/Mrs-feegan.png/revision/latest?cb=20200821110813',
  80: 'https://static.wikia.nocookie.net/southpark/images/4/42/BetsyFuneral.png/revision/latest/scale-to-width-down/250?cb=20120317044416',
  81: 'https://oyster.ignimgs.com/mediawiki/apis.ign.com/south-park-the-stick-of-truth/d/d2/Clyde.jpg',
  82: 'https://static.wikia.nocookie.net/southparkla/images/5/5f/Rex.png/revision/latest?cb=20230303205802&path-prefix=es',
  83: 'https://static.wikia.nocookie.net/southpark/images/c/cb/Mr-feegan.png/revision/latest?cb=20200821110739',
  84: 'https://static.wikia.nocookie.net/southpark/images/4/47/Mrs-feegan.png/revision/latest?cb=20200821110813',
  85: 'https://static.wikia.nocookie.net/southpark/images/5/58/Larry-feegan.png/revision/latest?cb=20190910200016',
  86: 'https://images.paramount.tech/uri/mgid:arc:imageassetref:shared.southpark.latam:e40ca6eb-74fc-11ea-a59c-0a7527021758?quality=0.7&gen=ntrn',
  87: 'https://static.wikia.nocookie.net/southpark/images/f/f1/Mrs_garrison_senior.jpg/revision/latest?cb=20110429203141',
  88: 'https://images.paramount.tech/path/mgid:file:gsp:entertainment-assets:/sps/shared/characters/adults/mrgarrison.png',
  89: 'https://static.wikia.nocookie.net/southpark/images/e/e1/Adults-sophie-grays-mom.png/revision/latest?cb=20191220023549',
  90: 'https://images.paramount.tech/path/mgid:file:gsp:entertainment-assets:/sps/shared/characters/kids/4th-graders-sophie-gray.png?height=165',
  91: 'https://static.wikia.nocookie.net/villains/images/e/ed/Screen_Shot_2020-05-12_at_11.18.30_PM.png/revision/latest/thumbnail/width/360/height/450?cb=20200513032725',
  92: 'https://static.wikia.nocookie.net/southpark/images/8/81/Mrsgueermo.png/revision/latest/scale-to-width/360?cb=20170122031002',
  93: 'https://static.wikia.nocookie.net/southpark/images/1/1a/Bridon_butterballs.png/revision/latest?cb=20120412225102',
  94: 'https://static.wikia.nocookie.net/southpark/images/a/a9/Mr-hakeem.png/revision/latest?cb=20170122031829',
  95: 'https://static.wikia.nocookie.net/southpark/images/d/d5/Mrs-hakeem.png/revision/latest?cb=20170122031903',
  96: 'https://static.wikia.nocookie.net/southpark/images/a/ac/Baahir-abdul.png/revision/latest?cb=20160405213237',
  97: 'https://images.paramount.tech/uri/mgid:arc:imageassetref:shared.southpark.latam.en-us:cac30b42-926f-4be6-80b9-d96f4b7307f0?quality=0.7&gen=ntrn&format=jpg&width=1200&height=630&crop=true',
  98: 'https://images.paramount.tech/path/mgid:file:gsp:entertainment-assets:/sps/shared/characters/celebrities/autumn-hankey.jpg?height=165',
  99: 'https://static.wikia.nocookie.net/spsot/images/f/f1/Cornwallis_Hankey_facebook_profile.png/revision/latest/thumbnail/width/360/height/450?cb=20141025174922',
  100: 'https://static.wikia.nocookie.net/spsot/images/4/44/Ic_por_amber_lrg.png/revision/latest/thumbnail/width/360/height/450?cb=20150127122311',
  101: 'https://static.wikia.nocookie.net/spsot/images/a/a2/Simon_facebook_profile.png/revision/latest/thumbnail/width/360/height/450?cb=20141024135932',
  102: 'https://static.wikia.nocookie.net/southpark/images/c/cd/HarrisonMr.png/revision/latest?cb=20160405172827',
  103: 'https://static.wikia.nocookie.net/southpark/images/3/3e/HarrisonMrs.png/revision/latest?cb=20160405172937',
  104: 'https://images.paramount.tech/path/mgid:file:gsp:entertainment-assets:/sps/shared/characters/kids/5th-9th-grader-mark-harrison.png?height=165',
  105: 'https://static.wikia.nocookie.net/southparkla/images/5/5f/HarrisonGary.png/revision/latest?cb=20220203222123&path-prefix=es',
  106: 'https://static.wikia.nocookie.net/southpark/images/5/56/HarrisonJenny.png/revision/latest?cb=20160405173158',
  107: 'https://static.wikia.nocookie.net/southpark/images/3/37/HarrisonDave.png/revision/latest?cb=20160405212326',
  108: 'https://static.wikia.nocookie.net/southpark/images/e/ef/HarrisonAmanda.png/revision/latest?cb=20160405212638'

  //Se siguen las id, pero son demasiadas.
};


//Llamo a la API.

async function fetchPage(searchTerm = '', page = 1) {
  try {
    let url = `https://spapi.dev/api/characters?page=${page}`;
    if (searchTerm) {
      url += `&search=${encodeURIComponent(searchTerm)}`;
    }
    const respuesta = await fetch(url);
    if (!respuesta.ok) throw new Error(`HTTP ${respuesta.status}`);
    return await respuesta.json();
  } catch {
    return null;
  }
}

//Obtener todos los personajes recopilando las paginas y recorriendolas.
async function fetchAllPersonajes(searchTerm = '') {
  const todos = [];
  //Empieza con la página 1
  let page = 1;
  let json = await fetchPage(searchTerm, page);
  if (!json || !Array.isArray(json.data)) return todos;

  //Agrega la página 1
  todos.push(...json.data);
  const lastPage = json.meta?.last_page || 1;

  //Si hay más páginas, que siga a la siguiente
  while (page < lastPage) {
    page++;
    json = await fetchPage(searchTerm, page);
    if (!json || !Array.isArray(json.data)) break;
    todos.push(...json.data);
  }

  return todos;
}


//implementacion de tarjetas para un arreglo de los personajes.

function renderPersonajes(arr) {
  contenedor.innerHTML = '';
  if (!arr.length) {
    contenedor.innerHTML = '<p class="text-center">No se encontraron personajes.</p>';
    return;
  }

  arr.forEach(p => {
    const card = document.createElement('div');
    card.className = 'personaje-card';

    //URL de imagen basado en el id
    const imgUrl = imageMap[p.id] || '';
    if (imgUrl) {
      const img = document.createElement('img');
      img.src = imgUrl;
      img.alt = p.name;
      card.appendChild(img);
    }

    //Aqui recopilamos la informacion de los personajes, nombre, edad, sexo, ocupacion, religion, etc.
    const info = document.createElement('div');
    info.className = 'info';

    const nombre = document.createElement('h2');
    nombre.textContent = p.name;
    info.appendChild(nombre);

    const edad = document.createElement('p');
    edad.textContent = `Edad: ${p.age || 'Desconocida'}`;
    info.appendChild(edad);

    const sexo = document.createElement('p');
    sexo.textContent = `Sexo: ${p.sex || 'Desconocido'}`;
    info.appendChild(sexo);

    const ocupacion = document.createElement('p');
    ocupacion.textContent = `Ocupacion: ${p.occupation || 'Desconocida'}`;
    info.appendChild(ocupacion);

    const religion = document.createElement('p');
    religion.textContent = `Religion: ${p.religion || 'Desconocida'}`;
    info.appendChild(religion);

    card.appendChild(info);
    contenedor.appendChild(card);

    card.appendChild(info);
    contenedor.appendChild(card);
  });
}
//Busqueda por filtro con un nombre especifico o parecido
formBuscar.addEventListener('submit', async (e) => {
  e.preventDefault();
  const term = txtBuscar.value.trim();
  if (!term) return;
//Hacemos que el logo de "cargando" de Boostrap aparezca cuando se presiona el boton de buscar
  contenedor.innerHTML = `
  <div class="d-flex justify-content-center align-items-center" 
         style="height: 60vh;">
      <div class="spinner-border text-primary" role="status"
           style="width: 3rem; height: 3rem;">
  </div>
`;
  //Aqui tenemos solo la primera pagina con ese filtro
  const jsonPrimera = await fetchPage(term, 1);
  renderPersonajes(Array.isArray(jsonPrimera?.data) ? jsonPrimera.data : []);
});

//"Recorremos todas las paginas para mostrar toda la informacion.
btnMostrarTodos.addEventListener('click', async () => {
  //Limpiar busqueda
  txtBuscar.value = '';
  //Hacemos que el logo de "cargando" de Boostrap aparezca cuando se presiona el boton de mostrar todos.
  contenedor.innerHTML = `
  <div class="d-flex justify-content-center align-items-center" 
         style="height: 60vh;">
      <div class="spinner-border text-primary" role="status"
           style="width: 3rem; height: 3rem;">
  </div>
`;

  const todos = await fetchAllPersonajes('');
  renderPersonajes(todos);
});


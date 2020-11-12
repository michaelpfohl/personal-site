import musicData from '../../helpers/data/musicData';

const buildMusic = () => {
  let domString = '';
  const music = musicData.getMusic();
  for (let i = 0; i < music.length; i += 1) {
    domString += `<div class="album--card">
                    <img src=${music[i].image} alt=${music[i].imageAlt} class="album--image"/>
                    <h1 class="album--title">${music[i].albumTitle}</h1>
                    <h2 class="album--artist">${music[i].albumArtist}</h2>
                    <div class="album--links">
                      <a href=${music[i].spotifyLink} target="_blank"><i class="fab fa-spotify"></i></a><a href=${music[i].appleLink} target="_blank"><i class="fab fa-apple"></i></a><a href=${music[i].bandcampLink} target="_blank"><i class="fab fa-bandcamp"></i><a>
                    </div>
                </div>`;
  }
  return domString;
};

const musicCards = () => {
  $('#app').html(
    `<div class="main--container">
          ${buildMusic()}
      </div>`
  );
};

export default { musicCards };

import bio from '../bio/bio';
import projects from '../projects/projects';
import music from '../music/music';

const navbar = () => {
  $('#nav').html(`
    <nav>
    <h1 class="name--header"><a href="index.html">Michael·Pfohl</a></h1>
    <ul class="nav--links" id="nav--links">
      <li><a href="#bio--page" class="nav--bio" id="nav--bio">Bio</a></li>
      <li>
        <a href="#tech--page" class="nav--technologies" id="nav--technologies"
          >Technologies</a
        >
      </li>
      <li>
        <a href="#" class="nav--projects" id="nav--projects">Projects</a>
      </li>
      <li>
        <a href="#" class="nav--music" id="nav--music">Music</a>
      </li>
      <li><a href="#" class="nav--podcast" id="nav--podcast">Podcast</a></li>
    </ul>
  </nav>
    `);

  $('#nav--bio').on('click', () => bio.bio());
  $('#nav--technologies').on('click', () => bio.bio());
  $('#nav--projects').on('click', () => projects.projects());
  $('#nav--music').on('click', () => music.musicCards());
};

export default { navbar };

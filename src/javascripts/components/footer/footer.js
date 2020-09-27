const footer = () => {
  $('#footer').html(`
    <footer>
      <div class="footer--container">
        <a href="https://github.com/michaelpfohl" target="_blank"><i class="fab fa-github"></i></a>
        <a href="https://www.linkedin.com/in/michael-pfohl/" target="_blank"><i class="fab fa-linkedin"></i></a>
        <a href="https://twitter.com/YachtRockBoy" target="_blank"><i class="fab fa-twitter"></i></a>
        <a href="https://open.spotify.com/artist/7MouEGrWt0YWioUMltNdhG?si=mKQObC1kQxq0wjtXo_Qxzg" target="_blank"><i class="fab fa-spotify"></i></a>
      </div>
      <p class="footer--copyright">©2020 Michael Pfohl</p>
    </footer>
    `);
};

export default { footer };

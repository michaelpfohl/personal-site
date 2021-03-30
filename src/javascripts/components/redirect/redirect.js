const redirect = () => {
  $('#nav').html(`
      <nav>
      <h1 class="name--header"><a href="index.html">Michael·Pfohl</a></h1>
      <div class="redirect-container">
        <h2 class="redirect-text">Site has moved, please click <a class="redirect-link" href="https://michael-pfohl.netlify.app/">here</a> to view updated site</h2>
      </div>
    </nav>
      `);
};

export default { redirect };

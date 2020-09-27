import navbar from './components/navbar/navbar';
import bio from './components/bio/bio';
import footer from './components/footer/footer';

import '../styles/main.scss';

const init = () => {
  navbar.navbar();
  bio.bio();
  footer.footer();
};

init();

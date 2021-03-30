// import projectsData from '../../helpers/data/projectsData';

// const buildProjects = () => {
//   let domString = '';
//   const projects = projectsData.getProjects();
//   for (let i = 0; i < projects.length; i += 1) {
//     if (projects[i].available) {
//       domString += `<div class="project--card">
//                           <img src="${projects[i].screenshot}" alt="${projects[i].title}" class="project--image">
//                           <div class="project--details">
//                            <h1 class="project--details-title">${projects[i].title}</h1>
//                            <p class="project--details-description">${projects[i].description}</p>
//                            <p class="project--details-technologies">${projects[i].technologiesUsed}</p>
//                            <a href="${projects[i].githubUrl}" class="project--details-link" target="_blank"><i class="fab fa-github"></i></a>
//                            <a href="${projects[i].url}" class="project--details-link" target="_blank"><i class="fas fa-eye"></i></a>
//                           </div>
//                         </div>`;
//     }
//   }
//   return domString;
// };

// const projects = () => {
//   $('#app').html(
//     `<div class="main--container">
//         ${buildProjects()}
//     </div>`
//   );
// };

// export default { projects };

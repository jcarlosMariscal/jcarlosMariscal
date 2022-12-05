const d = document,
  w = window;
d.addEventListener("DOMContentLoaded", (e) => {
  const home_cv = d.getElementById("home-cv");
  const open_cv = d.getElementById("open");
  open_cv.addEventListener("click", (e) => {
    let modal = `
    <div class="modal fade modal-con-cv" id="open-cv" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-cv modal-dialog modal-lg">
        <div class="modal-content md-cv">
          <embed src="assets/CV.pdf" type="application/pdf" class="embed-cv"/>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal"><i class="fa-solid fa-xmark"></i> Close</button>
          </div>
        </div>
      </div>
    </div>`;
    home_cv.innerHTML += modal;
    var openCv = new bootstrap.Modal(document.getElementById("open-cv"), {
      keyboard: false,
    });
    openCv.show();
  });

  const getProjects = async () => {
    try {
      let res = await fetch("./assets/bd/projects.json");
      let json = await res.json();
      if (!res.ok) throw { status: res.status, statusText: res.statusText };

      const projects = d.getElementById("art-projects");
      let fragment = d.createDocumentFragment();
      const modalImg = (imgWeb, id) => {
        return `
          <div class="modal fade bd-example-modal-lg" id="img-${id}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="mt5g modal-dialog modal-lg">
              <div class="modal-content">
                <img class="img-web-complete" src="${imgWeb.img}"></img>
              </div>
            </div>
          </div>`;
      };
      // console.log(json[1]);
      for (let i = 0; i < json.length; i++) {
        const article = d.createElement("article");
        article.classList.add("projects__project");
        const project_img = d.createElement("div");
        project_img.classList.add("project__img");
        const project_technologies = d.createElement("div");
        project_technologies.classList.add("project__technologies");
        // console.log(json[i]);
        var id = json[i].id,
          image = json[i].image,
          title = json[i].title,
          description = json[i].description,
          workArea = json[i].workArea,
          tech = json[i].technologies,
          links = json[i].links,
          imgWeb = json[i].imgWeb;
        fecha = json[i].fecha;
        project_img.innerHTML = `
                    <img src="${image}" alt="">
                    <div class="project__title">
                        <h3>${title}</h3>
                        <div class="project__btn">
                            ${
                              links[0].url
                                ? `<a href="${links[0].url}" target="_blank" class="btn-i btn__github"><i class="fab fa-github"></i></a>`
                                : ""
                            }
                            <a href="#" class="btn-i btn__github" data-bs-toggle="modal" data-bs-target="#details${id}"><i class="fa-solid fa-circle-info"></i></a>
                            ${
                              links[1].url
                                ? `<a href="${links[1].url}" target="_blank" class="btn-i btn__site"><i class="fa-solid fa-earth-americas"></i></a>`
                                : imgWeb
                                ? `<a href="#" data-bs-toggle="modal" data-bs-target="#img-web${id}" class="btn-i btn__site"><i class="fa-solid fa-images"></i></a>`
                                : ""
                            }
                        </div>
                    </div>`;
        article.appendChild(project_img);
        for (let j = 0; j < json[i].technologies.length; j++) {
          // console.log(json[i].technologies[j]);
          project_technologies.innerHTML += `
                    ${
                      tech[j]
                        ? `<span class="icon-tech"><img src="${json[i].technologies[j].icon}" alt="${tech[j].name}"></img></span>`
                        : ``
                    }`;
        }
        article.appendChild(project_technologies);
        article.innerHTML += `
          <div class="modal fade" id="details${id}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-xl">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">${title}</h5>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                  <img class="modal__img" src="${image}"></img>
                  <p class="modal__description description__fecha">- ${fecha}</p>
                  <p class="modal__description">${description}</p>
                  <p class="modal__description">${workArea}</p>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                </div>
              </div>
            </div>
          </div>
          <div class="modal fade" id="img-web${id}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-xl">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">${title}</h5>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                  ${
                    !imgWeb
                      ? `<p class="modal__description">Parece que no hay imágenes sobre este proyecto.</p>`
                      : ``
                  }
                                <div class="sec__img-web">
                                    ${
                                      imgWeb[0]
                                        ? `<div class="img-web-content"><span>${imgWeb[0].name}</span><img data-bs-toggle="modal" data-bs-target="#img-1" class="img-web" src="${imgWeb[0].img}"></div>`
                                        : ``
                                    }
                                    ${
                                      imgWeb[1]
                                        ? `<div class="img-web-content"><span>${imgWeb[1].name}</span><img data-bs-toggle="modal" data-bs-target="#img-2" class="img-web" src="${imgWeb[1].img}"></img></div>`
                                        : ``
                                    }
                                    ${
                                      imgWeb[2]
                                        ? `<div class="img-web-content"><span>${imgWeb[2].name}</span><img data-bs-toggle="modal" data-bs-target="#img-3" class="img-web" src="${imgWeb[2].img}"></img></div>`
                                        : ``
                                    }
                                    ${
                                      imgWeb[3]
                                        ? `<div class="img-web-content"><span>${imgWeb[3].name}</span><img data-bs-toggle="modal" data-bs-target="#img-4" class="img-web" src="${imgWeb[3].img}"></img></div>`
                                        : ``
                                    }
                                    ${
                                      imgWeb[4]
                                        ? `<div class="img-web-content"><span>${imgWeb[4].name}</span><img data-bs-toggle="modal" data-bs-target="#img-5" class="img-web" src="${imgWeb[4].img}"></img></div>`
                                        : ``
                                    }
                                    ${
                                      imgWeb[5]
                                        ? `<div class="img-web-content"><span>${imgWeb[5].name}</span><img data-bs-toggle="modal" data-bs-target="#img-6" class="img-web" src="${imgWeb[5].img}"></img></div>`
                                        : ``
                                    }
                                    ${
                                      imgWeb[6]
                                        ? `<div class="img-web-content"><span>${imgWeb[6].name}</span><img data-bs-toggle="modal" data-bs-target="#img-7" class="img-web" src="${imgWeb[6].img}"></img></div>`
                                        : ``
                                    }
                                    ${
                                      imgWeb[7]
                                        ? `<div class="img-web-content"><span>${imgWeb[7].name}</span><img data-bs-toggle="modal" data-bs-target="#img-8" class="img-web" src="${imgWeb[7].img}"></img></div>`
                                        : ``
                                    }
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                </div>
              </div>
            </div>
          </div>
                ${imgWeb[0] ? modalImg(imgWeb[0], 1) : ``}
                ${imgWeb[1] ? modalImg(imgWeb[1], 2) : ``}
                ${imgWeb[2] ? modalImg(imgWeb[2], 3) : ``}
                ${imgWeb[3] ? modalImg(imgWeb[3], 4) : ``}
                ${imgWeb[4] ? modalImg(imgWeb[4], 5) : ``}
                ${imgWeb[5] ? modalImg(imgWeb[5], 6) : ``}
                ${imgWeb[6] ? modalImg(imgWeb[6], 7) : ``}
                ${imgWeb[7] ? modalImg(imgWeb[7], 8) : ``}
                `;
        fragment.appendChild(article);
      }
      projects.appendChild(fragment);
    } catch (err) {
      let message = err.statusText || "Ha ocurrido un error";
      console.log(message);
    }
  };
  getProjects();

  const skills_hobbies = d.getElementById("skills-hobbies");
  const list = d.getElementById("list-about");
  const list_name = d.getElementById("list-name");
  const skills = [
    `
        <li class="list__el"><p class="el__name icon-js">JavaScript</p><span class="el__icon icon-js"><i class="fa-brands fa-js"></i></span></li>
        <li class="list__el"><p class="el__name icon-html">HTML</p><span class="el__icon icon-html"><i class="fa-brands fa-html5"></i></span></li>
        <li class="list__el"><p class="el__name icon-css">CSS</p><span class="el__icon icon-css"><i class="fa-brands fa-html5"></i></span></li>
        <li class="list__el"><p class="el__name icon-php">Php</p><span class="el__icon icon-php"><i class="fa-brands fa-php"></i></span></li>
        <li class="list__el"><p class="el__name name-mysql">MySql</p><span class="el__icon icon-mysql"><i class="fa-solid fa-database"></i></span></li>
        <li class="list__el"><p class="el__name icon-git">Git</p><span class="el__icon icon-git"><i class="fa-brands fa-git-alt"></i></span></li>
        <li class="list__el"><p class="el__name icon-github">GitHub</p><span class="el__icon icon-github"><i class="fa-brands fa-github"></i></span></li>`,
  ];
  const hobbies = [
    `<li class="list__el"><p class="el__name icon-walk">Walk</p><span class="el__icon icon-walk"><i class="fa-solid fa-person-walking"></i></span></li>
        <li class="list__el"><p class="el__name icon-music">Music</p><span class="el__icon icon-music"><i class="fa-solid fa-music"></i></span></li>
        <li class="list__el"><p class="el__name icon-games">Games</p><span class="el__icon icon-games"><i class="fa-solid fa-gamepad"></i></span></li>
        <li class="list__el"><p class="el__name icon-tech">Technology</p><span class="el__icon icon-tech"><i class="fa-solid fa-mug-saucer"></i></span></li>
        <li class="list__el"><p class="el__name icon-nature">Nature</p><span class="el__icon icon-nature"><i class="fa-solid fa-tree"></i></span></li>
        <li class="list__el"><p class="el__name icon-language">Languages</p><span class="el__icon icon-language"><i class="fa-solid fa-language"></i></span></li>
        <li class="list__el"><p class="el__name icon-travel">Travel</p><span class="el__icon icon-travel"><i class="fa-solid fa-road"></i></span></li>`,
  ];

  const change = () => {
    if (skills_hobbies.classList.contains("hi")) {
      skills_hobbies.classList.remove("hi");
      skills_hobbies.classList.add("bye");
    } else {
      if (skills_hobbies.classList.contains("skills")) {
        list_name.innerHTML = "My skills";
        list.innerHTML = skills;
        setTimeout(() => {
          skills_hobbies.classList.remove("skills");
          skills_hobbies.classList.add("hobbies");
        }, 5000);
        skills_hobbies.classList.add("hi");
        skills_hobbies.classList.remove("bye");
      } else if (skills_hobbies.classList.contains("hobbies")) {
        list_name.innerHTML = "My hobbies";
        list.innerHTML = hobbies;
        setTimeout(() => {
          skills_hobbies.classList.add("skills");
          skills_hobbies.classList.remove("hobbies");
        }, 1000);
        skills_hobbies.classList.add("hi");
        skills_hobbies.classList.remove("bye");
      }
    }
  };
  change();

  setInterval(() => {
    change();
  }, 4000);

  const btn = document.getElementById("form-btn");
  const message = document.getElementById("message");
  const email = document.getElementById("email");
  const name = document.getElementById("name");

  document.getElementById("form").addEventListener("submit", function (event) {
    event.preventDefault();
    btn.value = "ENVIANDO...";

    const serviceID = "default_service";
    const templateID = "template_u5l7k3q";

    emailjs.sendForm(serviceID, templateID, this).then(
      () => {
        const Toast = Swal.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 3000,
          // timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener("mouseenter", Swal.stopTimer);
            toast.addEventListener("mouseleave", Swal.resumeTimer);
          },
        });

        Toast.fire({
          icon: "success",
          title: "El correo se ha enviado!!!",
          iconColor: "#173c5e",
        });
        btn.value = "ENVIAR";
        name.value = "";
        email.value = "";
        message.value = "";
      },
      (err) => {
        const Toast = Swal.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 3000,
          // timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener("mouseenter", Swal.stopTimer);
            toast.addEventListener("mouseleave", Swal.resumeTimer);
          },
        });

        Toast.fire({
          icon: "error",
          title: "Ha ocurrido un error, por favor intente de nuevo más tarde.",
        });
        btn.value = "ENVIAR";
        name.value = "";
        email.value = "";
        message.value = "";
      }
    );
  });
  // ScrollReveal().reveal(".main_home", { delay: 350 });
  // ScrollReveal().reveal('.header__nav',{delay: 150});
  ScrollReveal().reveal("#home_content", { delay: 400 });
  ScrollReveal().reveal("#about_content", { delay: 400 });
  ScrollReveal().reveal("#projects_section", { delay: 300 });
  ScrollReveal().reveal("#contact_content", { delay: 400 });

  // MENU

  const menu_btn = d.getElementById("menu-btn");
  const nav_menu = d.getElementById("nav-menu");
  const nav_links = d.getElementById("nav-links");
  const body = d.getElementById("body");
  menu_btn.addEventListener("click", (e) => {
    nav_links.classList.toggle("active");
    // body.classList.toggle("active");
    nav_menu.classList.toggle("active");
  });
  nav_links.addEventListener("click", (e) => {
    nav_links.classList.toggle("active");
    // body.classList.toggle("active");
    nav_menu.classList.toggle("active");
  });
});

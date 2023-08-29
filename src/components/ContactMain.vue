<template>
  <section class="contact" id="contacto">
    <div class="contact__content">
      <div class="content-name"><h3>Contacto</h3></div>
      <div class="content-main">
        <div class="contact__avatar">
          <img src="../assets/contact-avatar.webp" alt="Avatar" />
        </div>
        <div class="contact__form">
          <!-- <form action="" class="form2">
            <div class="form__input">
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Name"
                class="input__name form__input2"
                required
              />
              <label for="name" class="form__label2">Nombre</label>
            </div>
          </form> -->
          <form id="form" class="form" ref="form" @submit.prevent="sendEmail">
            <div class="form__input">
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Name"
                class="input__name form__input2"
                required
              />
              <label for="name" class="form__label2">Nombre</label>
            </div>
            <div class="form__input form__email">
              <input
                type="email"
                name="email"
                id="email"
                class="input__email form__input2"
                placeholder="Escriba su correo electrónico"
                pattern="^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$"
                required
              />
              <label for="email" class="form__label2">Correo</label>
            </div>
            <div class="form__textarea form__message form__input">
              <textarea
                type="email"
                name="email"
                id="email"
                class="textarea__message form__input2"
                placeholder="Escriba su correo electrónico"
                pattern="^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$"
                required
              ></textarea>
              <label for="email" class="form__label2 label-textarea"
                >Escriba su mensaje</label
              >
            </div>
            <div class="form__btn">
              <input type="submit" id="form-btn" class="btn" value="Enviar" />
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
// import { emailjs } from "node_modules/@emailjs/browser/";
// import emailjs from "";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import { ref } from "vue";
const form = ref();
console.log(process.env.VUE_APP_TEMPLATE_ID);
console.log(process.env.VUE_APP_PUBLIC_KEY);

const sendEmail = () => {
  emailjs
    .sendForm(
      process.env.VUE_APP_SERVICE_ID,
      process.env.VUE_APP_TEMPLATE_ID,
      form.value,
      process.env.VUE_APP_PUBLIC_KEY
    )
    .then(
      (result) => {
        console.log("SUCCESS!", result.text);
        const Toast = Swal.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 3000,
          customClass: {
            popup: "my-toast-popup",
            title: "my-toast-title",
          },
          // timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener("mouseenter", Swal.stopTimer);
            toast.addEventListener("mouseleave", Swal.resumeTimer);
          },
        });

        Toast.fire({
          icon: "success",
          title: "El correo se ha enviado!!!",
          iconColor: "#0da175",
        });
      },
      (error) => {
        console.log("FAILED...", error.text);
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
      }
    );
};
</script>

<style scoped>
.contact {
  width: 100%;
  min-height: 80vh;
  height: auto;
}
.contact__content {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  /* background: red !important; */
}
.contact .contact__content .content-name {
  /* background-color: purple; */
  padding: 0.5rem 0;
  border-left: 0.4rem solid var(--color-text);
  padding-left: 0.5rem;
  /* position: relative; */
}

.contact .contact__content .content-name h3 {
  font-size: 1.8rem;
  /* background-color: aqua; */
  color: var(--color-text);
}
.content-main {
  width: 100% !important;
  /* background: aqua; */
  display: flex;
  align-items: center;
  justify-content: center;
}
.content-main .contact__avatar {
  /* background: pink; */
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.contact__avatar img {
  width: 100%;
}
/* .content-main .contact__avatar {
  width: 50%;
} */
/* CONTACT */
.contact__form {
  /* background-image: linear-gradient(#deebf7, #269c5f); */
  /* background-color: var(--main-color); */
  /* background: orange !important; */
  color: var(--color-text);
  width: 50% !important;
  /* background: green; */
  /* min-height: 100vh; */
  /* padding: 70px 10vw 20px 10vw; */
  /* margin-bottom: 70px; */
  margin: 1px auto;
}
@media screen and (max-width: 800px) {
  .content-main {
    flex-direction: column;
  }
  .contact__avatar {
    width: 40% !important;
  }
  .contact__form {
    width: 80% !important;
  }
}
@media screen and (max-width: 500px) {
  .contact__avatar {
    width: 60% !important;
  }
}
.contact__form .form {
  /* background: purple; */
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-content: center;
}
.form__input {
  /* background: orange; */
  width: 100%;
}
.form__input label,
.form__textarea label {
  /* background: aqua; */
  /* margin: 10px 10px 10px 0px; */
  font-weight: bold;
  color: var(--color-text);
  transition: all 0.5s ease-in;
}
.input__name,
.input__email {
  /* margin-bottom: 40px; */
  /* background-color: aqua; */
  box-sizing: border-box;
  background-color: transparent;
  width: 100%;
  height: 1.5rem;
  font-size: 16px;
  border: 0;
  margin: 1rem 0;
  /* padding: 10px 10px 0px 10px; */
  border: 1px solid var(--color-text);
  border-radius: 0.3rem !important;
  outline: none;
  /* font-weight: bold; */
}
.input__name::placeholder,
.input__email::placeholder {
  color: rgba(255, 255, 255, 0.8);
}
.textarea__message::placeholder {
  color: var(--main-color);
}
.input__name:focus,
.input__email:focus {
  border-radius: 0%;
  border: none;
  border-bottom: 1px solid var(--color-text);
  color: var(--color-text);
  transition: all 0.5s ease-in;
}
.textarea__message {
  width: 100%;
  height: 150px !important;
  border: 0;
  border: 1px solid #fff;
  background-color: transparent;
  font-size: 16px;
  /* padding: 10px; */
  font-family: var(--font-family);
  color: var(--main-color);
  outline: none;
  resize: none;
}
.textarea__message:focus {
  transition: all 1s ease-in-out;
  border-radius: 5px;
  border-bottom: 5px solid #269c5f;
}

.form__btn {
  text-align: center;
  /* margin-top: 10px; */
}
.btn-send {
  padding: 10px;
  border-radius: 10px;
  font-size: 16px;
  width: 50%;
  border: 0;
  background-color: #269c5f;
  color: var(--white-color);
  cursor: pointer;
}
.btn-send:hover {
  transition: all 0.5s ease-in-out;
  background-color: #fff;
  color: var(--main-color);
}

.description__fecha {
  font-weight: bold;
}

html .form__input2 {
  /* width: clamp(120px, 50vw, 420px); */
  /* width: 100%; */
  height: 2.5rem;
  /* padding: 0 1.25rem; */
  background: #303030;
  /* border: 1px solid #303030; */
  border: none;
  /* margin: 0.625rem auto; */
  transition: all 250ms;
}
.form__label2 {
  width: 5rem;
}
.form__label2.label-textarea {
  width: 12rem;
}
@media (min-width: 768px) {
  /* html .form__input2 {
    width: clamp(120px, 35vw, 420px);
  } */
}
html .form__input2:focus {
  outline: none;
  border: none;
  background: rgba(48, 48, 48, 0.3);
  border-radius: 0% !important;
  border-top-left-radius: 0.3rem !important;
  border-top-right-radius: 0.3rem !important;
  border-bottom: 1px solid var(--color-secondary);
}
html .form__input2:focus + .form__label2,
html .form__input2:not(:placeholder-shown) + .form__label2 {
  transform: translateY(-4rem) scale(1);
  background: var(--color-secondary);
  color: var(--color-text);
  border-radius: 0.1rem;

  /* padding: 0.1rem 0.3rem; */
  margin: 0 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
}
html .form__input2:focus + .form__label2.label-textarea,
html .form__input2:not(:placeholder-shown) + .form__label2.label-textarea {
  transform: translateY(-10.3rem) scale(1) !important;
}
html .form__input2::placeholder {
  display: none;
  color: transparent;
  -webkit-user-select: none;
  /* Safari */
  -ms-user-select: none;
  /* IE 10 and IE 11 */
  user-select: none;
  /* Standard syntax */
}
html .form__input2:not(:placeholder-shown) {
  border-top-color: rgba(0, 0, 0, 0.5);
}
html .form__label2 {
  font-size: 1rem;
  color: #909090;
  display: block;
  /* Moves the label on TOP of the placeholder */
  /* You'll need to change this as needed */
  transform: translate(1.25rem, -2.5rem);
  transform-origin: 0 0;
  /* Used later for transitions */
  transition: all 500ms;
  -webkit-user-select: none;
  /* Safari */
  -ms-user-select: none;
  /* IE 10 and IE 11 */
  user-select: none;
  pointer-events: none;
}
.label-textarea {
  font-size: 1rem;
  color: #909090;
  display: block;
  /* Moves the label on TOP of the placeholder */
  /* You'll need to change this as needed */
  /* transform: translate(1.25rem, -2.5rem); */
  transform-origin: 0 0;
  /* Used later for transitions */
  transition: all 500ms;
  -webkit-user-select: none;
  /* Safari */
  -ms-user-select: none;
  /* IE 10 and IE 11 */
  user-select: none;
  pointer-events: none;
}
/* Cambiar el fondo y el texto de la alerta */
</style>

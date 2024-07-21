<template>
  <form id="form" class="form" ref="form" @submit.prevent="sendEmail">
    <div class="form__input">
      <input
        type="text"
        name="name"
        v-model="name"
        id="name"
        placeholder="Name"
        class="input__name form__input2"
        required
        autocomplete="off"
      />
      <label for="name" class="form__label2">Nombre</label>
    </div>
    <div class="form__input form__email">
      <input
        type="email"
        name="email"
        id="email"
        v-model="email"
        class="input__email form__input2"
        placeholder="Escriba su correo electrónico"
        required
        autocomplete="off"
      />
      <label for="email" class="form__label2">Correo</label>
    </div>
    <div class="form__input">
      <input
        type="text"
        name="subject"
        id="subject"
        v-model="subject"
        class="input__name form__input2"
        placeholder="Escriba un asunto"
        required
        autocomplete="off"
      />
      <label for="subject" class="form__label2">Asunto</label>
    </div>
    <div class="form__textarea form__message form__input">
      <textarea
        type="message"
        name="message"
        id="message"
        v-model="message"
        class="textarea__message form__input2"
        placeholder="Escriba su correo electrónico"
        pattern="^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$"
        required
        autocomplete="off"
      ></textarea>
      <label for="email" class="form__label2 label-textarea"
        >Escriba su mensaje</label
      >
    </div>
    <div class="form__btn">
      <input type="submit" id="form-btn" class="btn btn-send" value="Enviar" />
    </div>
  </form>
</template>

<script lang="ts" setup>
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import { Ref, ref } from "vue";
const form = ref();

let name: Ref<string> = ref("");
let email: Ref<string> = ref("");
let subject: Ref<string> = ref("");
let message: Ref<string> = ref("");

const Toast = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 3000,
  customClass: {
    popup: "my-toast-popup",
    title: "my-toast-title",
  },
  didOpen: (toast) => {
    toast.addEventListener("mouseenter", Swal.stopTimer);
    toast.addEventListener("mouseleave", Swal.resumeTimer);
  },
});
const msgToast = async (status: string) => {
  await Toast.fire({
    icon: status,
    title:
      status === "success"
        ? "El correo se ha enviado!!!"
        : "Ha ocurrido un error, por favor intente de nuevo más tarde.",
    iconColor: status === "success" ? "rgb(56 189 248)" : "rgb(248 113 113)",
  });
};
const resetInputs = () => {
  name.value = "";
  email.value = "";
  subject.value = "";
  message.value = "";
};
const sendEmail = async () => {
  try {
    const result = await emailjs.sendForm(
      process.env.VUE_APP_SERVICE_ID,
      process.env.VUE_APP_TEMPLATE_ID,
      form.value,
      process.env.VUE_APP_PUBLIC_KEY
    );
    if (result) {
      await msgToast("success");
    } else {
      await msgToast("error");
    }
    resetInputs();
  } catch (error) {
    await msgToast("error");
    resetInputs();
  }
};
</script>

<style scoped>
.form {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-content: center;
}
.form__input {
  width: 100%;
}
.form__input label,
.form__textarea label {
  font-weight: bold;
  color: var(--color-text);
  transition: all 0.5s ease-in;
}
.input__name,
.input__email {
  font-family: var(--font-family);
  box-sizing: border-box;
  width: 100%;
  height: 1.5rem;
  font-size: 16px;
  border: 0;
  margin: 1rem 0;
  padding: 1rem;
  border: 1px solid var(--color-text);
  border-radius: 0.3rem !important;
  outline: none;
}
.input__name::placeholder,
.input__email::placeholder {
  color: rgba(255, 255, 255, 0.8);
}
.textarea__message {
  box-sizing: border-box;
  width: 100% !important;
  padding: 1rem;
  font-size: 1rem !important;
  font-weight: normal !important;
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
  border-radius: 0.3rem;
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
  width: 100%;
  display: flex;
  justify-content: center;
}

html .form__input2 {
  height: 2.5rem;
  background: var(--color-bg);
  border: none;
  transition: all 250ms;
}
.form__label2 {
  width: 5rem;
}
.form__label2.label-textarea {
  width: 12rem;
}
html .form__input2 {
  border: 1px solid var(--color-text);
  background: transparent;
}
html .form__input2:focus {
  outline: none;
  border: none;
  background: rgba(48, 48, 48, 0.1);
  border-radius: 0% !important;
  border-top-left-radius: 0.3rem !important;
  border-top-right-radius: 0.3rem !important;
  border-bottom: 1px solid var(--color-secondary);
}
html .form__input2:focus + .form__label2,
html .form__input2:not(:placeholder-shown) + .form__label2 {
  transform: translateY(-4rem) scale(1);
  background: var(--color-secondary);
  color: var(--color-white);
  border-radius: 0.1rem;
  font-weight: normal;
  margin: 0 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
}
html .form__input2:focus + .form__label2.label-textarea,
html .form__input2:not(:placeholder-shown) + .form__label2.label-textarea {
  transform: translateY(-1000%) scale(1) !important;
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
  /* border-top-color: rgba(0, 0, 0, 0.5); */
  outline: none;
  border: none;
  background: rgba(48, 48, 48, 0.2);
  border-radius: 0% !important;
  border-top-left-radius: 0.3rem !important;
  border-top-right-radius: 0.3rem !important;
  border-bottom: 2px solid var(--color-primary);
  color: var(--color-primary);
}
html .form__input2:not(:placeholder-shown) + .form__label2 {
  background: var(--color-primary);
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

@media screen and (max-width: 700px) {
  .form__btn {
    width: 100%;
  }
}
</style>

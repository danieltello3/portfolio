import axios from "axios";
import { SubmitHandler, useForm } from "react-hook-form";
import Swal from "sweetalert2";
import styles from "../styles/contact.module.scss";

const MySwal = Swal;

type formData = {
   name: string;
   email: string;
   phone: number;
   message: string;
};

const Contacto = () => {
   const {
      register,
      handleSubmit,
      reset,
      formState: { errors },
   } = useForm<formData>();
   const onSubmit: SubmitHandler<formData> = async (data) => {
      console.log(data);
      try {
         const res = await axios.post(
            `${process.env.BACKEND_URL}/contact`,
            data,
            {
               headers: { "Content-Type": "application/json" },
            }
         );
         if (res.status === 200) {
            MySwal.fire({
               title: "Gracias por contactarme",
               text: "Te responderé a la brevedad",
               icon: "success",
               customClass: { popup: styles.popupSweetAlert },
               confirmButtonColor: "#613989",
            });
            reset();
         } else {
            MySwal.fire({
               title: "Ups, Algo salió mal",
               text: "por favor vuelve a intentar",
               icon: "error",
               customClass: { popup: styles.popupSweetAlert },
               confirmButtonColor: "#613989",
            });
         }
      } catch (error) {
         console.log(error);
      }
   };
   return (
      <div className={styles.container}>
         <div className={styles.text}>
            <h1>HOLA!</h1>
            <p>¿Solo quieres saludar?</p>
            <p>¿Quieres preguntarme algo?</p>
            <p>
               Usa el siguiente formulario para contactarme.
               <br /> Si deseas una respuesta más inmediata, escríbeme a alguna
               de mis redes sociales, las encuentras en la parte inferior.
            </p>
         </div>
         <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="name" className={styles.form__label}>
               Nombre*
            </label>
            <input
               type="text"
               id="name"
               autoFocus={true}
               className={
                  errors.name
                     ? `${styles.form__input} ${styles.error}`
                     : styles.form__input
               }
               {...register("name", {
                  required: {
                     value: true,
                     message: "No olvide su nombre",
                  },
               })}
            />
            <span className={styles.form__error}>{errors?.name?.message}</span>
            <label htmlFor="email" className={styles.form__label}>
               Email*
            </label>
            <input
               type="email"
               id="email"
               className={
                  errors.email
                     ? `${styles.form__input} ${styles.error}`
                     : styles.form__input
               }
               {...register("email", {
                  required: { value: true, message: "Debe poner un correo" },
                  pattern: {
                     value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                     message: "Debe ser un correo válido",
                  },
               })}
            />

            <span className={styles.form__error}>{errors?.email?.message}</span>
            <label htmlFor="phone" className={styles.form__label}>
               Teléfono
            </label>
            <input
               type="tel"
               id="phone"
               className={
                  errors.phone
                     ? `${styles.form__input} ${styles.error}`
                     : styles.form__input
               }
               {...register("phone", {
                  minLength: {
                     value: 9,
                     message: "El número debe tener 9 dígitos",
                  },
                  maxLength: 12,
               })}
            />

            <span className={styles.form__error}>{errors?.phone?.message}</span>
            <label htmlFor="message" className={styles.form__label}>
               Mensaje*
            </label>
            <textarea
               id="message"
               rows={5}
               className={
                  errors.message
                     ? `${styles.form__input} ${styles.error}`
                     : styles.form__input
               }
               {...register("message", {
                  required: {
                     value: true,
                     message: "No me mandes un mensaje vacío =(",
                  },
               })}></textarea>

            <span className={styles.form__error}>
               {errors?.message?.message}
            </span>
            <button className={styles.form__button}>ENVIAR</button>
         </form>
      </div>
   );
};

export default Contacto;

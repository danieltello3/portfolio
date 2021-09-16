import styles from "../styles/contact.module.scss";
const Contacto = () => {
   return (
      <div className={styles.container}>
         <div className={styles.text}>
            <h1>HOLA!</h1>
            <p>Solo quieres saludar?</p>
            <p>quieres preguntarme algo?</p>
            <p>
               Usa el siguiente formulario para contactarme, si deseas una
               respuesta más inmediata, podrías contactarme a alguna de mis
               redes sociales, las encuentras abajo de todo.
            </p>
         </div>
         <form action="" className={styles.form}>
            <label htmlFor="name" className={styles.form__label}>
               Nombre
            </label>
            <input type="text" id="name" className={styles.form__input} />
            <label htmlFor="email" className={styles.form__label}>
               Email
            </label>
            <input type="email" id="email" className={styles.form__input} />
            <label htmlFor="phone" className={styles.form__label}>
               Teléfono
            </label>
            <input type="number" id="phone" className={styles.form__input} />
            <label htmlFor="message" className={styles.form__label}>
               Mensaje
            </label>
            <textarea
               name="message"
               id="message"
               rows={5}
               className={styles.form__input}></textarea>
            <button className={styles.form__button}>ENVIAR</button>
         </form>
      </div>
   );
};

export default Contacto;

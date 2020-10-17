import { withFormik } from 'formik';
import * as Yup from 'yup';
import Form from './Form';
import { useAppContext } from '../../contexts/AppContext';
import Cross from '../../public/cross.svg';
import styles from './ContactModal.module.scss';
import Link from 'next/link';
import Logo from '../../public/logo.svg';
import { ToastContainer, toast } from 'react-toastify';


const ContactForm = withFormik({
  mapPropsToValues: () => {
    return {
      firstname: '',
      lastname: '',
      email: '',
      message: '',
      accept_terms: false
    };
  },
  validationSchema: props => {
    return Yup.object({
      firstname: Yup.string().max(15, props.maxlength.replace('xx', '15')).required(props.required),
      lastname: Yup.string().max(20, props.maxlength.replace('xx', '20')).required(props.required),
      email: Yup.string().email(props.email).required(props.required),
      message: Yup.string().required(props.required),
      accept_terms: Yup.boolean().required(props.required).oneOf([true], props.terms)
    });
  },
  handleSubmit: async (values, { setSubmitting }) => {
    setSubmitting(true);
    
    toast('🦄 Mensaje enviado!', {
      position: "bottom-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      });
    console.log(values)
    await new Promise(r => setTimeout(r, 500));
    setSubmitting(false);
  }
})(Form);

const ContactModal = () => {
  const { contactModal, toggleContactModal } = useAppContext();
 
  return (
    <div className={`${styles.modal} ${contactModal && styles.active}`}>
      <div className="container container--small">
      <Link href="/">
        <a className={styles.logo}>
          <Logo />
        </a>
      </Link>
        <Cross className={styles.close}  onClick={() => toggleContactModal()}/>
        
        <ContactForm
          maxlength="Este campo no debe ser mayor de xx caracteres"
          required="Este campo es obligatorio"
          terms="Debes aceptar los términos legales"
        />
        <ToastContainer
position="bottom-center"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
/>
{/* Same as */}
<ToastContainer />
      </div>
      
    </div>
  );
};

export default ContactModal;

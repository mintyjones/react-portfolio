import { useForm } from 'react-hook-form';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

const ContactForm = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const toastifySuccess = () => {
    toast('Form sent!', {
      position: 'bottom-right',
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,  
      draggable: false,
      className: 'submit-feedback success',
      toastId: 'notifyToast'
    });
  };

  const onSubmit = async (data) => {
    try {
      const templateParams = {
        name: data.name,
        email: data.email,
        subject: data.subject,
        message: data.message
      };
      await emailjs.send(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        templateParams,
        process.env.REACT_APP_USER_ID
      );
      reset();
      toastifySuccess();
    } catch (e) {
      console.log(e);
    }
  };

    return (
      
      <div  id="contact" className='flex justify-center mt-12'>
        <div className='w-full max-w-screen-desktop'>
          <div className='flex flex-wrap -my-15'>
            <div className='flex-100 text-center px-4 w-full'>
              <div className='contactForm'>
              <p className="font-RacingSansOne text-4xl text-black text-left pl-4">Drop me a line...</p>
                <form id='contact-form' onSubmit={handleSubmit(onSubmit)} noValidate>
                  {/* Row 1 of form */}
                  <div className='flex flex-wrap flex-col tablets:flex-row mt-2.5 mb-5'>
                    <div className='flex-50 px-4 w-full mb-5 tablets:mb-0'>
                      <input
                        type='text'
                        name='name'
                        {...register('name', {
                          required: { value: true, message: 'Please enter your name' },
                          maxLength: {
                            value: 30,
                            message: 'Please use 30 characters or less'
                          }
                        })}
                        className='form-control formInput'
                        placeholder='Name'
                      ></input>
                      {errors.name && <span className='errorMessage'>{errors.name.message}</span>}
                    </div>
                    <div className='flex-50 px-4 w-full'>
                      <input
                        type='email'
                        name='email'
                        {...register("email", {
                          required: true,
                          pattern: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
                        })}
                        className='form-control formInput'
                        placeholder='Email address'
                      ></input>
                      {errors.email && (
                        <span className='errorMessage'>Please enter a valid email address</span>
                      )}
                    </div>
                  </div>
                  {/* Row 2 of form */}
                  <div className='flex flex-wrap mt-2.5 mb-5'>
                    <div className='px-4 w-full'>
                      <input
                        type='text'
                        name='subject'
                        {...register("subject", {
                          required: { value: true, message: 'Please enter a subject' },
                          maxLength: {
                            value: 75,
                            message: 'Subject cannot exceed 75 characters'
                          }
                        })}
                        className='form-control formInput'
                        placeholder='Subject'
                      ></input>
                      {errors.subject && (
                        <span className='errorMessage'>{errors.subject.message}</span>
                      )}
                    </div>
                  </div>
                  {/* Row 3 of form */}
                  <div className='flex flex-wrap mt-2.5 mb-5'>
                    <div className='px-4 w-full h-full'>
                      <textarea
                        rows={3}
                        name='message'
                        {...register("message", {
                          required: true
                        })}
                        className='form-control formInput'
                        placeholder='Message'
                      ></textarea>
                      {errors.message && <span className='errorMessage'>Please enter a message</span>}
                    </div>
                  </div>
                  <button className='submit-btn' type='submit'>
                    Submit
                  </button>
                </form>
              </div>
              <ToastContainer />
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default ContactForm;
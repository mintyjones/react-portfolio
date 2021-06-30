const ContactForm = () => {
    return (
      <div className='flex justify-center'>
        <div className='max-w-screen-extraLG'>
          <div className='flex flex-wrap -my-15'>
            <div className='flex-100 text-center px-4 w-full'>
              <div className='contactForm'>
                <form id='contact-form' noValidate>
                  {/* Row 1 of form */}
                  <div className='flex flex-wrap flex-col tablets:flex-row mt-2.5 mb-5'>
                    <div className='flex-50 px-4 w-full mb-5 tablets:mb-0'>
                      <input
                        type='text'
                        name='name'
                        className='form-control formInput'
                        placeholder='Name'
                      ></input>
                    </div>
                    <div className='flex-50 px-4 w-full'>
                      <input
                        type='email'
                        name='email'
                        className='form-control formInput'
                        placeholder='Email address'
                      ></input>
                    </div>
                  </div>
                  {/* Row 2 of form */}
                  <div className='flex flex-wrap mt-2.5 mb-5'>
                    <div className='px-4 w-full'>
                      <input
                        type='text'
                        name='subject'
                        className='form-control formInput'
                        placeholder='Subject'
                      ></input>
                    </div>
                  </div>
                  {/* Row 3 of form */}
                  <div className='flex flex-wrap mt-2.5 mb-5'>
                    <div className='px-4 w-full h-full'>
                      <textarea
                        rows={3}
                        name='message'
                        className='form-control formInput'
                        placeholder='Message'
                      ></textarea>
                    </div>
                  </div>
                  <button className='submit-btn' type='submit'>
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default ContactForm;
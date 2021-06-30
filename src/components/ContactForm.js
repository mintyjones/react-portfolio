const ContactForm = () => {
    return (
      
      <div  id="contact" className='flex justify-center mt-12'>
        <div className='w-full max-w-screen-desktop'>
          <div className='flex flex-wrap -my-15'>
            <div className='flex-100 text-center px-4 w-full'>
              <div className='contactForm'>
              <p className="font-RacingSansOne text-4xl text-black text-left pl-4">Drop me a line...</p>
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
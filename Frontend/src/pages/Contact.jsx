import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      import.meta.env.VITE_SERVICE_ID,
      import.meta.env.VITE_TEMPLATE_ID,
      form.current,
      import.meta.env.VITE_PUBLIC_KEY
    )
    .then(() => {
        toast.success(' Message sent successfully!', {
          position: 'top-right',
          autoClose: 3000,
        });
        form.current.reset();
    }, () => {
        toast.error(' Something went wrong. Please try again later.', {
          position: 'top-right',
          autoClose: 3000,
        });
    });
  };

  return (
    <section>
      <div className="px-4 mx-auto max-w-screen-md">
        <h2 className='heading text-center'>Contact Us</h2>
        <p className='mb-8 lg:mb-16 font-light text-center text__para'>
          Got a technical issue? Want to send feedback about a beta feature? Let us Know
        </p>

        <form ref={form} onSubmit={sendEmail} className='space-y-8'>
          <div>
            <label htmlFor="email" className='form__label'>Your Email</label>
            <input 
              type="email"
              name="user_email"
              id="email"
              required
              placeholder='example@gmail.com'
              className='form__input mt-1' 
            />
          </div>
          <div>
            <label htmlFor="subject" className='form__label'>Subject</label>
            <input 
              type="text"
              name="subject"
              id="subject"
              required
              placeholder='Let us know how we can help you'
              className='form__input mt-1' 
            />
          </div>
          <div className='sm:col-span-2'>
            <label htmlFor="message" className='form__label'>Your Message</label>
            <textarea 
              name="message"
              id="message"
              required
              rows="6"
              placeholder='Leave a comment....'
              className='form__input mt-1' 
            />
          </div>

          <button type='submit' className='btn mt-2 rounded sm:w-fit'>Submit</button>
        </form>

        <ToastContainer />
      </div>
    </section>
  );
};

export default Contact;

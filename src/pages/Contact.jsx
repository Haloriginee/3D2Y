import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

const Conctact = () => {

  const [form, setform] = useState({ name:"", email:"", message:"" });


  const [isLoading, setIsLoading] = useState(false);


  const formRef = useRef(null);

  // Submit Form Functionality

  const handleChange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value });
  };

  const handlefocus = () => {};

  const handleBlur = () => {};

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    emailjs.send(
      import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
      {
        from_name: form.name,
        to_name: "Kévin",
        from_email: form.email,
        to_email: "herezy2006@gmail.com",
        message: form.message
      },
      import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
    ).then(() => {
      setIsLoading(false);
      setform({ name: "", email: "", message: "" });
    }).catch((error) => {
      setIsLoading(false);
      console.log(error);
    });
  };

  return (

    <section className='relative flex lg:flex-row flex-col h-[100vh] max-container'>

      <div className='flex-1 min-w-[50%] flex flex-col'>
        <h1 className='head-text'>Get In Touch</h1>

        <form
          className='w-full Flex Flex-col gap-7 mt-14'
          ref={formRef}
          onSubmit={handleSubmit}
        >
          <label className='text-black-500 font-semibold'>
            Name
            <input
              type='text'
              name='name'
              className='input'
              placeholder='Obiwan'
              required
              value={form.name}
              onChange={handleChange}
              onFocus={handlefocus}
              onBlur={handleBlur}
            />
          </label>
          <label className='text-black-500 font-semibold'>
            Email
            <input
              type='email'
              name='email'
              className='input'
              placeholder='Obiwan@gmail.com'
              required
              value={form.email}
              onChange={handleChange}
              onFocus={handlefocus}
              onBlur={handleBlur}
            />
          </label>
          <label className='text-black-500 font-semibold'>
            Message
            <textarea
              rows={4}
              name='message'
              className='textarea'
              placeholder='How can i help you?'
              required
              value={form.message}
              onChange={handleChange}
              onFocus={handlefocus}
              onBlur={handleBlur}
            />
          </label>
          <button
            type='submit'
            className='btn'
            onFocus={handlefocus}
            onBlur={handleBlur}
            disabled={isLoading}
          >
            {isLoading ? 'Sending...' : 'Send'}
          </button>
        </form>
      </div>

    </section>

  )
}

export default Conctact

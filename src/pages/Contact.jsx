import { useState } from 'react';

const Conctact = () => {

  const [form, setform] = useState({ name:"", email:"", message:"" })

  const [isLoading, setIsLoading] = useState(false);

  const handleChange = () => {};

  const handlefocus = () => {};

  const handleBlur = () => {};

  return (

    <section className='relative flex lg:flex-row flex-col h-[100vh] max-container'>

      <div className='flex-1 min-w-[50%] flex flex-col'>
        <h1 className='head-text'>Get In Touch</h1>

        <form
          className='w-full Flex Flex-col gap-7 mt-14'
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

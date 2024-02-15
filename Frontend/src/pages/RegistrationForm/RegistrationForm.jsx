import React, { useState } from 'react';

function RegistrationForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [termsAccepted, setTermsAccepted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would usually integrate your form submission logic, like calling an API.
    console.log('Form submitted', { email, password, repeatPassword, termsAccepted });
  };

  return (
    <form className="max-w-md mx-auto px-5 py-8  " onSubmit={handleSubmit}>
      <div className="mb-5 ">

      <h1 className='text-3xl font-bold mb-4 text-black dark:text-indigo-600'>Create an Account</h1>
        <label htmlFor="email" className="block mb-2 text-md font-medium text-gray-900 dark:text-white">Your email</label>
        <input 
          type="email" 
          id="email" 
          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full py-3 px-5 dark:bg-[#1E293B] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light outline-transparent text-base" 


          // w-full rounded-md border  bg-[#071829]  text-base font-medium text-white  focus:border-[#6A64F1] focus:shadow-md
          placeholder="Enter Your Email" 
          required 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="mb-5">
        <label htmlFor="password" className="block mb-2 text-md font-medium text-gray-900 dark:text-white">Your password</label>
        <input 
          type="password" 
          id="password" 
          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full py-3 px-5 dark:bg-[#1E293B] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light outline-transparent text-base" 
          required 
          placeholder="Enter your password" 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="mb-5">
        <label htmlFor="repeat-password" className="block mb-2 text-md font-medium text-gray-900 dark:text-white">Confirm password</label>
        <input 
          type="password" 
          id="repeat-password" 
          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full py-3 px-5 dark:bg-[#1E293B] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light outline-transparent text-base" 
          required 
          placeholder="Confirm password" 
          value={repeatPassword}
          onChange={(e) => setRepeatPassword(e.target.value)}
        />
      </div>
      <div className="flex items-start mb-5">
        <div className="flex items-center h-5">
          <input 
            id="terms" 
            type="checkbox" 
            className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" 
            required 
            checked={termsAccepted}
            onChange={(e) => setTermsAccepted(e.target.checked)}
          />
        </div>
        <label htmlFor="terms" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">I agree with the <a href="#" className="text-blue-600 hover:underline dark:text-blue-500">terms and conditions</a></label>
      </div>
      <button type="submit" className=" w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-0 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-md px-5 py-3 text-center dark:bg-[#4F46E5] dark:hover:bg-blue-700 dark:focus:ring-blue-800">Register new account</button>
    </form>
  );
}

export default RegistrationForm;

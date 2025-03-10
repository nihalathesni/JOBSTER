import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import Signup from '../../assets/signup.jpg';
import { FcGoogle } from 'react-icons/fc';
import { motion } from 'framer-motion';

function SignupForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log('Signup Data:', data);
  };

  return (
    <div className="w-full min-h-screen flex items-center justify-start bg-cover bg-center relative overflow-hidden" style={{ backgroundImage: `url(${Signup})` }}>
      {/* Blurred Background Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Form Container */}
      <motion.div
        className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 bg-white bg-opacity-90 shadow-lg rounded-lg p-8 border border-gray-300 ml-8 md:ml-16 relative z-10"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">Signup</h1>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          <input
            type="text"
            {...register('fullName', { required: 'Full Name is required' })}
            placeholder="Full Name"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          />
          <p className="text-red-500 text-sm">{errors.fullName?.message}</p>

          <input
            type="text"
            {...register('phoneNumber', { required: 'Phone number is required' })}
            placeholder="Phone Number"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          />
          <p className="text-red-500 text-sm">{errors.phoneNumber?.message}</p>

          <input
            type="email"
            {...register('email', {
              required: 'Email is required',
              pattern: { value: /^\S+@\S+$/i, message: 'Invalid email format' },
            })}
            placeholder="Email"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          />
          <p className="text-red-500 text-sm">{errors.email?.message}</p>

          <input
            type="password"
            {...register('password', {
              required: 'Password is required',
              minLength: { value: 8, message: 'Minimum length is 8 characters' },
            })}
            placeholder="Password"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          />
          <p className="text-red-500 text-sm">{errors.password?.message}</p>

          <div>
            <label className="text-gray-700">Gender :</label>
            <div className="flex gap-4 mt-1">
              <label className="flex items-center">
                <input type="radio" {...register('gender', { required: 'Gender is required' })} value="male" className="mr-2" />
                Male
              </label>
              <label className="flex items-center">
                <input type="radio" {...register('gender', { required: 'Gender is required' })} value="female" className="mr-2" />
                Female
              </label>
              <label className="flex items-center">
                <input type="radio" {...register('gender', { required: 'Gender is required' })} value="other" className="mr-2" />
                Other
              </label>
            </div>
            <p className="text-red-500 text-sm">{errors.gender?.message}</p>
          </div>

          <button type="submit" className="w-full p-3 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 transition-all">
            Signup
          </button>

          <button type="button" className="w-full p-3 flex items-center justify-center gap-2 bg-white border border-gray-300 rounded-md hover:bg-gray-50 transition-all">
            <FcGoogle className="text-xl" />
            Continue with Google
          </button>
        </form>

        <p className="text-center text-gray-600 mt-4">
          Already have an account?{' '}
          <Link to="/login" className="text-blue-500 hover:underline">
            Log in
          </Link>
        </p>
      </motion.div>

      {/* Animated Text */}
      <motion.div
        className="absolute right-0 top-1/2 transform -translate-y-1/2 w-1/2 pr-8"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <h1 className="text-white text-3xl sm:text-3xl md:text-6xl font-bold mb-4 text-center">Create Your Account</h1>
        <p className="text-white text-lg sm:text-2xl md:text-2xl mb-6 text-center">
          Join thousands of professionals who have found their dream part-time jobs with us. Start your journey today and make an impact in your career.
        </p>
       
      </motion.div>
    </div>
  );
}

export default SignupForm;
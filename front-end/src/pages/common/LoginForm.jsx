import React from 'react';
import { useForm } from 'react-hook-form';

function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log('Login Data:', data);
  };

  return (
    <div className="w-full min-h-screen bg-[#A0AECE] flex justify-center items-center px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl border border-gray-300 p-8">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Login</h1>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          <input
            type="text"
            {...register('username', { required: 'Username is required' })}
            placeholder="User name"
            className="p-3 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
          />
          <p className="text-red-500 text-sm">{errors.username?.message}</p>

          <input
            type="email"
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^\S+@\S+$/i,
                message: 'Invalid email format',
              },
            })}
            placeholder="Email"
            className="p-3 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
          />
          <p className="text-red-500 text-sm">{errors.email?.message}</p>

          <input
            type="password"
            {...register('password', {
              required: 'Password is required',
              minLength: { value: 6, message: 'Minimum length is 6 characters' },
            })}
            placeholder="Password"
            className="p-3 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
          />
          <p className="text-red-500 text-sm">{errors.password?.message}</p>

          <button
            type="submit"
            className="mt-4 p-3 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition-all"
          >
            Login
          </button>
        </form>

        <p className="text-gray-600 text-center mt-4">
          Don’t have an account?{' '}
          <a href="/signup" className="text-blue-500 hover:underline">
            Signup
          </a>
        </p>
      </div>
    </div>
  );
}

export default LoginForm;

import React from 'react';
import { useForm } from 'react-hook-form';

function SignupForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="w-full min-h-screen bg-[#A0AECE] flex justify-center items-center px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl border border-gray-300 p-8">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Signup</h1>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          <input
            {...register('name', { required: 'Name is required' })}
            placeholder="Name"
            className="p-3 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
          />
          <p className="text-red-500 text-sm">{errors.name?.message } </p>

          <input
            type="tel"
            {...register('phone', {
              required: 'Phone number is required',
              pattern: {
                value: /^[0-9]{10}$/,
                message: 'Phone number must be exactly 10 digits',
              },
            })}
            placeholder="Phone no"
            className="p-3 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
          />
          <p className="text-red-500 text-sm">{errors.phone?.message}</p>

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
              minLength: { value: 6, message: 'Minimum length is 6' },
            })}
            placeholder="Password"
            className="p-3 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
          />
          <p className="text-red-500 text-sm">{errors.password?.message}</p>

          <div className="flex gap-4">
            <label className="text-gray-700 flex items-center gap-2">
              <input
                type="radio"
                value="male"
                {...register('gender', { required: 'Gender is required' })}
                className="focus:ring-2 focus:ring-blue-500"
              />
              Male
            </label>
            <label className="text-gray-700 flex items-center gap-2">
              <input
                type="radio"
                value="female"
                {...register('gender', { required: 'Gender is required' })}
                className="focus:ring-2 focus:ring-blue-500"
              />
              Female
            </label>
            <label className="text-gray-700 flex items-center gap-2">
              <input
                type="radio"
                value="other"
                {...register('gender', { required: 'Gender is required' })}
                className="focus:ring-2 focus:ring-blue-500"
              />
              Other
            </label>
          </div>
          <p className="text-red-500 text-sm">{errors.gender?.message}</p>

          <button
            type="submit"
            className="mt-4 p-3 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition-all"
          >
            Signup
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignupForm;

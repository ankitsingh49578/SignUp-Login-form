import React, { useState, useEffect } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

interface LoginValues {
  email: string;
  password: string;
  rememberMe: boolean;
}

const LoginForm: React.FC = () => {
  const [message, setMessage] = useState('');

  useEffect(() => {
    const savedEmail = localStorage.getItem('rememberedEmail');
    if (savedEmail) {
      setMessage(`Welcome back! ${savedEmail}`);
    }
  }, []);

  const initialValues: LoginValues = {
    email: localStorage.getItem('rememberedEmail') || '',
    password: '',
    rememberMe: false,
  };

  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().required('Password is required'),
  });

  const handleSubmit = (values: LoginValues) => {
    if (values.rememberMe) {
      localStorage.setItem('rememberedEmail', values.email);
    } else {
      localStorage.removeItem('rememberedEmail');
    }
    setMessage('Login Successful');
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md max-w-md mx-auto">
      <h2 className="text-2xl font-bold text-center mb-4">Login</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-gray-700 font-medium">
              Email
            </label>
            <Field
              name="email"
              type="email"
              className="w-full border-gray-300 border rounded-md p-2 focus:ring-2 focus:ring-blue-500"
            />
            <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1" />
          </div>
          <div>
            <label htmlFor="password" className="block text-gray-700 font-medium">
              Password
            </label>
            <Field
              name="password"
              type="password"
              className="w-full border-gray-300 border rounded-md p-2 focus:ring-2 focus:ring-blue-500"
            />
            <ErrorMessage name="password" component="div" className="text-red-500 text-sm mt-1" />
          </div>
          <div className="flex items-center">
            <Field type="checkbox" name="rememberMe" className="mr-2" />
            <label className="text-gray-700 font-medium">Remember Me</label>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
          >
            Login
          </button>
        </Form>
      </Formik>
      {message && <p className="text-green-500 text-center mt-4">{message}</p>}
    </div>
  );
};

export default LoginForm;

import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import PasswordStrengthIndicator from './PasswordStrengthIndicator';

interface SignUpValues {
  email: string;
  password: string;
  confirmPassword: string;
}

const SignupForm: React.FC = () => {
  const [message, setMessage] = useState('');

  const initialValues: SignUpValues = {
    email: '',
    password: '',
    confirmPassword: '',
  };

  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string()
      .min(8, 'Password must be at least 8 characters')
      .required('Password is required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), undefined], 'Passwords must match')
      .required('Confirm Password is required'),
  });

  const handleSubmit = () => {
    setMessage('Sign Up Successful');
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md max-w-md mx-auto">
      <h2 className="text-2xl font-bold text-center mb-4">Sign Up</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ values }) => (
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
              <PasswordStrengthIndicator password={values.password} />
              <ErrorMessage name="password" component="div" className="text-red-500 text-sm mt-1" />
            </div>
            <div>
              <label htmlFor="confirmPassword" className="block text-gray-700 font-medium">
                Confirm Password
              </label>
              <Field
                name="confirmPassword"
                type="password"
                className="w-full border-gray-300 border rounded-md p-2 focus:ring-2 focus:ring-blue-500"
              />
              <ErrorMessage
                name="confirmPassword"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
            >
              Sign Up
            </button>
          </Form>
        )}
      </Formik>
      {message && <p className="text-green-500 text-center mt-4">{message}</p>}
    </div>
  );
};

export default SignupForm;

import React, { useState } from 'react';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';

const AuthCard: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md max-w-md mx-auto">
      <div className="text-center mb-6">
        <button
          onClick={() => setIsLogin(true)}
          className={`py-2 px-4 rounded-md font-medium ${
            isLogin ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
          }`}
        >
          Login
        </button>
        <button
          onClick={() => setIsLogin(false)}
          className={`py-2 px-4 rounded-md font-medium ml-2 ${
            !isLogin ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
          }`}
        >
          Sign Up
        </button>
      </div>
      {isLogin ? <LoginForm /> : <SignupForm />}
    </div>
  );
};

export default AuthCard;

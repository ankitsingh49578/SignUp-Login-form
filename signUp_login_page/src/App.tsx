import React from 'react';
// import LoginForm from './components/LoginForm';
// import SignupForm from './components/SignupForm';
import './index.css'
import AuthCard from './components/AuthCard';
// import './App.css'

const App: React.FC = () => {
  return (
    <div className="App">
      <AuthCard/>
      {/* <SignupForm />
      <LoginForm /> */}
    </div>
  );
};

export default App;

import React from 'react';

interface Props {
  password: string;
}

const PasswordStrengthIndicator: React.FC<Props> = ({ password }) => {
  const getStrength = () => {
    if (password.length >= 12) return 'Strong';
    if (password.length >= 8) return 'Moderate';
    return 'Weak';
  };

  const strength = getStrength();
  const strengthColors = {
    Strong: 'text-green-500',
    Moderate: 'text-yellow-500',
    Weak: 'text-red-500',
  };

  return (
    <p className={`text-sm mt-1 ${strengthColors[strength]}`}>
      Password Strength: {strength}
    </p>
  );
};

export default PasswordStrengthIndicator;

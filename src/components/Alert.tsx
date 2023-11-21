import React from "react";

interface AlertProps {
  message: string;
}

const Alert: React.FC<AlertProps> = ({ message }) => {
  return (
    <div className="mb-4 text-center p-2 text-red-600 bg-red-100 rounded">
      {message}
    </div>
  );
};

export default Alert;

import React, { useState } from "react";

const Captcha: React.FC = () => {
  const [captcha, setCaptcha] = useState("");
  const [userInput, setUserInput] = useState("");

  const generateCaptcha = () => {
    // Generate a random captcha code
    const captchaCode = Math.random().toString(36).substring(2, 8);
    setCaptcha(captchaCode);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    // Check if the user input matches the captcha code
    if (userInput === captcha) {
      // Captcha validation successful, proceed with form submission
      console.log("Captcha validation successful");
      // Add your form submission logic here
    } else {
      // Captcha validation failed, display an error message
      console.log("Captcha validation failed");
      // Add your error handling logic here
    }
  };

  return (
    <div>
      <h2>Captcha</h2>
      <button onClick={generateCaptcha}>Generate Captcha</button>
      <form onSubmit={handleSubmit}>
        <label htmlFor="captchaInput">Enter Captcha Code:</label>
        <input
          type="text"
          id="captchaInput"
          value={userInput}
          onChange={handleInputChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Captcha;

import React, { useState, useEffect } from 'react';

const CustomTypewriter = ({ text, typingDelay = 100, staticDelay = 500 }) => {
  const [content, setContent] = useState("");
  const [cursor, setCursor] = useState(true);

  useEffect(() => {
    let cursorInterval = setInterval(() => setCursor((prev) => !prev), 500);

    const type = (index = 0) => {
      if (index < text.length) {
        setContent((prev) => prev + text.charAt(index));
        const randomDelay = typingDelay + Math.random() * 150 - 50; //random typing delay to make it look more natural
        setTimeout(() => type(index + 1), randomDelay); 
      } else {
        clearInterval(cursorInterval);
        setCursor(false);
      }
    };

    type();

    return () => clearInterval(cursorInterval);
  }, [text, typingDelay, staticDelay]);

  return (
    <span>
      {content}
      {cursor && '|'}
    </span>
  );
};

export default CustomTypewriter;
//want to change my name to type out in #c9cfdc
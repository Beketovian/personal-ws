import React, { useState, useEffect } from 'react';

const CustomTypewriter = ({ text, typingDelay = 100, staticDelay = 500 }) => {
  const [content, setContent] = useState("");
  const [cursor, setCursor] = useState(true);

  useEffect(() => {
    let cursorInterval = setInterval(() => setCursor((prev) => !prev), 530);

    const type = (index = 0) => {
      if (index < text.length) {
        if (index < 7) {
          // check if the current character index is within the range of "Hi, I'm" change color of it
          setContent((prev) => (
            <span>
              {prev}
              <span style={{ color: '#c9cfdc' }}>{text.charAt(index)}</span>
            </span>
          ));
        } else {
          setContent((prev) => (
            <span>
              {prev}
              <span style={{ color: 'white' }}>{text.charAt(index)}</span>
            </span>
          ));
        }

        const randomDelay = typingDelay + Math.random() * 150 - 50; // random typing delay to make it look more natural
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

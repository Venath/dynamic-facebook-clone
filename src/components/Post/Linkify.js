import React from 'react';

function linkify(text) {
  const urlPattern = /(https?:\/\/[^\s]+)/g;
  return text.split(urlPattern).map((part, index) =>
    urlPattern.test(part) ? <a key={index} href={part} target="_blank" rel="noopener noreferrer">{part}</a> : part
  );
}

export default linkify;

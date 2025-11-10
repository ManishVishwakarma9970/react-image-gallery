import React from "react";

const Card = ({ elem }) => {
  return (
    <a
      href={elem.url}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-white rounded-xl overflow-hidden w-60 shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300"
    >
      <img
        src={elem.download_url}
        alt={elem.author}
        className="h-40 w-full object-cover"
      />
      <div className="p-2 text-center">
        <h2 className="font-semibold text-gray-900 truncate">{elem.author}</h2>
      </div>
    </a>
  );
};

export default Card;

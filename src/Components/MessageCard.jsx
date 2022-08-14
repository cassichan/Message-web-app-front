import { useState } from "react";
import { useEffect } from "react";

export default function MessageCard({ message }) {
  return (
    <>
      <div className="Message-Card">
        {message &&
          message.map((message) => {
            <div className="posted-message" key={message.id}>
              <h3>{message.name}</h3>
              <p>{message.text}</p>
            </div>;
          })}
      </div>
    </>
  );
}

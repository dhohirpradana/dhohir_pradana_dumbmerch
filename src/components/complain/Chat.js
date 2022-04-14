/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useRef } from "react";

import default_profile from "../../assets/icons8-user-48.png";

export default function Chat({ contact, messages, user, sendMessage }) {
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <>
      {contact ? (
        <>
          <div style={{ height: "80vh" }} className="overflow-auto px-3 py-2">
            {messages.map((item, index) => (
              <div key={index}>
                <div
                  className={`d-flex py-1 ${
                    item.idSender === user.id
                      ? "justify-content-end"
                      : "justify-content-start"
                  }`}
                >
                  {item.idSender !== user.id && (
                    <img
                      src={contact.profile?.image || default_profile}
                      className="rounded-circle me-2 img-chat"
                      alt="bubble avatar"
                    />
                  )}
                  <div
                    className={
                      item.idSender === user.id ? "chat-me" : "chat-other"
                    }
                  >
                    {item.message}
                    <div ref={messagesEndRef} />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div style={{ height: "6vh" }} className="px-3">
            <input
              placeholder="Send Message"
              className="input-message px-4"
              onKeyDown={(e) => sendMessage(e)}
              tabIndex={0}
            />
          </div>
        </>
      ) : (
        <div
          style={{ height: "86vh" }}
          className="h4 d-flex justify-content-center align-items-center"
        >
          No Message
        </div>
      )}
    </>
  );
}

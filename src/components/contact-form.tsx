"use client";

import React from "react";

export default function ContactForm() {
  const [values, setValues] = React.useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = React.useState(false);
  const [message, setMessage] = React.useState<{
    type: "success" | "error" | "warning";
    content: string;
  } | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (submitted) {
      setMessage({
        type: "warning",
        content: "Message already sent!!",
      });
      return;
    }
    setSubmitted(true);
    setMessage({
      type: "success",
      content: "Message sent successfully!!",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <label htmlFor="name" className="block text-sm font-bold mb-2">
          Name
        </label>
        <input
          required
          type="text"
          id="name"
          name="name"
          onChange={(e) => setValues({ ...values, name: e.target.value })}
          value={values.name}
          className="shadow border rounded w-full py-2 px-3 bg-violet-950 bg-opacity-20"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-sm font-bold mb-2 ">
          Email
        </label>
        <input
          required
          type="email"
          id="email"
          name="email"
          onChange={(e) => setValues({ ...values, email: e.target.value })}
          value={values.email}
          className="shadow  border rounded w-full py-2 px-3 bg-violet-950 bg-opacity-20"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="message" className="block  text-sm font-bold mb-2">
          Message
        </label>
        <textarea
          required
          id="message"
          name="message"
          onChange={(e) => setValues({ ...values, message: e.target.value })}
          value={values.message}
          className="shadow  border rounded w-full py-2 px-3 bg-violet-950 bg-opacity-20"
        />
      </div>
      <div className="flex gap-4 flex-wrap">
        <button
          type="submit"
          className={`bg-violet-800 text-white py-2 px-4 rounded-md transition-colors duration-300 ${
            submitted ? "opacity-50" : "hover:bg-violet-600"
          }`}>
          Send Message
        </button>
        {message && (
          <div
            className={`text-white px-4 py-2 rounded-md ${
              message.type === "success"
                ? "bg-green-500 bg-opacity-10 text-green-600"
                : message.type === "warning"
                ? "bg-yellow-500 bg-opacity-10 text-yellow-600"
                : "bg-red-500 bg-opacity-10 text-red-600"
            }`}>
            {message.content}
          </div>
        )}
      </div>
    </form>
  );
}

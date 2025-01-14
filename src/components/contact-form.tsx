"use client";

import { useFormik } from "formik";
import React from "react";
import * as yup from "yup";

const schema = yup.object({
  name: yup.string().required("Please enter your sweet name..😊"),
  email: yup
    .string()
    .email("Invalid email!")
    .required("Email is required!!")
    .matches(
      /^[a-zA-Z0-9._%±]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/,
      "Invalid email!"
    ),
  message: yup.string().required("Enter your message please..😊"),
});

const initialValues = {
  name: "",
  email: "",
  message: "",
};

export default function ContactForm() {
  const [submitted, setSubmitted] = React.useState(false);
  const [message, setMessage] = React.useState<{
    type: "success" | "error" | "warning";
    content: string;
  } | null>(null);
  const [loading, setLoading] = React.useState(false);

  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    resetForm,
  } = useFormik({
    initialValues,
    validationSchema: schema,
    onSubmit: async (values) => {
      setLoading(true);
      try {
        const res = await fetch("/api/send", {
          method: "POST",
          body: JSON.stringify(values),
        });

        if (!res.ok) {
          const data = await res.json();
          if (data.error) {
            throw new Error(
              data.error.message || "Sorry, An Unknown error occurred!"
            );
          }
          throw new Error("An error occurred!!");
        }

        setSubmitted(true);
        setMessage({
          type: "success",
          content: "Message sent successfully!!",
        });
        resetForm();
      } catch (error) {
        if (error instanceof Error) {
          setMessage({
            type: "error",
            content: error.message,
          });
        } else {
          setMessage({
            type: "error",
            content: "An error occurred!!",
          });
        }
      } finally {
        setLoading(false);
      }
    },
  });

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <label
          htmlFor="name"
          className={`block text-sm font-bold mb-2 ${
            errors.name ? "text-red-500" : ""
          }`}>
          Name
        </label>
        <input
          required
          type="text"
          id="name"
          name="name"
          onChange={handleChange}
          value={values.name}
          onBlur={handleBlur}
          className={`shadow border rounded w-full py-2 px-3 bg-violet-950 bg-opacity-20  ${
            errors.name && touched.name ? "border-red-500" : ""
          }`}
        />
        {errors.name && touched.name && (
          <p className="text-red-500 text-xs  mt-1">{errors.name}</p>
        )}
      </div>
      <div className="mb-4">
        <label
          htmlFor="email"
          className={`block text-sm font-bold mb-2 ${
            errors.email ? "text-red-500" : ""
          }`}>
          Email
        </label>
        <input
          required
          type="email"
          id="email"
          name="email"
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.email}
          className={`shadow border rounded w-full py-2 px-3 bg-violet-950 bg-opacity-20 ${
            errors.email && touched.email ? "border-red-500" : ""
          }`}
        />
        {errors.email && touched.email && (
          <p className="text-red-500 text-xs  mt-1">{errors.email}</p>
        )}
      </div>
      <div className="mb-4">
        <label
          htmlFor="message"
          className={`block text-sm font-bold mb-2 ${
            errors.message ? "text-red-500" : ""
          }`}>
          Message
        </label>
        <textarea
          required
          id="message"
          name="message"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.message}
          className={`shadow border rounded w-full py-2 px-3 bg-violet-950 bg-opacity-20 ${
            errors.message && touched.message ? "border-red-500" : ""
          }`}
        />
        {errors.message && touched.message && (
          <p className="text-red-500 text-xs  mt-1">{errors.message}</p>
        )}
      </div>
      <div className="flex gap-4 flex-wrap">
        <button
          disabled={loading}
          type="submit"
          className={`bg-violet-800 text-white py-2 px-4 rounded-md transition-colors duration-300 ${
            submitted ? "opacity-50" : "hover:bg-violet-600"
          }`}>
          {loading ? "Sending..." : "Send Message"}
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

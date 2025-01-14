import React from "react";

export default function EmailTemplate({ name }: { name: string }) {
  return (
    <div>
      <h1 className="text-lg font-semibold">Hello {name},</h1>
      <p>Thank you for reaching out to me.</p>
      <p className="text-sm">
        I have received your message and will get back to you as soon as
        possible!
      </p>
    </div>
  );
}

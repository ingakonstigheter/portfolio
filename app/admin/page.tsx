"use client";

import { useState } from "react";

export default function AdminPage() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !description || !image) {
      setMessage("All fields are required.");
      return;
    }
    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("image", image);

    const res = await fetch("/api/upload-project", {
      method: "POST",
      body: formData,
    });
    const data = await res.json();
    setMessage(data.message);
    if (res.ok) {
      setTitle("");
      setDescription("");
      setImage(null);
    }
  };

  return (
    <div
      style={{
        maxWidth: 500,
        margin: "2rem auto",
        padding: 20,
        border: "1px solid #ccc",
        borderRadius: 8,
      }}>
      <h2>Content Management</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title</label>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            style={{ width: "100%" }}
          />
        </div>
        <div>
          <label>Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            style={{ width: "100%" }}
          />
        </div>
        <div>
          <label>Image</label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setImage(e.target.files?.[0] || null)}
            required
          />
        </div>
        <button type="submit" style={{ marginTop: 16 }}>
          Upload Project
        </button>
      </form>
      {message && (
        <p style={{ color: message.includes("success") ? "green" : "red" }}>
          {message}
        </p>
      )}
    </div>
  );
}

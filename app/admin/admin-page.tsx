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
        margin: "calc(var(--size-2xl) * 2) auto",
        padding: "var(--size-lg)",
        border: "1px solid var(--color-border)",
        borderRadius: "0.5rem",
        backgroundColor: "var(--color-bg-secondary)",
      }}>
      <h2 style={{ marginBottom: "var(--size-lg)" }}>Content Management</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "var(--size-lg)" }}>
          <label
            style={{
              display: "block",
              marginBottom: "var(--size-sm)",
              fontSize: "var(--font-size-base)",
              fontWeight: "500",
            }}>
            Title
          </label>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            style={{ width: "100%", boxSizing: "border-box" }}
          />
        </div>
        <div style={{ marginBottom: "var(--size-lg)" }}>
          <label
            style={{
              display: "block",
              marginBottom: "var(--size-sm)",
              fontSize: "var(--font-size-base)",
              fontWeight: "500",
            }}>
            Description
          </label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            style={{
              width: "100%",
              boxSizing: "border-box",
              minHeight: "120px",
            }}
          />
        </div>
        <div style={{ marginBottom: "var(--size-lg)" }}>
          <label
            style={{
              display: "block",
              marginBottom: "var(--size-sm)",
              fontSize: "var(--font-size-base)",
              fontWeight: "500",
            }}>
            Image
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setImage(e.target.files?.[0] || null)}
            required
          />
        </div>
        <button type="submit" style={{ width: "100%" }}>
          Upload Project
        </button>
      </form>
      {message && (
        <p
          style={{
            color: message.includes("success")
              ? "var(--color-success)"
              : "var(--color-error)",
            marginTop: "var(--size-lg)",
          }}>
          {message}
        </p>
      )}
    </div>
  );
}

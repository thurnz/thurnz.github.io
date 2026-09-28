"use client";

import { useEffect, useRef } from "react";
import { WorkItem } from "../data";

interface WorksModalProps {
  work: WorkItem;
  onClose: () => void;
}

export default function WorksModal({ work, onClose }: WorksModalProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Lock scroll
    document.body.style.overflow = "hidden";

    // Play video
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }

    // Keyboard close
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
    };
  }, [onClose]);

  return (
    <div
      className="modal-overlay"
      onClick={(e) => e.target === e.currentTarget && onClose()}
      role="dialog"
      aria-modal="true"
      aria-label={`${work.title} demo`}
    >
      <div className="modal-content">
        <button
          className="modal-close"
          onClick={onClose}
          aria-label="Close modal"
        >
          ×
        </button>
        <video
          ref={videoRef}
          className="modal-video"
          src={work.video}
          controls
          loop
          playsInline
        />
        <div className="modal-meta">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1rem",
              marginBottom: "0.5rem",
            }}
          >
            <h2
              style={{
                fontFamily: "Space Grotesk, sans-serif",
                fontSize: "1.25rem",
                fontWeight: 700,
                color: "var(--text)",
              }}
            >
              {work.title}
            </h2>
            <span
              className={`work-category-badge ${work.category.toLowerCase()}`}
            >
              {work.category}
            </span>
          </div>
          <p
            style={{
              fontSize: "0.9rem",
              color: "var(--text-muted)",
              marginBottom: "1rem",
              lineHeight: 1.65,
            }}
          >
            {work.description}
          </p>
          <div className="work-tags">
            {work.tags.map((tag) => (
              <span key={tag} className="tag">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

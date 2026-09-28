"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import {
  personalInfo,
  skills,
  works,
  experience,
  education,
  certifications,
  WorkItem,
} from "./data";
import WorksModal from "./components/WorksModal";

const ParticleCanvas = dynamic(() => import("./components/ParticleCanvas"), {
  ssr: false,
});

export default function Home() {
  const [activeWork, setActiveWork] = useState<WorkItem | null>(null);

  return (
    <>
      <ParticleCanvas />

      {/* ── Nav ─────────────────────────────────────── */}
      <nav className="nav">
        <div className="nav-logo">
          Fritz<span>.</span>
        </div>
        <ul className="nav-links">
          <li>
            <a href="#works">Works</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>

      {/* ── Hero ─────────────────────────────────────── */}
      <section id="home" className="section" style={{ position: "relative" }}>
        <div className="hero">
          <div className="hero-content">
            <p className="hero-eyebrow">Available for new opportunities</p>
            <h1 className="hero-name">{personalInfo.name}</h1>
            <p className="hero-title">{personalInfo.title}</p>
            <p className="hero-summary">{personalInfo.summary}</p>
            <div className="hero-cta">
              <a href="#works" className="btn-primary">
                View my work
              </a>
              <a href="#contact" className="btn-secondary">
                Get in touch
              </a>
            </div>
          </div>
        </div>

        {/* Stats row */}
        <div
          style={{
            borderTop: "1px solid var(--border)",
            borderBottom: "1px solid var(--border)",
            background: "rgba(9,15,30,0.6)",
            position: "relative",
            zIndex: 1,
          }}
        >
          <div className="container">
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: 0,
              }}
            >
              {[
                { value: "15+", label: "Years of experience" },
                { value: "50+", label: "Interactive campaigns" },
                { value: "10+", label: "Games shipped" },
              ].map((stat, i) => (
                <div
                  key={i}
                  style={{
                    padding: "2rem",
                    borderRight: i < 2 ? "1px solid var(--border)" : "none",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "Space Grotesk, sans-serif",
                      fontSize: "clamp(2rem, 4vw, 3rem)",
                      fontWeight: 700,
                      color: "var(--cyan)",
                      lineHeight: 1,
                      letterSpacing: "-0.03em",
                      marginBottom: "0.375rem",
                    }}
                  >
                    {stat.value}
                  </div>
                  <div
                    style={{
                      fontSize: "0.875rem",
                      color: "var(--text-faint)",
                      fontFamily: "Inter, sans-serif",
                    }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Works ─────────────────────────────────────── */}
      <section id="works" className="section section-pad">
        <div className="container">
          <div className="section-header">
            <p className="section-label">Selected work</p>
            <h2 className="section-title">
              Games &amp; interfaces I&apos;ve built
            </h2>
          </div>
        </div>

        <div
          className="works-grid"
          style={{ maxWidth: 1200, margin: "0 auto" }}
        >
          {works.map((work) => (
            <button
              key={work.id}
              className="work-card"
              onClick={() => setActiveWork(work)}
              style={{
                textAlign: "left",
                border: "none",
                cursor: "pointer",
              }}
              aria-label={`Open ${work.title} demo`}
            >
              <div className="work-video-wrap">
                <video
                  src={work.video}
                  muted
                  loop
                  playsInline
                  onMouseEnter={(e) =>
                    (e.currentTarget as HTMLVideoElement).play()
                  }
                  onMouseLeave={(e) => {
                    const v = e.currentTarget as HTMLVideoElement;
                    v.pause();
                    v.currentTime = 0;
                  }}
                />
                <span
                  className={`work-category-badge ${work.category.toLowerCase()}`}
                >
                  {work.category}
                </span>
                {/* Play overlay */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "rgba(5,10,20,0.5)",
                    opacity: 0,
                    transition: "opacity 0.2s",
                  }}
                  className="play-overlay"
                >
                  <div
                    style={{
                      width: 52,
                      height: 52,
                      border: "1.5px solid rgba(0,212,255,0.8)",
                      background: "rgba(0,212,255,0.05)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M4 2l10 6-10 6V2z" fill="#00d4ff" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="work-info">
                <h3 className="work-title">{work.title}</h3>
                <p className="work-desc">{work.description}</p>
                <div className="work-tags">
                  {work.tags.map((tag) => (
                    <span key={tag} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* ── Skills ─────────────────────────────────────── */}
      <section
        id="skills"
        className="section section-pad"
        style={{ background: "var(--bg-2)" }}
      >
        <div className="container">
          <div className="section-header">
            <p className="section-label">Technical skills</p>
            <h2 className="section-title">What I work with</h2>
          </div>
          <div className="skills-grid">
            {Object.entries(skills).map(([group, items]) => (
              <div key={group} className="skill-group">
                <h3 className="skill-group-name">{group}</h3>
                <div className="skill-list">
                  {items.map((skill) => (
                    <span key={skill} className="skill-pill">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
            <div className="skill-group" />
          </div>
        </div>
      </section>

      {/* ── Experience ─────────────────────────────────────── */}
      <section id="experience" className="section section-pad">
        <div className="container">
          <div className="section-header">
            <p className="section-label">Career</p>
            <h2 className="section-title">Where I&apos;ve worked</h2>
          </div>
          <div className="experience-list">
            {experience.map((exp, i) => (
              <div key={i} className="experience-item">
                <div className="exp-left">
                  <div className="exp-company">{exp.company}</div>
                  <div className="exp-period">{exp.period}</div>
                  {exp.type && <div className="exp-type">{exp.type}</div>}
                </div>
                <div className="exp-right">
                  <div className="exp-role">{exp.role}</div>
                  <ul className="exp-highlights">
                    {exp.highlights.map((h, j) => (
                      <li key={j}>{h}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Education + certs */}
          <div
            style={{
              marginTop: "4rem",
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "1.5px",
              background: "var(--border)",
            }}
          >
            <div
              style={{
                background: "var(--bg-2)",
                padding: "2rem",
              }}
            >
              <p
                style={{
                  fontSize: "0.8125rem",
                  color: "var(--cyan)",
                  fontFamily: "Inter, sans-serif",
                  marginBottom: "1rem",
                }}
              >
                Education
              </p>
              <div
                style={{
                  fontFamily: "Space Grotesk, sans-serif",
                  fontSize: "1rem",
                  fontWeight: 600,
                  color: "var(--text)",
                  marginBottom: "0.25rem",
                }}
              >
                {education.degree}
              </div>
              <div
                style={{
                  fontSize: "0.875rem",
                  color: "var(--text-muted)",
                }}
              >
                {education.school} · {education.year}
              </div>
            </div>
            <div
              style={{
                background: "var(--bg-2)",
                padding: "2rem",
              }}
            >
              <p
                style={{
                  fontSize: "0.8125rem",
                  color: "var(--cyan)",
                  fontFamily: "Inter, sans-serif",
                  marginBottom: "1rem",
                }}
              >
                Certifications
              </p>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.75rem",
                }}
              >
                {certifications.map((cert) => (
                  <div key={cert.name}>
                    <div
                      style={{
                        fontFamily: "Space Grotesk, sans-serif",
                        fontSize: "0.9375rem",
                        fontWeight: 600,
                        color: "var(--text)",
                        marginBottom: "0.125rem",
                      }}
                    >
                      {cert.name}
                    </div>
                    <div
                      style={{
                        fontSize: "0.8125rem",
                        color: "var(--text-faint)",
                      }}
                    >
                      {cert.date}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Contact ─────────────────────────────────────── */}
      <section
        id="contact"
        className="section section-pad"
        style={{ background: "var(--bg-2)" }}
      >
        <div className="container">
          <div className="about-grid">
            <div>
              <div className="section-header">
                <p className="section-label">Contact</p>
                <h2 className="section-title">
                  Let&apos;s build something together
                </h2>
              </div>
              <p className="about-text">
                I bring 15+ years of frontend and game development to every
                project — whether that&apos;s a production React application, a
                real-time WebGL experience, or a fully interactive game built
                with Phaser. I care about the performance, the feel, and the
                detail that separates good from great.
              </p>
              <p className="about-text" style={{ marginTop: "1.25rem" }}>
                If you have a project in mind — or just want to talk about
                interactive frontend, games, or the intersection of both — reach
                out.
              </p>
            </div>
            <div className="contact-card">
              <h3>Get in touch</h3>
              <div className="contact-row">
                <div className="contact-item">
                  <span className="contact-label">Email</span>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="contact-value"
                  >
                    {personalInfo.email}
                  </a>
                </div>
                <div className="contact-item">
                  <span className="contact-label">Phone</span>
                  <a
                    href={`tel:${personalInfo.phone.replace(/\s/g, "")}`}
                    className="contact-value"
                  >
                    {personalInfo.phone}
                  </a>
                </div>
                <div className="contact-item">
                  <span className="contact-label">LinkedIn</span>
                  <a
                    href={personalInfo.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-value"
                  >
                    {personalInfo.linkedin}
                  </a>
                </div>
              </div>
              <div style={{ marginTop: "2rem" }}>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="btn-primary"
                  style={{ width: "100%", justifyContent: "center" }}
                >
                  Send a message
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Footer ─────────────────────────────────────── */}
      <footer className="footer">
        <span className="footer-copy">
          © {new Date().getFullYear()} Fritz D. Mauring
        </span>
        <span
          style={{
            fontSize: "0.8125rem",
            color: "var(--text-faint)",
            fontFamily: "Inter, sans-serif",
          }}
        >
          Frontend &amp; Game Developer · Philippines
        </span>
      </footer>

      {/* ── Modal ─────────────────────────────────────── */}
      {activeWork && (
        <WorksModal work={activeWork} onClose={() => setActiveWork(null)} />
      )}

      {/* Play overlay hover fix */}
      <style>{`
        .work-card:hover .play-overlay {
          opacity: 1 !important;
        }
      `}</style>
    </>
  );
}

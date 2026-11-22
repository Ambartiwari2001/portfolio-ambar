"use client";

import React, { useState } from "react";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { Icons } from "@/components/icons";
import { ScrollReveal } from "@/components/scroll-reveal";

export function ContactSection() {
  const { personal } = PORTFOLIO_DATA;
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Direct mailto trigger so the message actually opens mail client to deliver to Ambar
    const subject = encodeURIComponent(`Portfolio Inquiry from ${formState.name}`);
    const body = encodeURIComponent(
      `Hello Ambar,\n\n${formState.message}\n\n---\nFrom: ${formState.name}\nReply Email: ${formState.email}`
    );
    window.location.href = `mailto:${personal.email}?subject=${subject}&body=${body}`;

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormState({ name: "", email: "", message: "" });
      setTimeout(() => setSubmitted(false), 5000);
    }, 400);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-gradient-to-t from-cyan-600/10 via-indigo-600/10 to-transparent blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">
          {/* Left Column (Info & Quick Copy) - 2 cols */}
          <ScrollReveal delay={100} className="lg:col-span-2 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono">
              <Icons.mail size={14} />
              <span>DIRECT CONTACT</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
              Let&apos;s build scalable{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">
                systems
              </span>{" "}
              together.
            </h2>

            <p className="text-sm text-zinc-400 leading-relaxed font-normal">
              Whether you need backend microservices architecture, API performance benchmarking, full-stack solutions, or want to discuss technical opportunities, feel free to reach out directly.
            </p>

            {/* Email Quick-Copy Card */}
            <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-xl space-y-2 hover:border-cyan-500/30 transition-colors">
              <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-400">
                Email Address
              </span>
              <div className="flex items-center justify-between gap-3">
                <span className="text-sm font-mono text-zinc-200 truncate font-medium">
                  {personal.email}
                </span>
                <button
                  onClick={copyEmail}
                  className="px-3 py-1.5 rounded-lg bg-white/[0.06] hover:bg-white/[0.1] text-xs font-mono text-zinc-300 hover:text-white border border-white/10 flex items-center gap-1.5 transition-all cursor-pointer active:scale-95"
                  title="Copy email address"
                >
                  {copied ? (
                    <>
                      <Icons.check size={14} className="text-emerald-400" />
                      <span className="text-emerald-400 font-semibold">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Icons.copy size={14} />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Phone & Location Details */}
            <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 space-y-2.5">
              <div className="flex items-center justify-between text-xs text-zinc-300">
                <span className="text-zinc-500 font-mono">Direct Phone:</span>
                <a
                  href={`tel:${personal.phone}`}
                  className="text-cyan-400 hover:underline font-mono font-medium"
                >
                  {personal.phone}
                </a>
              </div>
              <div className="flex items-center justify-between text-xs text-zinc-300">
                <span className="text-zinc-500 font-mono">LinkedIn:</span>
                <a
                  href={personal.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="text-cyan-400 hover:underline font-mono truncate max-w-[200px]"
                >
                  in/ambar-tiwari-098b34227
                </a>
              </div>
              <div className="flex items-center justify-between text-xs text-zinc-300">
                <span className="text-zinc-500 font-mono">Current Base:</span>
                <span className="font-mono">{personal.location}</span>
              </div>
            </div>
          </ScrollReveal>

          {/* Right Column (Interactive Contact Form) - 3 cols */}
          <ScrollReveal delay={200} className="lg:col-span-3">
            <div className="p-6 sm:p-8 rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-xl relative shadow-2xl hover:border-cyan-500/30 transition-all">
              <h3 className="text-xl font-bold text-white mb-2">Send a Message</h3>
              <p className="text-xs text-zinc-400 mb-6 font-mono">
                Fill out your details below and I will get back to you promptly.
              </p>

              {submitted ? (
                <div className="p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-center space-y-2">
                  <div className="w-10 h-10 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                    <Icons.check size={20} />
                  </div>
                  <h4 className="text-sm font-bold text-white">Message Delivered!</h4>
                  <p className="text-xs text-zinc-300">
                    Thank you for reaching out, Ambar will review your message shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-zinc-300">Your Name</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Alex Smith"
                        value={formState.name}
                        onChange={(e) =>
                          setFormState({ ...formState, name: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-zinc-500 text-base sm:text-sm focus:outline-none focus:border-cyan-400 transition-colors"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-zinc-300">Your Email</label>
                      <input
                        type="email"
                        required
                        placeholder="alex@example.com"
                        value={formState.email}
                        onChange={(e) =>
                          setFormState({ ...formState, email: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-zinc-500 text-base sm:text-sm focus:outline-none focus:border-cyan-400 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-zinc-300">Message / Project Scope</label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Describe your architecture requirements, project scope, or opportunity..."
                      value={formState.message}
                      onChange={(e) =>
                        setFormState({ ...formState, message: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-zinc-500 text-base sm:text-sm focus:outline-none focus:border-cyan-400 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto px-7 py-3.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 shadow-xl shadow-cyan-500/20 active:scale-95 transition-all cursor-pointer flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <span>Sending message...</span>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Icons.arrowRight size={16} />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

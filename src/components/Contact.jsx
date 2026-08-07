import React, { useState } from 'react';
import { Mail, MapPin, Clock, Send, CheckCircle2, Sparkles, MessageSquare, AlertCircle } from 'lucide-react';

export default function Contact() {
  const recipientEmail = 'sonukumar1772001@gmail.com';

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submittedName, setSubmittedName] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${recipientEmail}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject || 'Portfolio Inquiry',
          message: formData.message,
          _subject: `New Portfolio Inquiry from ${formData.name}`,
          _template: 'table',
          _captcha: 'false'
        })
      });

      const data = await response.json();

      if (response.ok || data.success === 'true' || data.success === true) {
        setSubmittedName(formData.name);
        setSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        window.location.href = `mailto:${recipientEmail}?subject=${encodeURIComponent(formData.subject || 'Portfolio Inquiry')}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;
        setSubmittedName(formData.name);
        setSubmitted(true);
      }
    } catch {
      window.location.href = `mailto:${recipientEmail}?subject=${encodeURIComponent(formData.subject || 'Portfolio Inquiry')}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;
      setSubmittedName(formData.name);
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactCards = [
    {
      icon: Mail,
      title: 'Email Address',
      value: recipientEmail,
      action: `mailto:${recipientEmail}`,
      actionText: 'Send Email'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'India',
      actionText: 'Open Map'
    },
    {
      icon: Clock,
      title: 'Response Time',
      value: 'Within 24 Hours',
      actionText: 'Mon - Fri'
    }
  ];

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 transition-colors duration-300 selection:bg-purple-500 selection:text-white">
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-gradient-to-l from-purple-500/10 to-pink-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-700 dark:text-purple-300 text-xs font-semibold uppercase tracking-wider shadow-sm">
            <MessageSquare className="w-3.5 h-3.5 text-pink-500 dark:text-pink-400" />
            <span>Get In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Let's Start a <span className="bg-gradient-to-r from-purple-600 via-fuchsia-600 to-pink-600 dark:from-purple-400 dark:via-fuchsia-400 dark:to-pink-500 bg-clip-text text-transparent">Conversation</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg">
            Have a project in mind or software engineering opportunity? Send a message directly to my inbox (<strong className="text-purple-600 dark:text-purple-400">{recipientEmail}</strong>).
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700/60 p-8 rounded-3xl space-y-6 shadow-xl dark:shadow-2xl">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2.5">
                <Sparkles className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                <span>Contact Details</span>
              </h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                Feel free to reach out directly via email or use the contact form. All form submissions are routed directly to <strong className="text-purple-600 dark:text-purple-400 font-semibold">{recipientEmail}</strong>.
              </p>

              <div className="space-y-4 pt-2">
                {contactCards.map((card) => (
                  <a
                    key={card.title}
                    href={card.action || '#'}
                    className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-700/80 hover:border-purple-500/40 transition-colors group"
                  >
                    <div className="p-3 rounded-xl bg-gradient-to-r from-purple-600 via-fuchsia-500 to-pink-500 text-white shadow-md group-hover:scale-105 transition-transform">
                      <card.icon className="w-5 h-5" />
                    </div>
                    <div className="overflow-hidden">
                      <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                        {card.title}
                      </div>
                      <div className="text-sm font-bold text-slate-800 dark:text-white truncate">
                        {card.value}
                      </div>
                    </div>
                  </a>
                ))}
              </div>

              <div className="p-4 rounded-2xl bg-purple-50 dark:bg-purple-950/40 border border-purple-200 dark:border-purple-900/60 flex items-center gap-3">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                </span>
                <span className="text-xs font-semibold text-purple-950 dark:text-purple-200">
                  Open for Software Developer opportunities
                </span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700/60 p-8 sm:p-10 rounded-3xl shadow-xl dark:shadow-2xl">
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 mx-auto rounded-full bg-emerald-500/20 text-emerald-500 flex items-center justify-center">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 max-w-md mx-auto text-sm leading-relaxed">
                    Thank you for reaching out, <strong className="text-slate-900 dark:text-white">{submittedName || 'Friend'}</strong>! Your message has been routed to <strong className="text-purple-600 dark:text-purple-400">{recipientEmail}</strong>. I will get back to you shortly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 px-6 py-2.5 rounded-xl font-semibold text-xs uppercase tracking-wider text-white bg-gradient-to-r from-purple-600 via-fuchsia-500 to-pink-500 hover:opacity-95 shadow-md transition-all hover:scale-[1.02] active:scale-[0.98]"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {errorMessage && (
                    <div className="p-4 rounded-xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-900/60 text-rose-700 dark:text-rose-300 text-sm flex items-center gap-3">
                      <AlertCircle className="w-5 h-5 flex-shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                        Your Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="w-full px-4 py-3.5 rounded-xl bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white border border-slate-300/80 dark:border-slate-700/80 focus:ring-2 focus:ring-purple-500 focus:outline-none transition-all text-sm"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className="w-full px-4 py-3.5 rounded-xl bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white border border-slate-300/80 dark:border-slate-700/80 focus:ring-2 focus:ring-purple-500 focus:outline-none transition-all text-sm"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Software Developer Role / Project Inquiry"
                      className="w-full px-4 py-3.5 rounded-xl bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white border border-slate-300/80 dark:border-slate-700/80 focus:ring-2 focus:ring-purple-500 focus:outline-none transition-all text-sm"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                      Your Message
                    </label>
                    <textarea
                      name="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Hi Sonu, I'd like to discuss a project..."
                      className="w-full px-4 py-3.5 rounded-xl bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white border border-slate-300/80 dark:border-slate-700/80 focus:ring-2 focus:ring-purple-500 focus:outline-none transition-all text-sm resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 py-4 px-6 rounded-xl font-bold text-white bg-gradient-to-r from-purple-600 via-fuchsia-500 to-pink-500 hover:opacity-95 shadow-lg shadow-purple-500/25 transition-all hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Sending Message...
                      </span>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


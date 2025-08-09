import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Mail, Github, Linkedin } from "lucide-react";
import { RainbowButton } from "@/components/ui/rainbow-button";

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState("");

  // Load audio (sound effect)
  const sendSound = useRef<HTMLAudioElement | null>(null);

  const playSound = () => {
    if (sendSound.current) {
      sendSound.current.currentTime = 0; // Restart from beginning
      sendSound.current.play().catch((err) => {
        console.error("Sound play error:", err);
      });
    }
  };

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    playSound(); // 👈 Play sound on click
    setStatus("Sending...");

    if (!form.current) return;

    emailjs
      .sendForm(
        "service_z60mnhb",
        "template_k2i3kob",
        form.current,
        "Xx408ITmVJDb4iFXW"
      )
      .then(
        () => {
          const formData = new FormData(form.current!);
          const name = formData.get("user_name") as string;
          const email = formData.get("user_email") as string;
          const message = formData.get("message") as string;

          sendTelegramMessage(name, email, message);

          setStatus("Message sent successfully!");
          form.current?.reset();
        },
        (error) => {
          console.error("EmailJS Error:", error);
          setStatus(`Failed to send message. Error: ${error.text}`);
        }
      );
  };

  const sendTelegramMessage = async (name: string, email: string, message: string) => {
    const botToken = "7739141586:AAFBMmeQZv-DBSMQ8XCifXpBErDoQ7Dd_ZM";
    const chatId = "1147649504";
    const text = `📥 *New Contact Form Message*\n\n👤 *Name:* ${name}\n📧 *Email:* ${email}\n📝 *Message:* ${message}`;

    try {
      await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: chatId,
          text: text,
          parse_mode: "Markdown",
        }),
      });
    } catch (err) {
      console.error("Telegram Error:", err);
    }
  };

  return (
    <div className="relative min-h-screen px-4 py-16 bg-background text-foreground transition-colors duration-300 overflow-hidden pt-24">
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 opacity-20 dark:opacity-10"
        style={{
          backgroundImage: `radial-gradient(circle at 25px 25px, hsl(var(--muted)) 2px, transparent 0)`,
          backgroundSize: '50px 50px'
        }}
      />
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-indigo-50/30 to-purple-50/50 dark:from-blue-950/30 dark:via-indigo-950/20 dark:to-purple-950/30" />
      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-indigo-500 to-blue-400 dark:from-blue-400 dark:via-indigo-300 dark:to-blue-200 bg-clip-text text-transparent">Get in Touch</h1>
        <p className="mb-12 text-lg text-muted-foreground">
          Have a question or want to collaborate? Send me a message!
        </p>
        {/* Hidden audio element */}
        <audio ref={sendSound} src="/sounds/send.mp3" preload="auto" />
        <form
          ref={form}
          onSubmit={sendEmail}
          className="space-y-6 bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl border border-white/20 dark:border-gray-800/50 rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-500 overflow-hidden text-left p-8"
        >
          <div>
            <label htmlFor="user_name" className="block mb-2 font-medium">
              Name
            </label>
            <input
              type="text"
              name="user_name"
              required
              className="w-full p-3 rounded-lg bg-white/60 dark:bg-gray-900/60 border border-white/20 dark:border-gray-800/50 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              placeholder="Your Name"
            />
          </div>
          <div>
            <label htmlFor="user_email" className="block mb-2 font-medium">
              Email
            </label>
            <input
              type="email"
              name="user_email"
              required
              className="w-full p-3 rounded-lg bg-white/60 dark:bg-gray-900/60 border border-white/20 dark:border-gray-800/50 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label htmlFor="message" className="block mb-2 font-medium">
              Message
            </label>
            <textarea
              name="message"
              required
              rows={5}
              className="w-full p-3 rounded-lg bg-white/60 dark:bg-gray-900/60 border border-white/20 dark:border-gray-800/50 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              placeholder="Your Message"
            ></textarea>
          </div>
          <RainbowButton
            type="submit"
            className="w-full py-3"
          >
            Send Message
          </RainbowButton>
          {status && (
            <p
              className={`mt-4 text-sm ${
                status.includes("successfully") ? "text-green-500" : "text-red-500"
              }`}
            >
              {status}
            </p>
          )}
        </form>
        <div className="mt-12 flex justify-center gap-8 text-muted-foreground text-2xl">
          <a
            href="mailto:kankati.mokshagnaanurag@gmail.com"
            className="hover:text-primary"
            aria-label="Email"
          >
            <Mail />
          </a>
          <a
            href="https://github.com/MokshagnaAnurag"
            target="_blank"
            rel="noreferrer"
            className="hover:text-primary"
            aria-label="GitHub"
          >
            <Github />
          </a>
          <a
            href="https://linkedin.com/in/kankati-mokshagna-anurag/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-primary"
            aria-label="LinkedIn"
          >
            <Linkedin />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;

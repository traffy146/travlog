"use client";

import { useState } from "react";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";

export default function Subscribe() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      await addDoc(collection(db, "subscribers"), {
        email,
        createdAt: new Date(),
      });
      setStatus("success");
      setMessage("Thank you for subscribing!");
      setEmail("");
    } catch (error) {
      setStatus("error");
      setMessage("Failed to subscribe. Please try again.");
      console.error("Subscription error:", error); // Log the error for debugging
    }
  };

  return (
    <div className="bg-violet/5 py-8 md:py-12 lg:py-16">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="text-center mb-6 md:mb-8">
          <h2 className="text-lg w-auto text-xl tracking-[.25em] mb-2 md:mb-3 font-bold text-pink">
            SUBSCRIBE TO OUR NEWSLETTER
          </h2>
          <h3 className="text-5xl sm:text-5xl lg:text-6xl">
            Prepare yourself & let's explore the beauty of the world
          </h3>
        </div>

        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </div>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your Email"
                className="w-full pl-12 pr-4 py-3 rounded-full border focus:outline-none focus:ring-2 focus:ring-violet"
                required
              />
            </div>
            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full sm:w-auto px-8 py-3 bg-violet text-white rounded-full hover:bg-violet/90 disabled:opacity-50"
            >
              {status === "loading" ? "Subscribing..." : "Subscribe"}
            </button>
          </div>
          {message && (
            <p
              className={`mt-4 text-center text-sm md:text-base ${
                status === "error" ? "text-red-500" : "text-green-500"
              }`}
            >
              {message}
            </p>
          )}
        </form>
      </div>
    </div>
  );
}

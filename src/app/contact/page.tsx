"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { FaMapMarkerAlt, FaPhone, FaClock } from "react-icons/fa";
import { Loader, X } from "lucide-react";

function Toast({ message, onClose }: { message: string; onClose: () => void }) {
  return (
    <div className="toast toast-top toast-center shadow-lg rounded-lg p-4 max-w-xs w-full">
      <div className="alert alert-success flex items-center justify-between p-4 bg-green-600 rounded-lg text-white">
        <span className="text-sm font-medium">{message}</span>
        <Button
          className="p-2 bg-green-600 hover:bg-green-700 rounded-full"
          onClick={onClose}
        >
          <X className="text-white h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}

export default function ContactUs() {
  const [showToast, setShowToast] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setShowToast(false);

    setTimeout(() => {
      setIsLoading(false);
      setShowToast(true);
    }, 3000);
  };

  const handleToastClose = () => {
    setShowToast(false);
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background text-foreground">
      {showToast && (
        <Toast
          message="Message sent successfully."
          onClose={handleToastClose}
        />
      )}

      <div className="max-w-7xl mx-auto grid gap-12 md:grid-cols-2">
        <div className="space-y-8">
          <h3 className="text-primary font-medium text-lg mb-2">
            Get In Touch With <span className="text-primary">Sole Arcade</span>
          </h3>
          <p className="text-muted-foreground">
            Have questions about our sneakers or services? Feel free to reach
            out. We’re here to help you step into style and comfort!
          </p>
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <FaMapMarkerAlt className="text-primary text-2xl" />
              <div>
                <h4 className="text-lg font-semibold">Address</h4>
                <p className="text-sm text-muted-foreground">
                  123 Street, Karachi, Pakistan
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <FaPhone className="text-primary text-2xl" />
              <div>
                <h4 className="text-lg font-semibold">Phone</h4>
                <p className="text-sm text-muted-foreground">
                  Customer Support: +1 (800) 123-4567 <br />
                  Orders: +1 (800) 987-6543
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <FaClock className="text-primary text-2xl" />
              <div>
                <h4 className="text-lg font-semibold">Working Hours</h4>
                <p className="text-sm text-muted-foreground">
                  Monday-Saturday: 9:00 AM - 9:00 PM <br />
                  Sunday: 11:00 AM - 7:00 PM
                </p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-muted-foreground"
              >
                Your Name <span className="text-primary">*</span>
              </label>
              <input
                type="text"
                id="name"
                required
                className="mt-1 block w-full border border-border bg-background rounded-lg px-4 py-2 text-sm focus:ring-primary focus:border-primary"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-muted-foreground"
              >
                Email Address <span className="text-primary">*</span>
              </label>
              <input
                type="email"
                id="email"
                required
                className="mt-1 block w-full border border-border bg-background rounded-lg px-4 py-2 text-sm focus:ring-primary focus:border-primary"
                placeholder="name@example.com"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-muted-foreground"
              >
                Message <span className="text-primary">*</span>
              </label>
              <textarea
                id="message"
                rows={4}
                required
                className="mt-1 block w-full border border-border bg-background rounded-lg px-4 py-2 text-sm focus:ring-primary focus:border-primary"
                placeholder="Hi! I’d like to ask about..."
              ></textarea>
            </div>
            <Button
              type="submit"
              className="w-full py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/80"
            >
              {isLoading ? (
                <div className="flex items-center justify-center space-x-2">
                  <Loader className="animate-spin h-5 w-5 text-white" />
                  <span>Sending...</span>
                </div>
              ) : (
                "Submit"
              )}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}

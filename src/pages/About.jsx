// src/pages/About.jsx
import React from 'react';

/* small reusable card */
const Card = ({ title, children }) => (
  <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition">
    <h2 className="text-2xl font-bold text-indigo-700 mb-4">{title}</h2>
    <div className="text-gray-600 leading-relaxed space-y-3">{children}</div>
  </div>
);

export default function About() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 text-white">
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1350&q=80')] bg-cover bg-center" />
        <div className="relative container mx-auto px-6 py-20 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            About Propy Cons
          </h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
            Your trusted partner in real estate since 2010 – Connecting dreams with reality.
          </p>
        </div>
      </section>

      {/* Mission & Offer */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <Card title="🏡 Our Mission">
              <p>
                At Propy Cons we revolutionize real estate by delivering exceptional service, expert guidance and
                innovative solutions. Our mission is to make property transactions seamless, transparent and rewarding.
              </p>
              <p className="mt-4">
                We believe finding the perfect property should be an exciting journey—not a stressful ordeal.
              </p>
            </Card>

            <Card title="⭐ What We Offer">
              <ul className="space-y-2">
                {[
                  "Residential & commercial sales",
                  "Property management & rentals",
                  "Investment consultation",
                  "Legal & documentation support",
                  "3-D virtual tours",
                  "24 / 7 customer care"
                ].map((item, i) => (
                  <li key={i} className="flex items-center">
                    <span className="w-2 h-2 bg-indigo-500 rounded-full mr-3"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
            Why Choose Propy Cons?
          </h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {[
              { icon: "✓", title: "Expert Knowledge", color: "bg-indigo-600" },
              { icon: "⚡", title: "Fast Service", color: "bg-green-600" },
              { icon: "📱", title: "Tech Driven", color: "bg-pink-600" }
            ].map(({ icon, title, color }) => (
              <div key={title} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition">
                <div className={`w-16 h-16 ${color} text-white rounded-full flex items-center justify-center text-2xl mx-auto mb-4`}>
                  {icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{title}</h3>
                <p className="text-gray-600">
                  {title === "Expert Knowledge"
                    ? "Deep local market insight & years of expertise"
                    : title === "Fast Service"
                    ? "Quick response & efficient processes"
                    : "Modern tools for the best search experience"}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commitment */}
      <section className="py-16">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-6">Our Commitment</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            We are committed to exceptional real-estate services that exceed expectations. Our licensed
            professionals continuously invest in training, technology and market research to stay ahead.
          </p>
          <p className="text-lg text-gray-700">
            Your success is ours — we build long-term relationships based on trust and results.
          </p>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16 bg-gradient-to-br from-indigo-50 via-white to-pink-50">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-3xl font-bold text-center mb-10">Get In Touch</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-indigo-600 mb-4">Contact Information</h3>
              <ul className="space-y-3">
                <li className="flex items-center"><span className="mr-3">📧</span> info@propycons.com</li>
                <li className="flex items-center"><span className="mr-3">📞</span> +1 (555) 123-4567</li>
                <li className="flex items-center"><span className="mr-3">📍</span> 123 Real state Ave, Property City, PC 12345</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-indigo-600 mb-4">Business Hours</h3>
              <ul className="space-y-1 text-gray-700">
                <li>Mon – Fri: 9:00 AM – 7:00 PM</li>
                <li>Sat: 10:00 AM – 6:00 PM</li>
                <li>Sun: 12:00 PM – 5:00 PM</li>
                <li>Emergency: 24/7</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
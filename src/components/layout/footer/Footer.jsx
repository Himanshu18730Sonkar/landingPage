import React, { useState } from "react";

// Inline SVG components to avoid external icon dependency
const LayersIcon = ({ size = 18, strokeWidth = 2, className = "", ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
    <path d="M21 16V8l-9-5-9 5v8l9 5 9-5z" />
    <path d="M12 3v18" />
  </svg>
);

const MailIcon = ({ size = 16, strokeWidth = 2, className = "", ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
    <path d="M3 8.5v7a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
    <polyline points="22 6 12 13 2 6" />
  </svg>
);

const TwitterIcon = ({ size = 24, strokeWidth = 2, className = "", ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53A4.48 4.48 0 0 0 16.5 3c-2.5 0-4.5 2.3-3.9 4.7A12.94 12.94 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
  </svg>
);

const GithubIcon = ({ size = 24, strokeWidth = 2, className = "", ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
    <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.49.5.09.66-.22.66-.49 0-.24-.01-.87-.01-1.71-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1.01.07 1.54 1.04 1.54 1.04.9 1.54 2.36 1.09 2.94.83.09-.65.35-1.09.64-1.34-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0112 6.8c.85.004 1.7.114 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.85-2.34 4.7-4.57 4.95.36.31.68.92.68 1.85 0 1.33-.01 2.4-.01 2.72 0 .27.16.59.67.49A10.01 10.01 0 0022 12c0-5.52-4.48-10-10-10z" />
  </svg>
);

const LinkedinIcon = ({ size = 24, strokeWidth = 2, className = "", ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="1" />
    <path d="M8 11v10" />
    <path d="M16 11v10" />
    <path d="M12 11v10" />
  </svg>
);

const DribbbleIcon = ({ size = 24, strokeWidth = 2, className = "", ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
    <circle cx="12" cy="12" r="9" />
    <path d="M3.6 9.6a15 15 0 0 0 16.8 0" />
    <path d="M7.5 18.5a15 15 0 0 0 9-12" />
  </svg>
);
const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    // Add your newsletter logic here
    console.log("Subscribing:", email);
    setEmail("");
  };

  const navigation = {
    product: [
      { name: "Features", href: "#" },
      { name: "Integrations", href: "#" },
      { name: "Pricing", href: "#" },
      { name: "Changelog", href: "#" },
      { name: "Docs", href: "#" },
    ],
    company: [
      { name: "About Us", href: "#" },
      { name: "Careers", href: "#", badge: "Hiring" },
      { name: "Blog", href: "#" },
      { name: "Contact", href: "#" },
      { name: "Partners", href: "#" },
    ],
    resources: [
      { name: "Community", href: "#" },
      { name: "Terms of Service", href: "#" },
      { name: "Privacy Policy", href: "#" },
      { name: "Cookie Policy", href: "#" },
      { name: "Security", href: "#" },
    ],
    social: [
      { name: "Twitter", icon: TwitterIcon, href: "#" },
      { name: "GitHub", icon: GithubIcon, href: "#" },
      { name: "LinkedIn", icon: LinkedinIcon, href: "#" },
      { name: "Dribbble", icon: DribbbleIcon, href: "#" },
    ],
  };

  return (
    <footer
      className="bg-white border-t border-gray-200 pt-16 pb-8"
      aria-labelledby="footer-heading"
    >
    

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-16">
          {/* Brand & Newsletter Column (Spans 2 on large screens) */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white">
                <LayersIcon size={18} strokeWidth={3} className="text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900 tracking-tight">
                Joddo
              </span>
            </div>

            <p className="text-sm text-gray-500 leading-relaxed mb-8 max-w-sm">
              Designing the future of digital experiences. We build tools that
              help teams work better, faster, and more collaboratively.
            </p>

            <div className="max-w-md">
              <h3 className="text-sm font-semibold text-gray-900 tracking-wide uppercase mb-3">
                Subscribe to our newsletter
              </h3>
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <div className="relative grow">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                    <MailIcon size={16} className="text-gray-400" />
                  </div>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="block w-full rounded-md border-0 py-2 pl-10 pr-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6 transition-shadow"
                    placeholder="Enter your email"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="flex-none rounded-md bg-blue-600 px-3.5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-colors"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          {/* Navigation Columns */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:col-span-2 lg:col-span-3">
            {/* Column 1 */}
            <div>
              <h3 className="text-sm font-semibold text-gray-900 tracking-wide">
                Product
              </h3>
              <ul role="list" className="mt-4 space-y-3">
                {navigation.product.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="text-sm text-gray-500 hover:text-blue-600 transition-colors block"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 2 */}
            <div>
              <h3 className="text-sm font-semibold text-gray-900 tracking-wide">
                Company
              </h3>
              <ul role="list" className="mt-4 space-y-3">
                {navigation.company.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="text-sm text-gray-500 hover:text-blue-600 transition-colors inline-flex items-center"
                    >
                      {item.name}
                      {item.badge && (
                        <span className="ml-2 inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                          {item.badge}
                        </span>
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3 */}
            <div>
              <h3 className="text-sm font-semibold text-gray-900 tracking-wide">
                Resources
              </h3>
              <ul role="list" className="mt-4 space-y-3">
                {navigation.resources.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="text-sm text-gray-500 hover:text-blue-600 transition-colors block"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500 text-center md:text-left">
            &copy; {new Date().getFullYear()} BrandName Inc. All rights
            reserved.
          </p>
          <div className="flex space-x-6">
            {navigation.social.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-400 hover:text-gray-900 transition-colors transform hover:scale-110"
                >
                  <span className="sr-only">{item.name}</span>
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

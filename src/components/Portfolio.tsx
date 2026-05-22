import React from "react";
import { Plus } from "lucide-react";

type Client = {
  name: string;
  url: string;
  domain: string;
  logo?: string;
};

const clients: Client[] = [
  {
    name: "Stripe",
    url: "https://stripe.com",
    domain: "stripe.com",
    logo: "https://cdn.simpleicons.org/stripe/635BFF",
  },
  {
    name: "Slack",
    url: "https://slack.com",
    domain: "slack.com",
    logo: "https://cdn.simpleicons.org/slack/4A154B",
  },
  {
    name: "Notion",
    url: "https://notion.so",
    domain: "notion.so",
    logo: "https://cdn.simpleicons.org/notion/000000",
  },
  {
    name: "Dropbox",
    url: "https://dropbox.com",
    domain: "dropbox.com",
    logo: "https://cdn.simpleicons.org/dropbox/0061FF",
  },
  {
    name: "Shopify",
    url: "https://shopify.com",
    domain: "shopify.com",
    logo: "https://cdn.simpleicons.org/shopify/7AB55C",
  },
  {
    name: "Figma",
    url: "https://figma.com",
    domain: "figma.com",
    logo: "https://cdn.simpleicons.org/figma/F24E1E",
  },
];

const getClientLogo = (client: Client) =>
  client.logo ||
  `https://www.google.com/s2/favicons?domain=${client.domain}&sz=128`;

const Portfolio: React.FC = () => {
  const marqueeClients = [...clients, ...clients];

  return (
    <section id="portfolio" className="py-20 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="text-blue-600 font-semibold uppercase tracking-wide text-base">
            Our Clients
          </span>
          <h4 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3 mb-3">
            Trusted by teams building better digital products
          </h4>
          {/* <p className="text-lg text-gray-600">
            Brands we support.
          </p> */}
        </div>

        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-28 bg-gradient-to-r from-gray-50 to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-28 bg-gradient-to-l from-gray-50 to-transparent z-10" />

          <div className="group overflow-hidden py-4">
            <div className="flex w-max gap-6 animate-client-marquee group-hover:[animation-play-state:paused]">
              {marqueeClients.map((client, index) => (
                <a
                  key={`${client.name}-${index}`}
                  href={client.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit ${client.name}`}
                  className="group/card relative w-48 h-48 sm:w-56 sm:h-56 border border-gray-100 bg-white shadow-md flex flex-col items-center justify-center gap-5 px-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl"
                >
                  <span className="absolute top-4 right-4 w-10 h-10 bg-blue-600 text-white flex items-center justify-center opacity-0 scale-90 transition-all duration-300 group-hover/card:opacity-100 group-hover/card:scale-100">
                    <Plus className="h-5 w-5" />
                  </span>

                  <img
                    src={getClientLogo(client)}
                    alt={`${client.name} logo`}
                    className="w-20 h-20 sm:w-24 sm:h-24 object-contain"
                    loading="lazy"
                  />
                  <span className="text-base font-semibold text-gray-800">
                    {client.name}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* <p className="text-center text-sm text-gray-500 mt-6">
          Hover to pause. Click to visit.
        </p> */}
      </div>
    </section>
  );
};

export default Portfolio;

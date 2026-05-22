import { useEffect } from "react";
import { useLocation } from "react-router-dom";

type PageSeo = {
  title: string;
  description: string;
  keywords?: string;
};

const siteUrl = "https://emmatech.com";
const defaultImage = `${siteUrl}/images/logo2.png`;

const pageSeo: Record<string, PageSeo> = {
  "/": {
    title: "EmmaTech | Software Development, IT Support, UI/UX and SEO",
    description:
      "EmmaTech helps businesses build software, improve websites, manage IT support, design better user experiences, and grow with practical SEO and consulting.",
    keywords:
      "EmmaTech, software development Enugu, IT support Nigeria, UI UX design, SEO optimization, technology consulting",
  },
  "/service": {
    title: "Technology Services | EmmaTech",
    description:
      "Explore EmmaTech services including software development, managed IT services, UI/UX design, SEO optimization, and technology consulting.",
  },
  "/services/software-development": {
    title: "Software Development Services | EmmaTech",
    description:
      "Custom web applications, dashboards, business software, APIs, and database-driven tools built around your workflow.",
  },
  "/services/managed-it-services": {
    title: "Managed IT Services | EmmaTech",
    description:
      "Reliable IT support, system maintenance, technical assistance, and managed technology support for growing businesses.",
  },
  "/services/uiux-design": {
    title: "UI/UX Design Services | EmmaTech",
    description:
      "Clean interface design and user experience support for websites, web apps, dashboards, and digital products.",
  },
  "/services/seo": {
    title: "SEO Optimization Services | EmmaTech",
    description:
      "Technical SEO, on-page optimization, keyword structure, and website improvements that help customers find your business.",
  },
  "/services/consulting": {
    title: "Technology Consulting | EmmaTech",
    description:
      "Practical technology advice for project planning, digital strategy, product improvement, and business systems.",
  },
  "/about": {
    title: "About EmmaTech | Practical Technology Company",
    description:
      "Learn about EmmaTech, a technology services company helping businesses build reliable software, websites, and digital systems.",
  },
  "/team": {
    title: "EmmaTech Team | Software, Design, IT and SEO Specialists",
    description:
      "Meet the EmmaTech team behind software development, UI/UX design, IT support, SEO, and consulting work.",
  },
  "/contact": {
    title: "Contact EmmaTech | Start a Conversation",
    description:
      "Contact EmmaTech for software development, IT support, UI/UX design, SEO, consulting, or general support questions.",
  },
  "/get-a-quote": {
    title: "Get a Free Quote | EmmaTech",
    description:
      "Request a free quote for software development, IT support, UI/UX design, SEO optimization, or technology consulting.",
  },
  "/solutions": {
    title: "Digital Solutions | EmmaTech",
    description:
      "Explore practical digital solutions for websites, business software, IT support, product design, and search visibility.",
  },
  "/help": {
    title: "Help Center | EmmaTech",
    description:
      "Find quick help about EmmaTech services, projects, support, quotes, and contact options.",
  },
  "/support": {
    title: "Support Center | EmmaTech",
    description:
      "Get support from EmmaTech for websites, software projects, IT services, and technical assistance.",
  },
  "/blog": {
    title: "EmmaTech Blog | Software, SEO, Design and IT Insights",
    description:
      "Read practical EmmaTech insights on software development, IT support, UI/UX design, SEO, and technology planning.",
  },
  "/case-studies": {
    title: "Case Studies | EmmaTech",
    description:
      "Explore examples of how EmmaTech helps businesses improve software, support, design, and digital growth.",
  },
  "/privacy": {
    title: "Privacy Policy | EmmaTech",
    description:
      "Learn how EmmaTech handles website contact details, quote requests, newsletter signups, and user information.",
  },
  "/terms": {
    title: "Terms of Service | EmmaTech",
    description:
      "Read the basic terms for using the EmmaTech website and contacting us about technology services.",
  },
  "/cookies": {
    title: "Cookie Policy | EmmaTech",
    description:
      "Learn how cookies may work on the EmmaTech website and how visitors can manage browser cookie preferences.",
  },
};

const upsertMeta = (selector: string, create: () => HTMLMetaElement) => {
  let element = document.head.querySelector<HTMLMetaElement>(selector);

  if (!element) {
    element = create();
    document.head.appendChild(element);
  }

  return element;
};

const upsertLink = (rel: string) => {
  let element = document.head.querySelector<HTMLLinkElement>(
    `link[rel="${rel}"]`,
  );

  if (!element) {
    element = document.createElement("link");
    element.setAttribute("rel", rel);
    document.head.appendChild(element);
  }

  return element;
};

const setJsonLd = (id: string, data: object) => {
  let script = document.getElementById(id) as HTMLScriptElement | null;

  if (!script) {
    script = document.createElement("script");
    script.id = id;
    script.type = "application/ld+json";
    document.head.appendChild(script);
  }

  script.textContent = JSON.stringify(data);
};

const getSeoForPath = (pathname: string) => {
  if (pageSeo[pathname]) return pageSeo[pathname];

  return {
    title: "EmmaTech | Practical Technology Services",
    description:
      "EmmaTech provides software development, managed IT services, UI/UX design, SEO optimization, and technology consulting.",
  };
};

const getServiceSchema = (pathname: string, seo: PageSeo) => {
  if (!pathname.startsWith("/services/") && pathname !== "/service") {
    return null;
  }

  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: seo.title.replace(" | EmmaTech", ""),
    description: seo.description,
    provider: {
      "@type": "LocalBusiness",
      name: "EmmaTech",
      url: siteUrl,
      email: "emmatech307@gmail.com",
      telephone: "+2348161770490",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Enugu",
        addressCountry: "NG",
      },
    },
    areaServed: ["Nigeria", "Remote"],
  };
};

const SEOManager = () => {
  const location = useLocation();

  useEffect(() => {
    const pathname = location.pathname;
    const seo = getSeoForPath(pathname);
    const canonicalUrl = `${siteUrl}${pathname === "/" ? "" : pathname}`;

    document.title = seo.title;

    upsertMeta('meta[name="description"]', () => {
      const meta = document.createElement("meta");
      meta.name = "description";
      return meta;
    }).content = seo.description;

    upsertMeta('meta[name="keywords"]', () => {
      const meta = document.createElement("meta");
      meta.name = "keywords";
      return meta;
    }).content = seo.keywords || "EmmaTech, software development, IT support, UI UX design, SEO, consulting";

    upsertMeta('meta[property="og:title"]', () => {
      const meta = document.createElement("meta");
      meta.setAttribute("property", "og:title");
      return meta;
    }).content = seo.title;

    upsertMeta('meta[property="og:description"]', () => {
      const meta = document.createElement("meta");
      meta.setAttribute("property", "og:description");
      return meta;
    }).content = seo.description;

    upsertMeta('meta[property="og:type"]', () => {
      const meta = document.createElement("meta");
      meta.setAttribute("property", "og:type");
      return meta;
    }).content = "website";

    upsertMeta('meta[property="og:url"]', () => {
      const meta = document.createElement("meta");
      meta.setAttribute("property", "og:url");
      return meta;
    }).content = canonicalUrl;

    upsertMeta('meta[property="og:image"]', () => {
      const meta = document.createElement("meta");
      meta.setAttribute("property", "og:image");
      return meta;
    }).content = defaultImage;

    upsertMeta('meta[name="twitter:card"]', () => {
      const meta = document.createElement("meta");
      meta.name = "twitter:card";
      return meta;
    }).content = "summary_large_image";

    upsertLink("canonical").href = canonicalUrl;

    setJsonLd("emmatech-organization-schema", {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: "EmmaTech",
      url: siteUrl,
      logo: defaultImage,
      email: "emmatech307@gmail.com",
      telephone: "+2348161770490",
      address: {
        "@type": "PostalAddress",
        streetAddress: "15 Umuogbodoene Street, Garriki",
        addressLocality: "Enugu",
        addressCountry: "NG",
      },
      sameAs: [
        "https://facebook.com",
        "https://twitter.com",
        "https://linkedin.com",
        "https://github.com",
        "https://instagram.com",
      ],
    });

    const serviceSchema = getServiceSchema(pathname, seo);
    const existingServiceSchema = document.getElementById(
      "emmatech-service-schema",
    );

    if (serviceSchema) {
      setJsonLd("emmatech-service-schema", serviceSchema);
    } else if (existingServiceSchema) {
      existingServiceSchema.remove();
    }
  }, [location.pathname]);

  return null;
};

export default SEOManager;

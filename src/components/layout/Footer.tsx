import { Container } from "./Container";
import { Instagram, Facebook, Twitter } from "lucide-react";
import { client, urlFor } from "../../lib/sanity";
import { useState, useEffect } from "react";

interface FooterData {
  logo?: { asset: { _ref: string } };
  description?: string;
  linkColumns?: {
    title: string;
    links: { text: string; href: string }[];
  }[];
  socialLinks?: {
    platform: string;
    url: string;
  }[];
  followText?: string;
  copyrightText?: string;
  developer?: {
    name: string;
    url: string;
  };
}

const Footer = () => {
  const [footerData, setFooterData] = useState<FooterData | null>(null);

  useEffect(() => {
    const fetchFooterData = async () => {
      try {
        const data = await client.fetch('*[_type == "footer"][0]');
        setFooterData(data);
      } catch (error) {
        console.error("Error fetching footer data:", error);
      }
    };
    fetchFooterData();
  }, []);

  const logoSrc = footerData?.logo
    ? urlFor(footerData.logo).width(200).auto("format").url()
    : "https://i.ibb.co/LfhB81V/btLogo.webp";

  const description =
    footerData?.description ||
    "Comunidad de trekking en la Patagonia. Explorando senderos, respetando la naturaleza.";

  const linkColumns = footerData?.linkColumns || [
    {
      title: "Enlaces",
      links: [
        { text: "Inicio", href: "#" },
        { text: "Planes", href: "#" },
        { text: "Registro", href: "#" },
        { text: "FAQ", href: "#" },
      ],
    },
    {
      title: "Legal",
      links: [
        { text: "Términos y Condiciones", href: "#" },
        { text: "Política de Privacidad", href: "#" },
        { text: "Protocolo de Seguridad", href: "#" },
      ],
    },
  ];

  const socialLinks = footerData?.socialLinks || [
    { platform: "instagram", url: "https://www.instagram.com/bari.trekking" },
    { platform: "whatsapp", url: "https://wa.me/5492944123456" },
  ];

  const followText =
    footerData?.followText ||
    "Seguinos en Instagram para ver fotos de nuestras salidas";

  const copyrightText =
    footerData?.copyrightText ||
    `© ${new Date().getFullYear()} Bari.Trekking. Todos los derechos reservados.`;

  const developer = footerData?.developer || {
    name: "Santiago Chinellato",
    url: "https://portfolio-santiago-chinellato.vercel.app/",
  };

  const getSocialIcon = (platform: string) => {
    switch (platform.toLowerCase()) {
      case "instagram":
        return (
          <Instagram
            size={22}
            className="group-hover:scale-110 transition-transform"
          />
        );
      case "facebook":
        return (
          <Facebook
            size={22}
            className="group-hover:scale-110 transition-transform"
          />
        );
      case "twitter":
        return (
          <Twitter
            size={22}
            className="group-hover:scale-110 transition-transform"
          />
        );
      case "whatsapp":
        return (
          <svg
            className="w-5 h-5 group-hover:scale-110 transition-transform"
            fill="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <footer
      id="footer"
      className="bg-bari-dark text-white pt-16 pb-8 border-t border-white/10"
    >
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4 flex flex-col items-start">
            <img src={logoSrc} alt="Bari.Trekking Logo" className="w-24" />
            <p className="text-sm text-gray-300 text-center lg:text-left">
              {description}
            </p>
          </div>

          {linkColumns.map((col, idx) => (
            <div key={idx}>
              <h3 className="font-heading font-semibold mb-4 text-bari-gold">
                {col.title}
              </h3>
              <ul className="space-y-2 text-sm text-gray-300">
                {col.links.map((link, linkIdx) => (
                  <li key={linkIdx}>
                    <a
                      href={link.href}
                      className="hover:text-white transition-colors"
                    >
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="font-heading font-semibold mb-4 text-bari-gold">
              Conectate con Nosotros
            </h3>
            <div className="flex gap-4 mb-4">
              {socialLinks.map((social) => (
                <a
                  key={social.platform}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition-all group"
                  aria-label={social.platform}
                >
                  {getSocialIcon(social.platform)}
                </a>
              ))}
            </div>
            <p className="text-xs text-gray-400">{followText}</p>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-white/10 text-center text-sm text-gray-400">
          {copyrightText}
        </div>
        <p className="text-xs text-gray-400 text-center">
          Diseñado con ❤️ en Bariloche por{" "}
          <a
            href={developer.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-bari-gold"
          >
            {developer.name}
          </a>
        </p>
      </Container>
    </footer>
  );
};

export { Footer };

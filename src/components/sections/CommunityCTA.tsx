import { Container } from "../layout/Container";
import { Button } from "../ui/Button";
import { ArrowRight } from "lucide-react";
import { useSanity } from "../../hooks/useSanity";

interface CommunityCTAData {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
}

const CommunityCTA = () => {
  const { data: ctaData } = useSanity<CommunityCTAData>(
    `*[_type == "communityCTA"][0]`
  );

  const title = ctaData?.title || "¿Listo para ser parte?";
  const description =
    ctaData?.description ||
    "Sumate a la comunidad más social y hermosa de Bariloche.";
  const buttonText = ctaData?.buttonText || "Registrate en el sitio";
  const buttonLink = ctaData?.buttonLink || "#";

  return (
    <section className="py-24 bg-bari-teal text-white relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-bari-teal/20 rounded-full blur-[100px]" />

      <Container className="relative z-10 text-center">
        <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
          {title}
        </h2>
        <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
          {description}
        </p>

        <Button
          size="lg"
          className="bg-bari-orange hover:bg-bari-orange/90 text-white text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-orange-500/20 transition-all hover:-translate-y-1"
          onClick={() => (window.location.href = buttonLink)}
        >
          {buttonText}
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </Container>
    </section>
  );
};

export { CommunityCTA };

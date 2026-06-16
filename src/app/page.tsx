import { Hero } from "@/components/sections/Hero/Hero";
import { ValueProps } from "@/components/sections/ValueProps/ValueProps";
import { HowItWorks } from "@/components/sections/HowItWorks/HowItWorks";
import { PhotoBand } from "@/components/sections/PhotoBand/PhotoBand";
import { Faq } from "@/components/sections/Faq/Faq";
import { CtaBand } from "@/components/sections/CtaBand/CtaBand";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ValueProps />
      <HowItWorks />
      <PhotoBand />
      <Faq />
      <CtaBand />
    </>
  );
}

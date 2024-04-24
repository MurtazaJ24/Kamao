import Hero from "@/components/Landing/Hero";
import Journey from "@/components/Landing/Journey";
import Services from "@/components/Landing/Services";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Journey />
      <Services />
    </>
  );
}

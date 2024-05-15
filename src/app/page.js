import Hero from "@/components/hero/Hero";
import Products from "@/components/products/Products";
import Section from "@/components/section/Section";
export default function Home() {
  return (
    <main>
      <br />
      <br />
      <br />
      <br />
      <Hero />
      <Products numberOfCards={4} />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Section />
    </main>
  );
}

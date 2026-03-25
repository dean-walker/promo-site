import { AnimatedBackground } from "@/components/AnimatedBackground";
import { Container } from "@/components/Container";
import { PortfolioProjectCards } from "@/components/PortfolioProjectCards";
import { portfolioProjects } from "@/data/portfolio";

export default function PortfolioPage() {
  return (
    <>
      <AnimatedBackground />
      <Container className="py-12 sm:py-16">
        <header className="max-w-2xl">
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">Portfolio</h1>
          <p className="mt-3 text-base leading-7 text-zinc-600 dark:text-zinc-300">
            A few of my past publicly available projects. The majority are covered by NDA, but I'm
            happy to share more details if you're interested.
          </p>
        </header>

        <PortfolioProjectCards projects={portfolioProjects} />
      </Container>
    </>
  );
}

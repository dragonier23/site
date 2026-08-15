export default function HomePage() {
  return (
    <main className="grid min-h-screen place-items-center bg-[#060606] px-7 py-8 text-[#d2cec4]">
      <section className="w-full max-w-[460px]" aria-label="served python file">
        <div className="space-y-0 text-left font-[family-name:var(--font-geist-mono)] leading-[1.95] tracking-normal text-xs">
          <div>hi! this is xavier's site</div>
          <div>i'm an undergrad at cambridge doing computer science, and currently a quant dev intern at xantium</div>
          <div>&nbsp;</div>
          <div>some links: <a href="https://www.linkedin.com/in/xavieryeo/" className="underline">linkedin</a> <a href="https://github.com/dragonier23" className="underline">github</a> </div>
          <div>&nbsp;</div>
          <div>i love talking to anyone about anything. if you have an interesting project to collaborate on, reach out. i have a wide range of interests, from quantum computing, distributed systems, computer architecture, to machine learning and bayesianism</div>
          <div>&nbsp;</div>
          <div>past experience:</div>
          <div>quant dev @ xantium: mid-frequency team</div>
          <div>swe intern @ entropica labs: rl for quantum circuits compilation, and mcp servers for developmental work</div>
          <div>swe intern @ dsta: adversarial image generation with diffusion models</div>
        </div>
      </section>
    </main>
  );
}

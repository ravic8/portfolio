export default function HomePage() {
  return (
    <>
      {/* HERO (header spacing matches section spacing) */}
      <section className="section">
        <div className="container grid grid-cols-12 items-start gap-8 md:gap-12">
          {/* Text column */}
          <div className="col-span-12 md:col-span-7">
            <p className="kicker">Hello, my name is</p>

            <h1 className="mt-2 text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.08]">
              Raviteja NB
            </h1>

            <h2 className="mt-2 text-2xl md:text-3xl lg:text-4xl font-semibold text-neutral-700">
              Data Engineering &amp; AI Systems
            </h2>

            <p className="mt-6 text-base md:text-lg lg:text-xl text-neutral-700 max-w-xl">
              I build reliable data platforms and forecasting pipelines on AWS. Recently:
              MLflow + Airflow for 2000+ sites, ClickHouse tuned with MVs/partitions, and
              low-latency Kafka/WebSocket streams for market data.
            </p>

            <div className="mt-7 flex flex-wrap gap-4">
              <a href="/projects" className="btn btn-primary">My Work</a>
              <a href="/about" className="btn btn-outline">About Me</a>
              <a href="/resume" className="btn btn-outline">Resume</a>
            </div>

            <div className="mt-7 flex items-center gap-4">
              <a className="icon-btn" href="https://github.com/ravic8" target="_blank" rel="noreferrer" aria-label="GitHub">GH</a>
              <a className="icon-btn" href="https://www.linkedin.com/in/ravitejanb" target="_blank" rel="noreferrer" aria-label="LinkedIn">IN</a>
              <a className="icon-btn" href="/contact" aria-label="Contact">✉</a>
            </div>
          </div>

          {/* Portrait column (aligned with hero; object-cover prevents the “giant image” issue) */}
          <div className="col-span-12 md:col-span-5">
            <div className="card overflow-hidden rounded-2xl md:rounded-3xl">
              <img
                src="/portrait.jpg"
                alt="Raviteja NB"
                className="w-full aspect-[3/4] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Three cards */}
      <section className="section pt-0">
        <div className="container grid gap-6 md:gap-8 md:grid-cols-3">
          <div className="card p-7 md:p-8">
            <div className="text-2xl md:text-3xl mb-2">⚡</div>
            <h3 className="text-xl md:text-2xl font-semibold">What I do</h3>
            <p className="mt-3 md:mt-4 text-base md:text-lg text-neutral-700">
              Data platforms, forecasting pipelines, and real-time streams with AWS, Airflow,
              ClickHouse, and MLflow.
            </p>
          </div>

          <div className="card p-7 md:p-8">
            <div className="text-2xl md:text-3xl mb-2">🏆</div>
            <h3 className="text-xl md:text-2xl font-semibold">Recent wins</h3>
            <ul className="mt-3 md:mt-4 list-disc pl-6 text-base md:text-lg text-neutral-700">
              <li>2000+ sites on ML pipelines</li>
              <li>10–20ms streaming latencies</li>
              <li>~50% faster ClickHouse queries</li>
            </ul>
          </div>

          <div className="card p-7 md:p-8">
            <div className="text-2xl md:text-3xl mb-2">✍️</div>
            <h3 className="text-xl md:text-2xl font-semibold">Currently</h3>
            <p className="mt-3 md:mt-4 text-base md:text-lg text-neutral-700">
              Writing weekly and building Atlas (data engineering observer) — case studies on the blog.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

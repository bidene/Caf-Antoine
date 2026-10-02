import Image from "next/image";

export default function EventsSection() {
  return (
    <section id="events" className="bg-[#f3f3f3] py-10 md:py-16">
      <div className="mx-auto max-w-[1500px] px-3 md:px-6 lg:px-12">
        <div className="space-y-20 md:space-y-24">
          <div className="rounded-[2.5rem] bg-[#020d1a] p-5 md:p-8 lg:p-10">
            <div className="grid items-center gap-8 lg:grid-cols-[1.08fr_1fr] lg:gap-12">
              <div className="order-2 lg:order-1">
                <h1 className="text-[2.7rem] font-black leading-[0.95] tracking-[-0.06em] text-white md:text-[5.1rem] lg:text-[6rem]">
                  Le Dègue day 2025
                </h1>

                <p className="mt-8 max-w-[760px] text-[1.02rem] leading-8 text-white/85 md:text-[1.32rem] md:leading-[1.9]">
                  Le 5 juillet 2025, Café Antoine a célébré le Dègue Day. Cet événement a rassemblé tous les amoureux du dègue
                  autour d&apos;une dégustation gratuite du dègue antoinais. L&apos;après-midi a été marqué par des moments de rencontres fun,
                  de réseautage et de chill, dans une ambiance conviviale et chaleureuse fidèle à l&apos;esprit de Café Antoine.
                </p>
              </div>

              <div className="order-1 lg:order-2">
                <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#efeae4] shadow-[0_25px_60px_rgba(0,0,0,0.12)]">
                  <div className="relative h-[400px] overflow-hidden rounded-[1.7rem] md:h-[540px]">
                    <Image
                      src="/assets/images/cafe3.jpg"
                      alt="Dègue Day au Café Antoine"
                      fill
                      priority
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 45vw"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid items-center gap-8 lg:grid-cols-[1fr_1.08fr] lg:gap-12">
            <div className="order-2 lg:order-1">
              <div className="relative overflow-hidden rounded-[2rem] border border-[#d7d7d7] bg-[#ece7e2] p-2 shadow-[0_25px_60px_rgba(0,0,0,0.08)] md:p-3">
                <div className="relative h-[400px] overflow-hidden rounded-[1.7rem] md:h-[520px]">
                  <Image
                    src="/assets/images/cafe3.jpg"
                    alt="Rainy Day au Café Antoine"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </div>
            </div>

            <div className="order-1 flex items-center lg:order-2">
              <div className="max-w-[620px]">
                <h2 className="text-[2.5rem] font-black leading-[0.95] tracking-[-0.06em] text-[#171717] md:text-[4.8rem]">
                  Le Rainy day 2025
                </h2>

                <p className="mt-8 text-[1rem] leading-8 text-[#2a2a2a] md:text-[1.3rem] md:leading-[1.8]">
                  Le 22 juin 2025, Café Antoine a été parrain du Rainy Day, un événement organisé par Immatures Event&apos;s qui a
                  rassemblé de nombreux jeunes dans une ambiance de pure folie. Inspiré des jeux d&apos;enfance, le concept était simple : se
                  détendre, s&apos;amuser et revivre l&apos;insouciance en se lançant de l&apos;eau avec des pistolets-jouets. Entre rires, bonne
                  humeur et énergie débordante, l&apos;après-midi s&apos;est déroulé sous le signe de la convivialité et du fun, fidèle à
                  l&apos;esprit no limit de cette journée pas comme les autres.
                </p>
              </div>
            </div>
          </div>

          <div className="grid items-center gap-8 lg:grid-cols-[1.1fr_1fr] lg:gap-12">
            <div className="order-2 lg:order-1">
              <div className="relative overflow-hidden rounded-[2rem] border border-[#d0d0d0] bg-[#e7e3e0] p-2 shadow-[0_25px_60px_rgba(0,0,0,0.08)] md:p-3">
                <div className="relative h-[420px] overflow-hidden rounded-[1.7rem] md:h-[560px]">
                  <Image
                    src="/assets/images/cafe3.jpg"
                    alt="Festival Vootoon"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 55vw"
                  />
                </div>

                <div className="pointer-events-none absolute left-1/2 top-[52%] w-[58%] min-w-[260px] -translate-x-1/2 -translate-y-1/2 rounded-[1.1rem] border border-white/60 bg-gradient-to-br from-[#0d9af6] via-[#0d90ec] to-[#0d6cd9] p-4 text-white shadow-[0_25px_60px_rgba(19,95,190,0.35)] md:w-[48%] md:min-w-[330px] md:p-5">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <div className="text-[0.46rem] font-black uppercase tracking-[0.18em] text-[#dff8ff] md:text-[0.6rem]">
                        Vootoon
                      </div>
                      <div className="mt-1 text-2xl font-black leading-[0.9] tracking-[-0.05em] md:text-5xl">
                        Festival
                      </div>
                    </div>
                    <div className="rounded-full border border-white/40 bg-white/10 px-2 py-1 text-[0.38rem] font-bold uppercase tracking-[0.12em] md:text-[0.55rem]">
                      Design climatique
                    </div>
                  </div>

                  <div className="mt-4 grid grid-cols-[1fr_auto] items-end gap-3">
                    <div className="rounded-[0.9rem] bg-[#ffdc42] px-2.5 py-2 text-[#0f1b20] shadow-inner shadow-[#7d5800]/20 md:px-3 md:py-2.5">
                      <div className="text-[0.38rem] font-black uppercase tracking-[0.15em] md:text-[0.54rem]">Du 28</div>
                      <div className="text-[0.38rem] font-black uppercase tracking-[0.15em] md:text-[0.54rem]">Juillet</div>
                      <div className="text-[0.38rem] font-black uppercase tracking-[0.15em] md:text-[0.54rem]">Au 02</div>
                      <div className="text-[0.38rem] font-black uppercase tracking-[0.15em] md:text-[0.54rem]">Août</div>
                    </div>

                    <div className="text-right text-[0.42rem] font-semibold uppercase leading-[1.2] tracking-[0.08em] text-[#dceeff] md:text-[0.55rem]">
                      <div>À</div>
                      <div>CEGPA/UAC</div>
                      <div>Café Antoine</div>
                    </div>
                  </div>

                  <div className="mt-4 grid gap-1 text-[0.38rem] font-semibold uppercase tracking-[0.08em] text-[#e7f6ff] md:grid-cols-3 md:text-[0.54rem]">
                    <span>Ateliers</span>
                    <span>Conférences</span>
                    <span>Expositions</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 flex items-center lg:order-2">
              <div className="max-w-[620px]">
                <h2 className="text-[2.9rem] font-black leading-[0.95] tracking-[-0.06em] text-[#1f1f1f] md:text-[5.8rem]">
                  Le festival Vootoon
                  <span className="mt-3 block">2025</span>
                </h2>

                <p className="mt-8 text-[1.02rem] leading-8 text-[#2a2a2a] md:text-[1.35rem] md:leading-[1.8]">
                  Le 30 juillet 2025 après-midi, le Café Antoine a accueilli deux activités du festival Vootoon : une séance
                  de dédicace des albums BD Aventurres béninoises et un atelier de dessin « Tac au Tac ». L&apos;événement s&apos;est déroulé
                  dans une ambiance conviviale et pleine de bonne humeur.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Instagram, ShieldCheck, RefreshCcw, Clock } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] tracking-wide text-white/75">
      {children}
    </span>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/60 backdrop-blur">
      <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-2xl bg-white/5 border border-white/10 grid place-items-center">
            <span className="text-[11px] tracking-[0.35em] text-white">AAO</span>
          </div>
          <div className="leading-tight">
            <div className="text-xs tracking-[0.35em] text-white">AAO STUDIO</div>
            <div className="text-[11px] text-white/55">Luxury personal brand</div>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-6 text-xs tracking-[0.25em] text-white/70">
          <a className="hover:text-white transition" href="#about">
            SOBRE MÍ
          </a>
          <a className="hover:text-white transition" href="#contacto">
            CONTACTO
          </a>
        </nav>

        <div className="flex items-center gap-2">
          <Button
            asChild
            variant="secondary"
            className="rounded-2xl bg-white/5 text-white hover:bg-white/10 border border-white/10"
          >
            <a href="#contacto">Conectar</a>
          </Button>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-black">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -bottom-56 right-[-120px] h-[520px] w-[520px] rounded-full bg-white/5 blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl px-4 py-16 md:py-24 relative">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <div className="flex flex-wrap gap-2">
            <Pill>Luxury</Pill>
            <Pill>Minimal</Pill>
            <Pill>Studio</Pill>
            <Pill>Archive</Pill>
          </div>

          <h1 className="mt-6 text-4xl md:text-6xl font-semibold tracking-tight text-white">
            AAO STUDIO
            <span className="block text-white/60">Una identidad en construcción.</span>
          </h1>

          <p className="mt-6 text-base md:text-lg leading-relaxed text-white/65">
            Marca personal de lujo silencioso. Estética limpia, detalle obsesivo y un
            archivo vivo de ideas, referencias y futuros proyectos.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <Button
              asChild
              className="rounded-2xl bg-white text-black hover:bg-white/90"
            >
              <a href="#about">
                Sobre mí <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>

            <Button
              asChild
              variant="secondary"
              className="rounded-2xl bg-white/5 text-white hover:bg-white/10 border border-white/10"
            >
              <a href="#contacto">Contacto</a>
            </Button>
          </div>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-3">
            <Card className="rounded-3xl border-white/10 bg-white/5">
              <CardContent className="p-4">
                <div className="flex items-center gap-2 text-white/80">
                  <ShieldCheck className="h-4 w-4" />
                  <span className="text-xs tracking-wide">Identidad</span>
                </div>
                <p className="mt-2 text-[12px] text-white/55">
                  Diseño limpio. Detalle. Silencio.
                </p>
              </CardContent>
            </Card>

            <Card className="rounded-3xl border-white/10 bg-white/5">
              <CardContent className="p-4">
                <div className="flex items-center gap-2 text-white/80">
                  <RefreshCcw className="h-4 w-4" />
                  <span className="text-xs tracking-wide">Archivo vivo</span>
                </div>
                <p className="mt-2 text-[12px] text-white/55">
                  Ideas, referencias y futuros drops.
                </p>
              </CardContent>
            </Card>

            <Card className="rounded-3xl border-white/10 bg-white/5">
              <CardContent className="p-4">
                <div className="flex items-center gap-2 text-white/80">
                  <Clock className="h-4 w-4" />
                  <span className="text-xs tracking-wide">Evolución</span>
                </div>
                <p className="mt-2 text-[12px] text-white/55">
                  Hoy marca. Mañana, lo que yo decida.
                </p>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="bg-black">
      <div className="mx-auto max-w-6xl px-4 py-16 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <div>
            <div className="text-xs tracking-[0.35em] text-white/55">SOBRE MÍ</div>
            <h2 className="mt-4 text-3xl md:text-4xl font-semibold tracking-tight text-white">
              Lujo silencioso.
              <span className="block text-white/60">Energía street, sin ruido.</span>
            </h2>
            <p className="mt-6 text-sm md:text-base leading-relaxed text-white/65">
              AAO STUDIO nace como un proyecto personal.
              No es una tienda. No es una colección cerrada.
              Es una identidad en construcción: estética minimal, lujo discreto y una
              forma de comunicar sin gritar.
            </p>
            <p className="mt-4 text-sm md:text-base leading-relaxed text-white/65">
              Aquí guardo ideas, referencias y conceptos. Algunas cosas se convertirán
              en productos. Otras serán colaboraciones. Otras simplemente serán archivo.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              <Pill>Luxury</Pill>
              <Pill>Minimal</Pill>
              <Pill>Studio</Pill>
              <Pill>Archive</Pill>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-3">
            <Card className="rounded-3xl border-white/10 bg-white/5">
              <CardContent className="p-6">
                <div className="text-xs tracking-[0.35em] text-white/55">MANIFIESTO</div>
                <p className="mt-4 text-sm leading-relaxed text-white/70">
                  Minimalismo, detalle y tensión. El lujo que se siente.
                </p>
              </CardContent>
            </Card>

            <Card className="rounded-3xl border-white/10 bg-white/5">
              <CardContent className="p-6">
                <div className="text-xs tracking-[0.35em] text-white/55">NOTA</div>
                <p className="mt-4 text-sm leading-relaxed text-white/70">
                  Esta web es un archivo vivo. Un lugar donde la marca se construye antes
                  de vender.
                </p>
              </CardContent>
            </Card>

            <Card className="rounded-3xl border-white/10 bg-white/5">
              <CardContent className="p-6">
                <div className="text-xs tracking-[0.35em] text-white/55">DIRECCIÓN</div>
                <p className="mt-4 text-sm leading-relaxed text-white/70">
                  Madrid / Málaga.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer id="contacto" className="border-t border-white/10 bg-black">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <div className="text-sm font-semibold tracking-[0.35em] text-white">AAO STUDIO</div>
            <p className="mt-3 text-sm leading-relaxed text-white/65">
              Marca personal de lujo silencioso. Identidad, archivo y futuros proyectos.
            </p>
          </div>

          <div>
            <div className="text-xs tracking-[0.35em] text-white/55">CONTACTO</div>
            <ul className="mt-4 space-y-2 text-sm text-white/65">
              <li>Madrid / Málaga</li>
              <li>Colaboraciones: hola@aaostudio.com</li>
              <li>Instagram: @aaostudio</li>
            </ul>
          </div>

          <div>
            <div className="text-xs tracking-[0.35em] text-white/55">LINKS</div>
            <p className="mt-4 text-sm text-white/65">Archivo, referencias y futuros drops.</p>
            <div className="mt-4 flex gap-2">
              <Button
                asChild
                variant="secondary"
                className="rounded-2xl bg-white/5 text-white hover:bg-white/10 border border-white/10"
              >
                <a href="#about">Sobre mí</a>
              </Button>
              <Button
                asChild
                variant="secondary"
                className="rounded-2xl bg-white/5 text-white hover:bg-white/10 border border-white/10"
              >
                <a href="#contacto">Contacto</a>
              </Button>
              <Button
                asChild
                variant="secondary"
                className="rounded-2xl bg-white/5 text-white hover:bg-white/10 border border-white/10"
              >
                <a href="#" aria-label="Instagram">
                  <Instagram className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>

        <Separator className="my-10 bg-white/10" />

        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="text-[12px] tracking-wide text-white/45">
            © {new Date().getFullYear()} AAO STUDIO. All rights reserved.
          </div>
          <div className="flex items-center gap-4 text-[12px] tracking-wide text-white/45">
            <a className="hover:text-white/70 transition" href="#">Privacidad</a>
            <a className="hover:text-white/70 transition" href="#">Términos</a>
            <a className="hover:text-white/70 transition" href="#">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function AAOStudioPersonalSite() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <main>
        <Hero />
        <About />
      </main>
      <Footer />
    </div>
  );
}

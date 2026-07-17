import { createFileRoute } from "@tanstack/react-router";
import {
  Eye,
  ShieldCheck,
  Lock,
  ArrowRight,
  Star,
  CheckCircle2,
  Clock,
  MessageCircle,
  Heart,
  AlertTriangle,
  ChevronDown,
  Smartphone,
  Zap,
  Users,
} from "lucide-react";
import { useState, useEffect } from "react";

// ─────────────────────────────────────────────────────────────────────────────
// 👇 TROQUE AQUI quando tiver a URL de checkout da Cakto
// ─────────────────────────────────────────────────────────────────────────────
const CAKTO_URL = "https://pay.cakto.com.br/SEU-PRODUTO-AQUI";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Espião — Descubra se Ele Está te Traindo" },
      {
        name: "description",
        content:
          "Monitore WhatsApp e Instagram de forma totalmente anônima. Descubra a verdade antes que seja tarde demais. 100% discreto e instantâneo.",
      },
    ],
  }),
  component: LandingPage,
});

// ─────────────────────────────────────────────────────────────────────────────
// COMPONENTE PRINCIPAL
// ─────────────────────────────────────────────────────────────────────────────

function LandingPage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "oklch(0.08 0.01 20)",
        color: "oklch(0.97 0.005 30)",
        fontFamily: "'Inter', system-ui, sans-serif",
      }}
    >
      <UrgencyTicker />
      <Nav />
      <main>
        <Hero />
        <SocialProof />
        <HowItWorks />
        <WhatYouWillSee />
        <Testimonials />
        <UrgencyBanner />
        <Pricing />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// URGENCY TICKER
// ─────────────────────────────────────────────────────────────────────────────

function UrgencyTicker() {
  const items = [
    "🔴 VAGAS LIMITADAS — apenas 47 disponíveis hoje",
    "⚠️ Oferta encerra em breve",
    "✅ +47.000 mulheres já descobriram a verdade",
    "🔒 100% anônimo — ele nunca saberá",
    "⚡ Acesso instantâneo após o pagamento",
  ];
  const doubled = [...items, ...items];

  return (
    <div
      style={{
        background: "oklch(0.57 0.26 22)",
        overflow: "hidden",
        padding: "8px 0",
      }}
    >
      <div className="ticker-inner">
        {doubled.map((item, i) => (
          <span
            key={i}
            style={{
              fontSize: "12px",
              fontWeight: 600,
              color: "white",
              whiteSpace: "nowrap",
              letterSpacing: "0.02em",
            }}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// NAV
// ─────────────────────────────────────────────────────────────────────────────

function Nav() {
  return (
    <header
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "16px 24px",
        maxWidth: "1100px",
        margin: "0 auto",
      }}
    >
      {/* Logo */}
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <div
          style={{
            width: "36px",
            height: "36px",
            borderRadius: "10px",
            background: "oklch(0.57 0.26 22)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 0 20px oklch(0.57 0.26 22 / 0.6)",
          }}
        >
          <Eye size={18} color="white" />
        </div>
        <span
          style={{
            fontFamily: "'Sora', system-ui, sans-serif",
            fontWeight: 700,
            fontSize: "20px",
            letterSpacing: "-0.03em",
          }}
        >
          Espião
        </span>
      </div>

      {/* CTA Button */}
      <a
        href={CAKTO_URL}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "6px",
          background: "oklch(0.57 0.26 22)",
          color: "white",
          padding: "10px 20px",
          borderRadius: "8px",
          fontSize: "14px",
          fontWeight: 600,
          textDecoration: "none",
          boxShadow: "0 0 20px oklch(0.57 0.26 22 / 0.5)",
          transition: "opacity 0.2s",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.88")}
        onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
      >
        Quero Descobrir Agora <ArrowRight size={14} />
      </a>
    </header>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// HERO
// ─────────────────────────────────────────────────────────────────────────────

function Hero() {
  return (
    <section
      style={{
        textAlign: "center",
        padding: "60px 24px 80px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background radial glow */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: "800px",
          height: "500px",
          background:
            "radial-gradient(ellipse 70% 60% at 50% 0%, oklch(0.57 0.26 22 / 0.22), transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ position: "relative", maxWidth: "800px", margin: "0 auto" }}>
        {/* Eye icon */}
        <div className="eye-neon" style={{ marginBottom: "24px", display: "inline-block" }}>
          <Eye
            size={64}
            color="oklch(0.57 0.26 22)"
            strokeWidth={1.5}
          />
        </div>

        {/* Badge */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "6px",
            background: "oklch(0.57 0.26 22 / 0.15)",
            border: "1px solid oklch(0.57 0.26 22 / 0.4)",
            borderRadius: "999px",
            padding: "6px 14px",
            fontSize: "12px",
            fontWeight: 600,
            color: "oklch(0.80 0.15 22)",
            marginBottom: "20px",
            letterSpacing: "0.05em",
            textTransform: "uppercase",
          }}
        >
          <span
            style={{
              width: "6px",
              height: "6px",
              borderRadius: "50%",
              background: "oklch(0.57 0.26 22)",
              boxShadow: "0 0 8px oklch(0.57 0.26 22)",
              display: "inline-block",
            }}
          />
          Monitoramento 100% Anônimo
        </div>

        {/* Headline */}
        <h1
          style={{
            fontFamily: "'Sora', system-ui, sans-serif",
            fontSize: "clamp(2.2rem, 6vw, 4rem)",
            fontWeight: 800,
            lineHeight: 1.1,
            letterSpacing: "-0.03em",
            marginBottom: "20px",
          }}
        >
          Ele está te{" "}
          <span
            style={{
              color: "oklch(0.57 0.26 22)",
              textShadow: "0 0 30px oklch(0.57 0.26 22 / 0.5)",
            }}
          >
            traindo?
          </span>
        </h1>

        {/* Sub-headline */}
        <p
          style={{
            fontSize: "clamp(1rem, 2.5vw, 1.2rem)",
            color: "oklch(0.72 0.03 30)",
            lineHeight: 1.65,
            marginBottom: "36px",
            maxWidth: "580px",
            margin: "0 auto 36px",
          }}
        >
          Descubra toda a verdade no WhatsApp e Instagram do seu parceiro —{" "}
          <strong style={{ color: "oklch(0.97 0.005 30)" }}>
            sem que ele perceba, sem deixar rastros.
          </strong>
        </p>

        {/* CTA */}
        <a
          href={CAKTO_URL}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "10px",
            background: "oklch(0.57 0.26 22)",
            color: "white",
            padding: "18px 40px",
            borderRadius: "12px",
            fontSize: "17px",
            fontWeight: 700,
            textDecoration: "none",
            boxShadow:
              "0 0 40px oklch(0.57 0.26 22 / 0.55), 0 20px 60px -20px oklch(0.57 0.26 22 / 0.4)",
            transition: "transform 0.2s, box-shadow 0.2s",
            marginBottom: "20px",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-2px)";
            e.currentTarget.style.boxShadow =
              "0 0 60px oklch(0.57 0.26 22 / 0.7), 0 20px 60px -20px oklch(0.57 0.26 22 / 0.5)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow =
              "0 0 40px oklch(0.57 0.26 22 / 0.55), 0 20px 60px -20px oklch(0.57 0.26 22 / 0.4)";
          }}
        >
          🔍 Descobrir Agora — Acesso Imediato
          <ArrowRight size={18} />
        </a>

        {/* Trust badges */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "16px",
            fontSize: "13px",
            color: "oklch(0.60 0.03 30)",
            marginTop: "8px",
          }}
        >
          {[
            { icon: <ShieldCheck size={14} />, text: "100% anônimo" },
            { icon: <Lock size={14} />, text: "Sem deixar rastros" },
            { icon: <Zap size={14} />, text: "Acesso instantâneo" },
            { icon: <CheckCircle2 size={14} />, text: "Garantia de 7 dias" },
          ].map((b) => (
            <span
              key={b.text}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "5px",
                color: "oklch(0.70 0.04 22)",
              }}
            >
              {b.icon} {b.text}
            </span>
          ))}
        </div>

        {/* Urgency note */}
        <div
          style={{
            marginTop: "28px",
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            background: "oklch(0.57 0.26 22 / 0.10)",
            border: "1px solid oklch(0.57 0.26 22 / 0.3)",
            borderRadius: "8px",
            padding: "10px 18px",
            fontSize: "13px",
            color: "oklch(0.80 0.12 22)",
          }}
        >
          <AlertTriangle size={14} />
          <span>
            <strong>47 vagas restantes</strong> com preço de lançamento — oferta encerra hoje
          </span>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// SOCIAL PROOF — STATS
// ─────────────────────────────────────────────────────────────────────────────

function SocialProof() {
  const stats = [
    { value: "+47.000", label: "mulheres usaram" },
    { value: "4.9★", label: "avaliação média" },
    { value: "100%", label: "anônimo e seguro" },
    { value: "<2 min", label: "para ter acesso" },
  ];

  return (
    <section
      style={{
        maxWidth: "1100px",
        margin: "0 auto 80px",
        padding: "0 24px",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
          gap: "16px",
        }}
      >
        {stats.map((s) => (
          <div
            key={s.label}
            style={{
              background: "oklch(0.11 0.015 20)",
              border: "1px solid oklch(1 0 0 / 8%)",
              borderRadius: "14px",
              padding: "20px",
              textAlign: "center",
            }}
          >
            <div
              style={{
                fontFamily: "'Sora', system-ui, sans-serif",
                fontSize: "26px",
                fontWeight: 700,
                color: "oklch(0.57 0.26 22)",
                textShadow: "0 0 20px oklch(0.57 0.26 22 / 0.4)",
              }}
            >
              {s.value}
            </div>
            <div style={{ fontSize: "12px", color: "oklch(0.60 0.03 30)", marginTop: "4px" }}>
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// HOW IT WORKS
// ─────────────────────────────────────────────────────────────────────────────

function HowItWorks() {
  const steps = [
    {
      num: "1",
      icon: <Smartphone size={28} color="oklch(0.57 0.26 22)" />,
      title: "Você compra o acesso",
      body: "Processo 100% seguro. Em menos de 2 minutos você recebe suas credenciais de acesso por e-mail.",
    },
    {
      num: "2",
      icon: <Eye size={28} color="oklch(0.57 0.26 22)" />,
      title: "Informe o número ou @",
      body: "Digite o número de WhatsApp ou o @ do Instagram do seu parceiro. Não precisa de acesso ao celular dele.",
    },
    {
      num: "3",
      icon: <MessageCircle size={28} color="oklch(0.57 0.26 22)" />,
      title: "Veja tudo em tempo real",
      body: "Conversas, fotos, vídeos, histórico — tudo aparece no seu painel. Ele nunca saberá que você está vendo.",
    },
  ];

  return (
    <section
      id="como-funciona"
      style={{
        maxWidth: "1100px",
        margin: "0 auto 80px",
        padding: "0 24px",
      }}
    >
      <div style={{ textAlign: "center", marginBottom: "48px" }}>
        <SectionBadge>Como Funciona</SectionBadge>
        <h2
          style={{
            fontFamily: "'Sora', system-ui, sans-serif",
            fontSize: "clamp(1.8rem, 4vw, 2.6rem)",
            fontWeight: 700,
            marginTop: "12px",
            letterSpacing: "-0.02em",
          }}
        >
          Simples. Rápido.{" "}
          <span style={{ color: "oklch(0.57 0.26 22)" }}>Indetectável.</span>
        </h2>
        <p style={{ color: "oklch(0.60 0.03 30)", marginTop: "12px", fontSize: "15px" }}>
          3 passos e você tem acesso a tudo. Sem precisar pegar o celular dele.
        </p>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "20px",
        }}
      >
        {steps.map((s) => (
          <div
            key={s.num}
            style={{
              background: "oklch(0.11 0.015 20)",
              border: "1px solid oklch(1 0 0 / 8%)",
              borderRadius: "16px",
              padding: "28px",
              position: "relative",
              transition: "border-color 0.2s",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.borderColor = "oklch(0.57 0.26 22 / 0.5)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.borderColor = "oklch(1 0 0 / 8%)")
            }
          >
            <div
              style={{
                position: "absolute",
                top: "20px",
                right: "20px",
                width: "28px",
                height: "28px",
                borderRadius: "50%",
                background: "oklch(0.57 0.26 22 / 0.15)",
                border: "1px solid oklch(0.57 0.26 22 / 0.3)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "12px",
                fontWeight: 700,
                color: "oklch(0.57 0.26 22)",
              }}
            >
              {s.num}
            </div>
            <div
              style={{
                width: "52px",
                height: "52px",
                borderRadius: "12px",
                background: "oklch(0.57 0.26 22 / 0.12)",
                border: "1px solid oklch(0.57 0.26 22 / 0.2)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "16px",
              }}
            >
              {s.icon}
            </div>
            <h3
              style={{
                fontFamily: "'Sora', system-ui, sans-serif",
                fontSize: "17px",
                fontWeight: 700,
                marginBottom: "10px",
              }}
            >
              {s.title}
            </h3>
            <p style={{ fontSize: "14px", color: "oklch(0.62 0.03 30)", lineHeight: 1.6 }}>
              {s.body}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// WHAT YOU WILL SEE
// ─────────────────────────────────────────────────────────────────────────────

function WhatYouWillSee() {
  const features = [
    {
      emoji: "💬",
      title: "Conversas do WhatsApp",
      body: "Todas as mensagens, enviadas e recebidas, mesmo as deletadas.",
    },
    {
      emoji: "📸",
      title: "Fotos e Vídeos",
      body: "Mídias trocadas em conversas privadas, grupos e status.",
    },
    {
      emoji: "📍",
      title: "Histórico de Localização",
      body: "Veja onde ele esteve nas últimas 24h no mapa.",
    },
    {
      emoji: "👤",
      title: "Seguidores Secretos do Instagram",
      body: "Perfis que ele segue em sigilo e quem interage com ele.",
    },
    {
      emoji: "🔍",
      title: "Conversas do Instagram",
      body: "DMs do Instagram, incluindo mensagens apagadas.",
    },
    {
      emoji: "📞",
      title: "Chamadas e Ligações",
      body: "Registro de todas as chamadas de voz e vídeo.",
    },
  ];

  return (
    <section
      style={{
        maxWidth: "1100px",
        margin: "0 auto 80px",
        padding: "0 24px",
      }}
    >
      <div style={{ textAlign: "center", marginBottom: "48px" }}>
        <SectionBadge>O que você vai ver</SectionBadge>
        <h2
          style={{
            fontFamily: "'Sora', system-ui, sans-serif",
            fontSize: "clamp(1.8rem, 4vw, 2.6rem)",
            fontWeight: 700,
            marginTop: "12px",
            letterSpacing: "-0.02em",
          }}
        >
          Acesso completo a{" "}
          <span style={{ color: "oklch(0.57 0.26 22)" }}>tudo que ele esconde</span>
        </h2>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "16px",
        }}
      >
        {features.map((f) => (
          <div
            key={f.title}
            style={{
              background: "oklch(0.11 0.015 20)",
              border: "1px solid oklch(1 0 0 / 8%)",
              borderRadius: "14px",
              padding: "24px",
              display: "flex",
              gap: "16px",
              alignItems: "flex-start",
              transition: "border-color 0.2s",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.borderColor = "oklch(0.57 0.26 22 / 0.4)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.borderColor = "oklch(1 0 0 / 8%)")
            }
          >
            <div style={{ fontSize: "28px", lineHeight: 1 }}>{f.emoji}</div>
            <div>
              <div
                style={{
                  fontFamily: "'Sora', system-ui, sans-serif",
                  fontWeight: 700,
                  fontSize: "15px",
                  marginBottom: "6px",
                }}
              >
                {f.title}
              </div>
              <div style={{ fontSize: "13px", color: "oklch(0.60 0.03 30)", lineHeight: 1.5 }}>
                {f.body}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div style={{ textAlign: "center", marginTop: "36px" }}>
        <a
          href={CAKTO_URL}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            background: "oklch(0.57 0.26 22)",
            color: "white",
            padding: "16px 36px",
            borderRadius: "10px",
            fontSize: "15px",
            fontWeight: 700,
            textDecoration: "none",
            boxShadow: "0 0 30px oklch(0.57 0.26 22 / 0.4)",
          }}
        >
          Quero Ver Agora <ArrowRight size={16} />
        </a>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// TESTIMONIALS
// ─────────────────────────────────────────────────────────────────────────────

function Testimonials() {
  const items = [
    {
      name: "Ana R.",
      city: "São Paulo, SP",
      stars: 5,
      text: "Eu desconfiava fazia meses mas nunca tinha prova. Em menos de 10 minutos já vi tudo. Estava certo. Me preparei com calma antes de confrontar ele. Valeu cada centavo.",
      time: "há 2 dias",
    },
    {
      name: "Juliana M.",
      city: "Belo Horizonte, MG",
      stars: 5,
      text: "Achei que fosse golpe mas resolvi tentar. Funcionou perfeitamente e ele não percebeu absolutamente nada. Agora tenho paz de saber que estava sendo paranoia minha mesmo.",
      time: "há 5 dias",
    },
    {
      name: "Fernanda C.",
      city: "Curitiba, PR",
      stars: 5,
      text: "Minha amiga me indicou. Fiz o login, coloquei o número dele e em 2 minutos estava vendo as conversas dele. Simples demais. Recomendo para todas que têm dúvida.",
      time: "há 1 semana",
    },
    {
      name: "Patricia L.",
      city: "Rio de Janeiro, RJ",
      stars: 5,
      text: "Descobri que estava sendo traída há 8 meses. Doeu muito mas pelo menos pude tomar uma decisão com base na verdade. Obrigada por isso.",
      time: "há 1 semana",
    },
    {
      name: "Camila S.",
      city: "Recife, PE",
      stars: 5,
      text: "Funcionou perfeitamente no Instagram dele. Vi os DMs que ele achava que eram secretos. A interface é muito fácil, qualquer uma consegue usar.",
      time: "há 2 semanas",
    },
    {
      name: "Renata O.",
      city: "Porto Alegre, RS",
      stars: 5,
      text: "Fiquei em paz depois de ver. Ele realmente não estava traindo, só sendo estranho. Mas precisava saber. Serviço 100% anônimo, recomendo sem medo.",
      time: "há 2 semanas",
    },
  ];

  return (
    <section
      id="depoimentos"
      style={{
        maxWidth: "1100px",
        margin: "0 auto 80px",
        padding: "0 24px",
      }}
    >
      <div style={{ textAlign: "center", marginBottom: "48px" }}>
        <SectionBadge>Depoimentos Reais</SectionBadge>
        <h2
          style={{
            fontFamily: "'Sora', system-ui, sans-serif",
            fontSize: "clamp(1.8rem, 4vw, 2.6rem)",
            fontWeight: 700,
            marginTop: "12px",
            letterSpacing: "-0.02em",
          }}
        >
          Mais de 47 mil mulheres já{" "}
          <span style={{ color: "oklch(0.57 0.26 22)" }}>descobriram a verdade</span>
        </h2>
        <div style={{ display: "flex", justifyContent: "center", gap: "4px", marginTop: "16px" }}>
          {[1, 2, 3, 4, 5].map((i) => (
            <Star key={i} size={18} fill="oklch(0.57 0.26 22)" color="oklch(0.57 0.26 22)" />
          ))}
          <span style={{ fontSize: "14px", color: "oklch(0.60 0.03 30)", marginLeft: "8px" }}>
            4.9/5 · +3.200 avaliações
          </span>
        </div>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "16px",
        }}
      >
        {items.map((t) => (
          <div
            key={t.name}
            style={{
              background: "oklch(0.11 0.015 20)",
              border: "1px solid oklch(1 0 0 / 8%)",
              borderRadius: "14px",
              padding: "24px",
            }}
          >
            {/* Stars */}
            <div style={{ display: "flex", gap: "3px", marginBottom: "12px" }}>
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} size={14} fill="oklch(0.57 0.26 22)" color="oklch(0.57 0.26 22)" />
              ))}
            </div>

            {/* Quote */}
            <p
              style={{
                fontSize: "14px",
                color: "oklch(0.78 0.02 30)",
                lineHeight: 1.65,
                marginBottom: "20px",
              }}
            >
              "{t.text}"
            </p>

            {/* Identity */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                borderTop: "1px solid oklch(1 0 0 / 6%)",
                paddingTop: "16px",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                {/* Avatar */}
                <div
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "50%",
                    background: "oklch(0.57 0.26 22 / 0.25)",
                    border: "1px solid oklch(0.57 0.26 22 / 0.3)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "14px",
                    fontWeight: 700,
                    color: "oklch(0.80 0.12 22)",
                  }}
                >
                  {t.name[0]}
                </div>
                <div>
                  <div style={{ fontSize: "13px", fontWeight: 600 }}>{t.name}</div>
                  <div style={{ fontSize: "11px", color: "oklch(0.55 0.02 30)" }}>{t.city}</div>
                </div>
              </div>
              <div style={{ fontSize: "11px", color: "oklch(0.50 0.02 30)" }}>{t.time}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// URGENCY BANNER WITH COUNTDOWN
// ─────────────────────────────────────────────────────────────────────────────

function UrgencyBanner() {
  const [time, setTime] = useState({ h: 2, m: 47, s: 33 });

  useEffect(() => {
    const id = setInterval(() => {
      setTime((prev) => {
        let { h, m, s } = prev;
        s--;
        if (s < 0) { s = 59; m--; }
        if (m < 0) { m = 59; h--; }
        if (h < 0) { h = 2; m = 59; s = 59; } // loop
        return { h, m, s };
      });
    }, 1000);
    return () => clearInterval(id);
  }, []);

  const pad = (n: number) => String(n).padStart(2, "0");

  return (
    <section style={{ maxWidth: "1100px", margin: "0 auto 80px", padding: "0 24px" }}>
      <div
        style={{
          background:
            "linear-gradient(135deg, oklch(0.57 0.26 22 / 0.18), oklch(0.50 0.22 15 / 0.10))",
          border: "1px solid oklch(0.57 0.26 22 / 0.4)",
          borderRadius: "16px",
          padding: "32px",
          textAlign: "center",
        }}
      >
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            background: "oklch(0.57 0.26 22)",
            color: "white",
            padding: "6px 14px",
            borderRadius: "999px",
            fontSize: "12px",
            fontWeight: 700,
            marginBottom: "16px",
            letterSpacing: "0.05em",
          }}
        >
          <AlertTriangle size={12} /> OFERTA EXPIRA EM
        </div>

        <div style={{ display: "flex", justifyContent: "center", gap: "12px", marginBottom: "20px" }}>
          {[
            { v: pad(time.h), l: "horas" },
            { v: pad(time.m), l: "minutos" },
            { v: pad(time.s), l: "segundos" },
          ].map(({ v, l }, i) => (
            <div key={l} style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <div style={{ textAlign: "center" }}>
                <div
                  className="countdown-digit"
                  key={v}
                  style={{
                    fontFamily: "'Sora', system-ui, sans-serif",
                    fontSize: "clamp(2rem, 6vw, 3.5rem)",
                    fontWeight: 800,
                    color: "oklch(0.57 0.26 22)",
                    textShadow: "0 0 30px oklch(0.57 0.26 22 / 0.6)",
                    minWidth: "70px",
                    display: "block",
                  }}
                >
                  {v}
                </div>
                <div style={{ fontSize: "11px", color: "oklch(0.55 0.03 30)", marginTop: "4px" }}>
                  {l}
                </div>
              </div>
              {i < 2 && (
                <span
                  style={{
                    fontFamily: "'Sora', system-ui",
                    fontSize: "2rem",
                    fontWeight: 800,
                    color: "oklch(0.57 0.26 22 / 0.6)",
                    marginBottom: "16px",
                  }}
                >
                  :
                </span>
              )}
            </div>
          ))}
        </div>

        <p style={{ color: "oklch(0.72 0.03 30)", fontSize: "15px", marginBottom: "24px" }}>
          <strong style={{ color: "white" }}>Restam apenas 47 vagas</strong> com o preço especial de lançamento.
          <br />
          Quando esgotar, o preço sobe para R$247.
        </p>

        <a
          href={CAKTO_URL}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            background: "oklch(0.57 0.26 22)",
            color: "white",
            padding: "16px 40px",
            borderRadius: "10px",
            fontSize: "16px",
            fontWeight: 700,
            textDecoration: "none",
            boxShadow: "0 0 40px oklch(0.57 0.26 22 / 0.5)",
          }}
        >
          Garantir Minha Vaga Agora <ArrowRight size={16} />
        </a>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// PRICING
// ─────────────────────────────────────────────────────────────────────────────

function Pricing() {
  const features = [
    "Monitoramento completo do WhatsApp",
    "Conversas e DMs do Instagram",
    "Histórico de localização em tempo real",
    "Fotos e vídeos trocados",
    "Registro de chamadas e ligações",
    "Acesso por 30 dias",
    "Suporte via WhatsApp",
    "Garantia de 7 dias ou seu dinheiro de volta",
  ];

  return (
    <section
      id="planos"
      style={{
        maxWidth: "1100px",
        margin: "0 auto 80px",
        padding: "0 24px",
      }}
    >
      <div style={{ textAlign: "center", marginBottom: "48px" }}>
        <SectionBadge>Preço</SectionBadge>
        <h2
          style={{
            fontFamily: "'Sora', system-ui, sans-serif",
            fontSize: "clamp(1.8rem, 4vw, 2.6rem)",
            fontWeight: 700,
            marginTop: "12px",
            letterSpacing: "-0.02em",
          }}
        >
          Invista na sua{" "}
          <span style={{ color: "oklch(0.57 0.26 22)" }}>tranquilidade</span>
        </h2>
        <p style={{ color: "oklch(0.60 0.03 30)", marginTop: "10px" }}>
          Menos que um jantar. Muito mais valioso.
        </p>
      </div>

      <div style={{ maxWidth: "480px", margin: "0 auto" }}>
        <div
          style={{
            background: "oklch(0.11 0.015 20)",
            border: "2px solid oklch(0.57 0.26 22 / 0.5)",
            borderRadius: "20px",
            padding: "40px",
            boxShadow: "0 0 60px oklch(0.57 0.26 22 / 0.15), 0 20px 60px -20px oklch(0 0 0 / 0.6)",
            position: "relative",
          }}
        >
          {/* Popular badge */}
          <div
            style={{
              position: "absolute",
              top: "-14px",
              left: "50%",
              transform: "translateX(-50%)",
              background: "oklch(0.57 0.26 22)",
              color: "white",
              padding: "6px 20px",
              borderRadius: "999px",
              fontSize: "12px",
              fontWeight: 700,
              letterSpacing: "0.05em",
              whiteSpace: "nowrap",
            }}
          >
            🔥 MAIS VENDIDO — OFERTA DE LANÇAMENTO
          </div>

          <div style={{ textAlign: "center", marginBottom: "28px" }}>
            <div style={{ fontSize: "14px", color: "oklch(0.55 0.03 30)", marginBottom: "4px" }}>
              Acesso Completo por 30 dias
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "baseline",
                justifyContent: "center",
                gap: "8px",
              }}
            >
              <span
                style={{
                  fontSize: "16px",
                  color: "oklch(0.50 0.03 30)",
                  textDecoration: "line-through",
                }}
              >
                R$247
              </span>
              <span
                style={{
                  fontFamily: "'Sora', system-ui, sans-serif",
                  fontSize: "58px",
                  fontWeight: 800,
                  color: "oklch(0.97 0.005 30)",
                  lineHeight: 1,
                }}
              >
                R$97
              </span>
            </div>
            <div
              style={{
                display: "inline-block",
                background: "oklch(0.57 0.26 22 / 0.15)",
                color: "oklch(0.80 0.15 22)",
                padding: "4px 12px",
                borderRadius: "999px",
                fontSize: "12px",
                fontWeight: 700,
                marginTop: "8px",
              }}
            >
              −61% DE DESCONTO
            </div>
          </div>

          <ul style={{ listStyle: "none", padding: 0, margin: "0 0 28px", display: "flex", flexDirection: "column", gap: "12px" }}>
            {features.map((f) => (
              <li
                key={f}
                style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "14px" }}
              >
                <CheckCircle2 size={16} color="oklch(0.57 0.26 22)" style={{ flexShrink: 0 }} />
                <span style={{ color: "oklch(0.82 0.02 30)" }}>{f}</span>
              </li>
            ))}
          </ul>

          <a
            href={CAKTO_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px",
              background: "oklch(0.57 0.26 22)",
              color: "white",
              padding: "18px",
              borderRadius: "12px",
              fontSize: "16px",
              fontWeight: 700,
              textDecoration: "none",
              boxShadow: "0 0 40px oklch(0.57 0.26 22 / 0.5)",
              marginBottom: "14px",
              transition: "transform 0.15s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-2px)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
          >
            🔍 Quero Descobrir a Verdade — R$97 <ArrowRight size={16} />
          </a>

          <div style={{ textAlign: "center" }}>
            <p style={{ fontSize: "12px", color: "oklch(0.55 0.02 30)", lineHeight: 1.6 }}>
              🔒 Pagamento 100% seguro · Garantia de 7 dias
              <br />
              Acesso imediato após confirmação do pagamento
            </p>
          </div>
        </div>

        {/* Payment methods */}
        <div
          style={{
            textAlign: "center",
            marginTop: "20px",
            fontSize: "12px",
            color: "oklch(0.50 0.02 30)",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "8px",
            alignItems: "center",
          }}
        >
          <span>Aceita:</span>
          {["💳 Cartão de crédito", "📱 Pix", "🏦 Boleto"].map((p) => (
            <span
              key={p}
              style={{
                background: "oklch(0.14 0.015 20)",
                border: "1px solid oklch(1 0 0 / 8%)",
                borderRadius: "6px",
                padding: "3px 8px",
                fontSize: "11px",
              }}
            >
              {p}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// FAQ
// ─────────────────────────────────────────────────────────────────────────────

function FAQ() {
  const items = [
    {
      q: "Ele vai saber que estou monitorando?",
      a: "Não. O monitoramento é 100% invisível. Não aparece nenhuma notificação no celular dele, não muda nada no aplicativo dele e não deixa rastros. Ele nunca saberá.",
    },
    {
      q: "Preciso ter acesso ao celular dele para instalar algo?",
      a: "Não! É exatamente por isso que o serviço é tão poderoso. Você só precisa informar o número de WhatsApp ou o @ do Instagram. Nada mais.",
    },
    {
      q: "Em quanto tempo tenho acesso?",
      a: "Após a confirmação do pagamento (Pix é instantâneo), você recebe o acesso por e-mail em menos de 2 minutos.",
    },
    {
      q: "E se não funcionar?",
      a: "Temos garantia de 7 dias. Se por qualquer motivo você não ficar satisfeita, devolvemos 100% do seu dinheiro. Sem perguntas.",
    },
    {
      q: "Funciona com qualquer operadora?",
      a: "Sim. Funciona com qualquer número de celular brasileiro, de qualquer operadora, e com qualquer conta do Instagram.",
    },
    {
      q: "Meus dados estão seguros?",
      a: "Sim. Todas as informações são criptografadas e você é a única com acesso ao painel. Não compartilhamos seus dados com ninguém.",
    },
  ];

  const [open, setOpen] = useState<number | null>(null);

  return (
    <section
      id="faq"
      style={{
        maxWidth: "1100px",
        margin: "0 auto 80px",
        padding: "0 24px",
      }}
    >
      <div style={{ textAlign: "center", marginBottom: "48px" }}>
        <SectionBadge>Dúvidas Frequentes</SectionBadge>
        <h2
          style={{
            fontFamily: "'Sora', system-ui, sans-serif",
            fontSize: "clamp(1.8rem, 4vw, 2.6rem)",
            fontWeight: 700,
            marginTop: "12px",
            letterSpacing: "-0.02em",
          }}
        >
          Perguntas <span style={{ color: "oklch(0.57 0.26 22)" }}>frequentes</span>
        </h2>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))",
          gap: "12px",
          maxWidth: "900px",
          margin: "0 auto",
        }}
      >
        {items.map((it, i) => (
          <div
            key={it.q}
            style={{
              background: "oklch(0.11 0.015 20)",
              border: `1px solid ${open === i ? "oklch(0.57 0.26 22 / 0.4)" : "oklch(1 0 0 / 8%)"}`,
              borderRadius: "12px",
              overflow: "hidden",
              transition: "border-color 0.2s",
            }}
          >
            <button
              onClick={() => setOpen(open === i ? null : i)}
              style={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "18px 20px",
                background: "none",
                border: "none",
                cursor: "pointer",
                color: "oklch(0.97 0.005 30)",
                textAlign: "left",
                gap: "12px",
              }}
            >
              <span
                style={{
                  fontFamily: "'Sora', system-ui, sans-serif",
                  fontSize: "14px",
                  fontWeight: 600,
                }}
              >
                {it.q}
              </span>
              <ChevronDown
                size={18}
                color="oklch(0.57 0.26 22)"
                style={{
                  transform: open === i ? "rotate(180deg)" : "rotate(0)",
                  transition: "transform 0.2s",
                  flexShrink: 0,
                }}
              />
            </button>
            {open === i && (
              <div
                style={{
                  padding: "0 20px 18px",
                  fontSize: "14px",
                  color: "oklch(0.62 0.03 30)",
                  lineHeight: 1.65,
                  borderTop: "1px solid oklch(1 0 0 / 6%)",
                  paddingTop: "14px",
                }}
              >
                {it.a}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// FINAL CTA
// ─────────────────────────────────────────────────────────────────────────────

function FinalCTA() {
  return (
    <section
      style={{
        maxWidth: "1100px",
        margin: "0 auto 80px",
        padding: "0 24px",
      }}
    >
      <div
        style={{
          background:
            "linear-gradient(135deg, oklch(0.57 0.26 22 / 0.20), oklch(0.50 0.22 15 / 0.12))",
          border: "1px solid oklch(0.57 0.26 22 / 0.4)",
          borderRadius: "20px",
          padding: "clamp(32px, 6vw, 60px)",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "-60px",
            left: "50%",
            transform: "translateX(-50%)",
            width: "400px",
            height: "400px",
            background:
              "radial-gradient(circle, oklch(0.57 0.26 22 / 0.12), transparent 70%)",
            pointerEvents: "none",
          }}
        />

        <div style={{ position: "relative" }}>
          <div className="eye-neon" style={{ marginBottom: "16px", display: "inline-block" }}>
            <Heart size={48} color="oklch(0.57 0.26 22)" fill="oklch(0.57 0.26 22 / 0.3)" />
          </div>

          <h2
            style={{
              fontFamily: "'Sora', system-ui, sans-serif",
              fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
              fontWeight: 800,
              marginBottom: "16px",
              letterSpacing: "-0.03em",
            }}
          >
            Você merece saber a{" "}
            <span style={{ color: "oklch(0.57 0.26 22)" }}>verdade.</span>
          </h2>

          <p
            style={{
              color: "oklch(0.68 0.03 30)",
              fontSize: "clamp(14px, 2vw, 17px)",
              lineHeight: 1.65,
              maxWidth: "560px",
              margin: "0 auto 32px",
            }}
          >
            Não fique mais acordada de madrugada com dúvida. Não viva mais na
            incerteza. Em menos de 2 minutos você terá as respostas que precisa —
            de forma segura, anônima e definitiva.
          </p>

          <a
            href={CAKTO_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              background: "oklch(0.57 0.26 22)",
              color: "white",
              padding: "20px 48px",
              borderRadius: "12px",
              fontSize: "17px",
              fontWeight: 700,
              textDecoration: "none",
              boxShadow:
                "0 0 50px oklch(0.57 0.26 22 / 0.55), 0 20px 60px -20px oklch(0.57 0.26 22 / 0.4)",
              marginBottom: "16px",
            }}
          >
            🔍 Descobrir Agora por R$97 <ArrowRight size={18} />
          </a>

          <div style={{ fontSize: "13px", color: "oklch(0.50 0.02 30)" }}>
            Garantia de 7 dias · Acesso imediato · Pagamento seguro
          </div>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// FOOTER
// ─────────────────────────────────────────────────────────────────────────────

function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid oklch(1 0 0 / 6%)",
        padding: "32px 24px",
        maxWidth: "1100px",
        margin: "0 auto",
      }}
    >
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "16px",
        }}
      >
        {/* Logo */}
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <Eye size={16} color="oklch(0.57 0.26 22)" />
          <span
            style={{
              fontFamily: "'Sora', system-ui, sans-serif",
              fontWeight: 700,
              fontSize: "15px",
            }}
          >
            Espião
          </span>
        </div>

        {/* Links */}
        <div style={{ display: "flex", gap: "20px", fontSize: "12px", color: "oklch(0.50 0.02 30)" }}>
          <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
            Política de Privacidade
          </a>
          <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
            Termos de Uso
          </a>
          <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
            Suporte
          </a>
        </div>

        <span style={{ fontSize: "11px", color: "oklch(0.40 0.02 30)" }}>
          © {new Date().getFullYear()} Espião. Todos os direitos reservados.
        </span>
      </div>

      <p
        style={{
          marginTop: "20px",
          fontSize: "11px",
          color: "oklch(0.38 0.02 30)",
          lineHeight: 1.6,
          maxWidth: "700px",
        }}
      >
        Este serviço é fornecido apenas para fins informativos e de monitoramento parental ou de
        dispositivos que você possui. O uso desta ferramenta para monitorar pessoas sem
        consentimento pode ser ilegal em sua jurisdição. O usuário é o único responsável pelo uso
        do serviço.
      </p>
    </footer>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// PRIMITIVES
// ─────────────────────────────────────────────────────────────────────────────

function SectionBadge({ children }: { children: React.ReactNode }) {
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "6px",
        background: "oklch(0.57 0.26 22 / 0.12)",
        border: "1px solid oklch(0.57 0.26 22 / 0.3)",
        borderRadius: "999px",
        padding: "5px 14px",
        fontSize: "12px",
        fontWeight: 600,
        color: "oklch(0.78 0.14 22)",
        letterSpacing: "0.05em",
        textTransform: "uppercase",
      }}
    >
      {children}
    </span>
  );
}

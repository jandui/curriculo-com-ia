import React, { useState, useEffect } from 'react';
import { CheckCircle, Clock, Shield, Star, ChevronDown, Award, TrendingUp } from 'lucide-react';

export default function PaginaVendas() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 47,
    minutes: 59,
    seconds: 59
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const [faqOpen, setFaqOpen] = useState({});

  const toggleFaq = (index) => {
    setFaqOpen(prev => ({ ...prev, [index]: !prev[index] }));
  };

  const handleCheckout = () => {
    window.open('https://sun.eduzz.com/7WXQA7VO9A', '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Header fixo com CTA */}
      <div className="fixed top-0 w-full bg-slate-900/95 backdrop-blur-sm border-b border-yellow-500/20 z-50">
        <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
          <div className="text-sm font-semibold">Currículo com IA</div>
          <button
            onClick={handleCheckout}
            className="bg-yellow-500 hover:bg-yellow-600 text-slate-900 font-bold px-6 py-2 rounded-lg transition-all transform hover:scale-105"
          >
            GARANTIR ACESSO
          </button>
        </div>
      </div>

      {/* Hero Section */}
      <div className="pt-24 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block bg-yellow-500/10 border border-yellow-500/30 rounded-full px-4 py-2 mb-6">
            <span className="text-yellow-500 font-semibold">✨ Método Validado por Centenas de Profissionais</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Descubra Como Ser Chamado para <span className="text-yellow-500">TODAS as Entrevistas</span> Usando ChatGPT no Seu Currículo
          </h1>
          
          <p className="text-xl text-slate-300 mb-8">
            O método testado e aprovado que transformou currículos comuns em máquinas de gerar entrevistas - mesmo para quem não tem experiência avançada
          </p>

          <button
            onClick={handleCheckout}
            className="bg-yellow-500 hover:bg-yellow-600 text-slate-900 font-bold text-lg px-8 py-4 rounded-lg transition-all transform hover:scale-105 shadow-lg shadow-yellow-500/50 mb-4"
          >
            QUERO TRANSFORMAR MEU CURRÍCULO AGORA
          </button>
          
          <p className="text-sm text-slate-400">⚡ Acesso imediato após o pagamento</p>
        </div>
      </div>

      {/* Problemas */}
      <div className="py-16 px-4 bg-slate-800/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Você Já Passou Por Isso?</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Envia dezenas de currículos e não recebe NENHUMA resposta",
              "Vê vagas perfeitas mas nem é chamado para entrevista",
              "Gasta horas reescrevendo sem saber se está certo",
              "Suspeita que seu currículo é descartado antes do recrutador",
              "Vê pessoas menos qualificadas conseguindo as vagas",
              "Não sabe como destacar suas conquistas no papel"
            ].map((problem, i) => (
              <div key={i} className="flex items-start gap-3 bg-slate-900/50 p-4 rounded-lg border border-red-500/20">
                <div className="text-red-500 text-xl">❌</div>
                <p className="text-slate-300">{problem}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 p-6 bg-red-500/10 border border-red-500/30 rounded-lg">
            <p className="text-center text-lg">
              <strong className="text-red-400">A verdade dolorosa:</strong> Seu currículo tem apenas <span className="text-yellow-500 font-bold">6 SEGUNDOS</span> para convencer um recrutador. E se não passar pelos sistemas ATS primeiro, nem esses 6 segundos você terá.
            </p>
          </div>
        </div>
      </div>

      {/* Solução */}
      <div className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            A Revolução que Está <span className="text-yellow-500">Mudando o Jogo</span>
          </h2>
          
          <p className="text-xl text-slate-300 mb-8">
            Enquanto milhares de candidatos continuam enviando currículos genéricos e sendo ignorados, <strong>um pequeno grupo de profissionais descobriu como usar inteligência artificial para se destacar</strong>.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {[
              { icon: <TrendingUp className="w-8 h-8" />, text: "Passam pelos filtros ATS" },
              { icon: <Star className="w-8 h-8" />, text: "Destacam em segundos" },
              { icon: <Award className="w-8 h-8" />, text: "Geram mais entrevistas" }
            ].map((item, i) => (
              <div key={i} className="bg-slate-800/50 p-6 rounded-lg border border-yellow-500/20">
                <div className="text-yellow-500 mb-4">{item.icon}</div>
                <p className="font-semibold">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Produto */}
      <div className="py-16 px-4 bg-slate-800/50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Apresento: <span className="text-yellow-500">Currículo com IA</span></h2>
            <p className="text-xl text-slate-300">O guia definitivo para transformar seu currículo usando ChatGPT</p>
          </div>

          {/* Imagem do produto */}
          <div className="mb-12 flex justify-center">
            <img
              src="/image/capa-cv-gpt.png"
              alt="Capa do guia Currículo com IA"
              className="rounded-lg shadow-2xl max-w-md w-full border-2 border-yellow-500/20"
            />
          </div>

          <div className="space-y-4">
            {[
              "Passam pelos filtros ATS (os sistemas que descartam 75% dos currículos)",
              "Capturam atenção em segundos usando storytelling profissional",
              "Destacam suas realizações de forma quantificável e impactante",
              "Personalizam-se para cada vaga em minutos com ChatGPT",
              "Comunicam valor mesmo se você está começando ou mudando de área"
            ].map((benefit, i) => (
              <div key={i} className="flex items-start gap-3 bg-slate-900/50 p-4 rounded-lg">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                <p className="text-slate-200">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Módulos */}
      <div className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">O Que Você Vai Receber:</h2>
          
          <div className="space-y-6">
            {[
              {
                title: "Módulo 1: Fundamentos do Currículo Vencedor",
                items: ["Por que 95% dos currículos são descartados", "Anatomia de um currículo que gera entrevistas", "Erros fatais que você precisa evitar"]
              },
              {
                title: "Módulo 2: ChatGPT - Seu Assistente Pessoal",
                items: ["Prompts específicos para cada seção", "Como adaptar experiência para diferentes vagas", "Transformar tarefas em conquistas"]
              },
              {
                title: "Módulo 3: Dominando os Sistemas ATS",
                items: ["Como os robôs de recrutamento funcionam", "Palavras-chave que fazem seu currículo passar", "Checklist de otimização ATS"]
              },
              {
                title: "Módulo 4: Storytelling Profissional",
                items: ["Como contar sua história com impacto", "Estruturas que vendem suas habilidades", "Quantificação de resultados"]
              },
              {
                title: "Módulo 5: Estratégias Avançadas",
                items: ["Personalização rápida para cada vaga", "Como lidar com gaps no currículo", "Transição de carreira"]
              }
            ].map((module, i) => (
              <div key={i} className="bg-slate-800/50 p-6 rounded-lg border border-slate-700">
                <h3 className="text-xl font-bold mb-4 text-yellow-500">{module.title}</h3>
                <ul className="space-y-2">
                  {module.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-2 text-slate-300">
                      <span className="text-yellow-500">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Bônus */}
          <div className="mt-12 bg-gradient-to-r from-yellow-500/10 to-yellow-600/10 border-2 border-yellow-500/30 rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-6 text-center">🎁 Bônus Exclusivos:</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { title: "Templates Otimizados", value: "R$ 47" },
                { title: "50+ Prompts ChatGPT", value: "R$ 37" },
                { title: "Checklist de Revisão", value: "R$ 27" },
                { title: "Guia de Carta de Apresentação", value: "R$ 37" }
              ].map((bonus, i) => (
                <div key={i} className="bg-slate-900/50 p-4 rounded-lg">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold">{bonus.title}</span>
                    <span className="text-yellow-500 font-bold">{bonus.value}</span>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-center mt-6 text-lg">
              <strong>Valor Total dos Bônus:</strong> <span className="text-yellow-500 text-2xl font-bold">R$ 148</span>
            </p>
          </div>
        </div>
      </div>

      {/* Oferta e Countdown */}
      <div id="checkout" className="py-16 px-4 bg-slate-800/50">
        <div className="max-w-2xl mx-auto">
          <div className="bg-gradient-to-br from-yellow-500 to-yellow-600 text-slate-900 p-8 rounded-2xl shadow-2xl">
            <div className="text-center mb-6">
              <div className="inline-block bg-red-600 text-white px-4 py-2 rounded-full font-bold mb-4">
                🔥 OFERTA ESPECIAL POR TEMPO LIMITADO
              </div>
              <h2 className="text-3xl font-bold mb-4">Garanta Seu Acesso HOJE</h2>
              
              <div className="flex justify-center gap-4 mb-6">
                <div className="bg-slate-900 text-white p-4 rounded-lg min-w-[80px]">
                  <div className="text-3xl font-bold">{String(timeLeft.hours).padStart(2, '0')}</div>
                  <div className="text-xs">HORAS</div>
                </div>
                <div className="bg-slate-900 text-white p-4 rounded-lg min-w-[80px]">
                  <div className="text-3xl font-bold">{String(timeLeft.minutes).padStart(2, '0')}</div>
                  <div className="text-xs">MINUTOS</div>
                </div>
                <div className="bg-slate-900 text-white p-4 rounded-lg min-w-[80px]">
                  <div className="text-3xl font-bold">{String(timeLeft.seconds).padStart(2, '0')}</div>
                  <div className="text-xs">SEGUNDOS</div>
                </div>
              </div>

              <div className="mb-6">
                <div className="text-sm line-through mb-2">De R$ 57 por apenas</div>
                <div className="text-6xl font-bold mb-2">R$ 12,90</div>
                
              </div>

              <div className="space-y-3 text-left bg-white/10 p-4 rounded-lg mb-6">
                {[
                  "✅ Guia Completo com 5 Módulos",
                  "✅ 4 Bônus Exclusivos (R$ 148)",
                  "✅ Acesso Imediato e Vitalício",
                  "✅ Atualizações Gratuitas",
                  "✅ Garantia de 7 Dias"
                ].map((item, i) => (
                  <div key={i} className="text-sm font-semibold">{item}</div>
                ))}
              </div>

              <button
                onClick={handleCheckout}
                className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold text-xl py-6 rounded-xl transition-all transform hover:scale-105 shadow-lg mb-4"
              >
                QUERO MEU ACESSO AGORA
              </button>

              <div className="flex items-center justify-center gap-2 text-sm">
                <Shield className="w-5 h-5" />
                <span>Compra 100% Segura e Protegida</span>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center bg-green-500/10 border border-green-500/30 p-6 rounded-lg">
            <Shield className="w-12 h-12 text-green-500 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Garantia Sem Riscos de 7 Dias</h3>
            <p className="text-slate-300">
              Experimente o método completo. Se não ficar satisfeito por qualquer motivo, devolvemos 100% do seu investimento. Sem perguntas. Sem complicações.
            </p>
          </div>
        </div>
      </div>

      {/* Depoimentos
      <div className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Veja o Que Outros Profissionais Estão Dizendo</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "Mariana S.",
                role: "Analista de Marketing",
                text: "Fui chamada para 3 entrevistas na mesma semana! Usei os prompts e em 2 horas refiz meu currículo. Funcionou!",
                stars: 5
              },
              {
                name: "Roberto M.",
                role: "Gerente de Projetos",
                text: "Consegui transição de carreira depois de 15 anos. Com as técnicas do guia, me posicionei e fui contratado em 2 meses.",
                stars: 5
              },
              {
                name: "Lucas T.",
                role: "Desenvolvedor Júnior",
                text: "Primeira entrevista aos 22 anos! Recém-formado, sem experiência. O guia mostrou como destacar projetos acadêmicos.",
                stars: 5
              }
            ].map((testimonial, i) => (
              <div key={i} className="bg-slate-800/50 p-6 rounded-lg border border-slate-700">
                <div className="flex gap-1 mb-3">
                  {[...Array(testimonial.stars)].map((_, j) => (
                    <Star key={j} className="w-5 h-5 fill-yellow-500 text-yellow-500" />
                  ))}
                </div>
                <p className="text-slate-300 mb-4 italic">"{testimonial.text}"</p>
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-slate-400">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div> */}

      {/* FAQ */}
      <div className="py-16 px-4 bg-slate-800/50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Perguntas Frequentes</h2>
          
          <div className="space-y-4">
            {[
              {
                q: "Preciso saber programar ou ser expert em tecnologia?",
                a: "Não! O guia é feito para qualquer profissional, independente da área. Tudo é explicado passo a passo."
              },
              {
                q: "Funciona se eu estou mudando de área?",
                a: "SIM! Temos um módulo específico sobre transição de carreira e como se posicionar."
              },
              {
                q: "Quanto tempo leva para refazer meu currículo?",
                a: "Com os prompts prontos e templates, você pode ter um currículo novo em 2-3 horas."
              },
              {
                q: "O ChatGPT é pago?",
                a: "A versão gratuita do ChatGPT é suficiente para aplicar todas as técnicas do guia."
              },
              {
                q: "E se eu não tiver experiência profissional?",
                a: "Perfeito! O guia ensina como destacar projetos acadêmicos, voluntariado e outras experiências."
              },
              {
                q: "Tenho acesso por quanto tempo?",
                a: "Acesso vitalício! E você ainda recebe todas as atualizações gratuitamente."
              }
            ].map((faq, i) => (
              <div key={i} className="bg-slate-900/50 rounded-lg border border-slate-700 overflow-hidden">
                <button
                  onClick={() => toggleFaq(i)}
                  className="w-full p-4 text-left flex justify-between items-center hover:bg-slate-800/50 transition"
                >
                  <span className="font-semibold">{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 transition-transform ${faqOpen[i] ? 'rotate-180' : ''}`} />
                </button>
                {faqOpen[i] && (
                  <div className="p-4 pt-0 text-slate-300">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Final */}
      <div className="py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Você Tem Duas Escolhas:</h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="bg-red-500/10 border border-red-500/30 p-6 rounded-lg">
              <div className="text-4xl mb-4">❌</div>
              <h3 className="font-bold mb-3">OPÇÃO 1</h3>
              <p className="text-slate-300">Continuar enviando currículos genéricos, sendo ignorado e frustrado.</p>
            </div>
            <div className="bg-green-500/10 border border-green-500/30 p-6 rounded-lg">
              <div className="text-4xl mb-4">✅</div>
              <h3 className="font-bold mb-3">OPÇÃO 2</h3>
              <p className="text-slate-300">Investir 2 horas e R$ 12,90 para transformar seu currículo.</p>
            </div>
          </div>

          <button
            onClick={handleCheckout}
            className="bg-yellow-500 hover:bg-yellow-600 text-slate-900 font-bold text-xl px-12 py-6 rounded-xl transition-all transform hover:scale-105 shadow-lg shadow-yellow-500/50"
          >
            QUERO TRANSFORMAR MEU CURRÍCULO AGORA
          </button>

          <p className="mt-6 text-slate-400">🔒 Compra 100% Segura | ✅ Acesso Imediato | 🛡️ Garantia de 7 Dias</p>

          <div className="mt-12 p-6 bg-slate-800/50 rounded-lg text-left space-y-4">
            <p><strong>P.S.:</strong> Lembre-se, você tem 7 dias de garantia total. Se não funcionar, devolvemos seu dinheiro sem perguntas.</p>
            <p><strong>P.P.S.:</strong> Cada dia que passa com um currículo ruim é uma oportunidade perdida. Não deixe para depois.</p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="py-8 px-4 bg-slate-900 border-t border-slate-800">
        <div className="max-w-4xl mx-auto text-center text-slate-400 text-sm">
          <p>© 2025 Currículo com IA - Todos os direitos reservados</p>
          <p className="mt-2">Dúvidas? contato@curriculocomia.com.br</p>
        </div>
      </div>
    </div>
  );
}
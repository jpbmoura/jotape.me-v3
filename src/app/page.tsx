import SectionContainer from "@/components/section-container";
import Tag from "@/components/tag";
import {
  eduzzIcon,
  nestIcon,
  nextIcon,
  reactIcon,
  tsIcon,
} from "@/utils/constants/icons";

export default function Home() {
  return (
    <SectionContainer>
      <h1 className="text-4xl font-semibold text-white">João Pedro de Moura</h1>
      <p>
        Olá, meu nome é João Pedro. Sou um desenvolvedor front-end brasileiro
        apaixonado por criar experiências de usuário que combinam beleza e
        funcionalidade.
      </p>

      <p>
        Acredito que a web é um espaço poderoso para conectar pessoas e ideias,
        e me dedico a construir interfaces que sejam intuitivas, acessíveis e
        que encantem os usuários.
      </p>

      <div>
        <div className="flex gap-1">
          Atualmente trabalhando na: <Tag label="Eduzz" icon={eduzzIcon} />
        </div>
        <div className="flex gap-1">
          Criador de: <Tag label="WhoWho" />
        </div>

        <div className="flex gap-1">
          <p>Stack:</p>
          <div className="flex gap-1 flex-row">
            <Tag label="TypeScript" icon={tsIcon} />
            <Tag label="React" icon={reactIcon} />
            <Tag label="Next.JS" icon={nextIcon} />
            <Tag label="NestJS" icon={nestIcon} />
          </div>
        </div>
      </div>

      <p>
        Em meu tempo livre, exploro minha paixão pela música e pela escrita,
        criando melodias que nunca serão ouvidas e histórias que nunca serão
        lidas.
      </p>

      <p>
        Estou sempre em busca de oportunidades para crescer e contribuir com
        projetos inovadores. Se você busca um profissional dedicado, apaixonado
        pelo que faz e que está sempre buscando se aprimorar, entre em contato
        comigo!
      </p>
    </SectionContainer>
  );
}

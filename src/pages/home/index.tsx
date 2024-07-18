import {
  BoxImage,
  ContainerMain,
  LocationContainer,
  SocialMediaContainer,
} from "./styles";
import MyPhoto from "../../assets/perfil.png";
import Eduardo from "../../assets/eduardo-removebg-preview.png";
import Marcones from "../../assets/marcones-removebg-preview.png";
import Irmão from "../../assets/irmao-oficial.png";

import { MapPin, WhatsappLogo } from "phosphor-react";
import { Projects } from "../projects";
import { Skills } from "../skills";
import { Header } from "../../components/Header";

export function Home() {
  return (
    <div>
      <Header />
      <LocationContainer>
        <a
          href="https://www.google.com/maps/place/R.+Caramuru,+223+-+St.+Caraja,+Aragua%C3%ADna+-+TO,+77809-050/@-7.2044687,-48.2013133,17z/data=!3m1!4b1!4m6!3m5!1s0x92d90dd290685c83:0xaf8ecfca80aac423!8m2!3d-7.2044687!4d-48.2013133!16s%2Fg%2F11s63y__hl?entry=ttu"
          target="_blank"
        >
          Local de atendimento
          <MapPin weight="fill" color="#F00" size={18} />
        </a>
      </LocationContainer>
      <ContainerMain>
        <div>
          <h2>José Coelho (Irmão)</h2>
          <h3>Barbeiro</h3>
          <SocialMediaContainer>
            <a
              href="https://api.whatsapp.com/send?phone=+5563992573893&text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20barbearia%20gostaria%20de%20marcar%20um%20hor%C3%A1rio"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>
                <p>Marcar Horário</p>
                <WhatsappLogo weight="bold" size={18} />
              </span>
            </a>
          </SocialMediaContainer>
        </div>
        <BoxImage>
          <img src={Irmão} alt="Foto de José" />
        </BoxImage>
      </ContainerMain>
      <ContainerMain>
        <div>
          <h2>Eli Oliver</h2>
          <h3>Barbeiro</h3>
          <SocialMediaContainer>
            <a
              href="https://api.whatsapp.com/send?phone=+5563991139721&text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20barbearia%20gostaria%20de%20marcar%20um%20hor%C3%A1rio"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>
                <p>Marcar Horário</p>
                <WhatsappLogo weight="bold" size={18} />
              </span>
            </a>
          </SocialMediaContainer>
        </div>
        <BoxImage>
          <img src={MyPhoto} alt="foto de Eli Oliver" />
        </BoxImage>
      </ContainerMain>
      <ContainerMain>
        <div>
          <h2>Eduardo G. Silva</h2>
          <h3>Barbeiro</h3>
          <SocialMediaContainer>
            <a
              href="https://api.whatsapp.com/send?phone=+5563991269131&text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20barbearia%20gostaria%20de%20marcar%20um%20hor%C3%A1rio"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>
                <p>Marcar Horário</p>
                <WhatsappLogo weight="bold" size={18} />
              </span>
            </a>
          </SocialMediaContainer>
        </div>
        <BoxImage>
          <img src={Eduardo} alt="Foto de Eduardo" />
        </BoxImage>
      </ContainerMain>
      <ContainerMain>
        <div>
          <h2>Marcones Oliveira</h2>
          <h3>Barbeiro</h3>
          <SocialMediaContainer>
            <a
              href="https://api.whatsapp.com/send?phone=+5563992888129&text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20barbearia%20gostaria%20de%20marcar%20um%20hor%C3%A1rio"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>
                <p>Marcar Horário</p>
                <WhatsappLogo weight="bold" size={18} />
              </span>
            </a>
          </SocialMediaContainer>
        </div>
        <BoxImage>
          <img src={Marcones} alt="Foto de Marcones" />
        </BoxImage>
      </ContainerMain>
      <Projects />
      <Skills />
    </div>
  );
}

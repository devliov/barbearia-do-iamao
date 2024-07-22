import { CurrencyDollar, Scissors, UserCircle } from "phosphor-react";
import { HeaderContainer } from "./styles";
import { ReactNode } from "react";

import Logo from "../../assets/logo-barbearia-do-irmão.png";
import ScrollToTopButton from "../Button-scroll";

type MenuHeader = {
  id: number;
  name: string;
  link: string;
  icon: () => ReactNode;
};
const menu: MenuHeader[] = [
  {
    id: 1,
    name: "Perfis",
    link: "#perfil",
    icon() {
      return <UserCircle size={22} weight="bold" />;
    },
  },
  {
    id: 2,
    name: "Trabalhos",
    link: "#trabalhos",
    icon() {
      return <Scissors size={20} weight="bold" />;
    },
  },
  {
    id: 3,
    name: "Preços",
    link: "#preços",
    icon() {
      return <CurrencyDollar size={20} weight="bold" />;
    },
  },
];

export function Header() {
  return (
    <HeaderContainer>
      <div>
        <a href="#perfil">
          <img src={Logo} alt="" />
        </a>
      </div>
      <nav>
        {menu.map((menu) => (
          <a key={menu.id} href={menu.link} title={menu.name}>
            <span>{menu.icon()}</span>
            <span>{menu.name}</span>
          </a>
        ))}
      </nav>
      <ScrollToTopButton />
    </HeaderContainer>
  );
}

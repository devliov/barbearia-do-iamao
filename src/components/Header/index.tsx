import { CurrencyDollar, Scissors, UserCircle } from "phosphor-react";
import { HeaderContainer } from "./styles";
import { ReactNode } from "react";

import Logo from "../../assets/Barbearia do Irmão(2).gif";

type MenuHeader = {
  id: number;
  name: string;
  link: string;
  icon: () => ReactNode;
};
const menu: MenuHeader[] = [
  {
    id: 1,
    name: "Profissionais",
    link: "#profile",
    icon() {
      return <UserCircle size={26} weight="bold" />;
    },
  },
  {
    id: 2,
    name: "Trabalhos",
    link: "#works",
    icon() {
      return <Scissors size={24} weight="bold" />;
    },
  },
  {
    id: 3,
    name: "Preços",
    link: "#prices",
    icon() {
      return <CurrencyDollar size={24} weight="bold" />;
    },
  },
];

export function Header() {
  return (
    <HeaderContainer>
      <div>
        <a href="#profile">
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
    </HeaderContainer>
  );
}

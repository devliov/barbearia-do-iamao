import WhiteLogo from "../../assets/Barbearia do Irmão(1).gif";

import Corte1 from "../../assets/corte-eli-1.jpg";
import Corte2 from "../../assets/corte-eli-2.jpg";
import Corte3 from "../../assets/corte-eli-3.jpg";
import Corte4 from "../../assets/corte-eli-4.jpg";
import Corte5 from "../../assets/corte-eli-5.jpg";
import Corte6 from "../../assets/corte-eli-6.jpg";
import Corte7 from "../../assets/corte-eli-7.jpg";

import CorteIrmao1 from "../../assets/corte-irmao-1.jpg";
import CorteIrmao2 from "../../assets/corte-irmao-2.jpg";
import CorteIrmao3 from "../../assets/corte-irmao-3.jpg";
import CorteIrmao4 from "../../assets/corte-irmao-4.jpg";
import CorteIrmao5 from "../../assets/corte-irmao-5.jpg";
import CorteIrmao6 from "../../assets/corte-irmao-6.jpg";
import CorteIrmao7 from "../../assets/corte-irmao-7.jpg";
import CorteIrmao8 from "../../assets/corte-irmao-8.jpg";
import CorteIrmao9 from "../../assets/corte-irmao-9.jpg";
import CorteIrmao10 from "../../assets/corte-irmao-10.jpg";

export type ProjectItem = {
  id: number;
  professionalName: string;
  images: string[];
};

export const projectItems: ProjectItem[] = [
  {
    id: 1,
    professionalName: "José Coelho (Irmão)",
    images: [
      CorteIrmao1,
      CorteIrmao2,
      CorteIrmao3,
      CorteIrmao4,
      CorteIrmao5,
      CorteIrmao6,
      CorteIrmao7,
      CorteIrmao8,
      CorteIrmao9,
      CorteIrmao10,
    ],
  },
  {
    id: 2,
    professionalName: "Eli Oliver",
    images: [Corte1, Corte2, Corte3, Corte4, Corte5, Corte6, Corte7],
  },
  {
    id: 3,
    professionalName: "Eduardo",
    images: [WhiteLogo, WhiteLogo, WhiteLogo],
  },
  {
    id: 4,
    professionalName: "Marcones",
    images: [WhiteLogo, WhiteLogo, WhiteLogo],
  },
];

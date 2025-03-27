export const SITIOS_WEB: {
  titulo: string;
  sitio: string;
  fechas: {
    status: string;
    date: Date;
  }[];
}[] = [
  {
    titulo: "Flagship",
    sitio: "https://www.digitalax.xyz/",
    fechas: [],
  },
  {
    titulo: "TripleA",
    sitio: "https://triplea.agentmeme.xyz/",
    fechas: [
      {
        date: new Date("2024-11-08"),
        status: "lensv3 migration",
      },
      {
        date: new Date("2024-11-07"),
        status: "lensv3 migration",
      },
    ],
  },
  {
    titulo: "Lucidity",
    sitio: "https://lucidity.agentmeme.xyz/",
    fechas: [
      {
        date: new Date("2024-11-08"),
        status: "lensv3 migration",
      },
      {
        date: new Date("2024-11-07"),
        status: "lensv3 migration",
      },
    ],
  },
  {
    titulo: "Skyhunters",
    sitio: "https://skyhunters.agentmeme.xyz/",
    fechas: [
      {
        date: new Date("2024-11-08"),
        status: "lensv3 migration",
      },
      {
        date: new Date("2024-11-07"),
        status: "lensv3 migration",
      },
    ],
  },
  {
    titulo: "NPC Studio",
    sitio: "https://www.npcstudio.xyz/",
    fechas: [],
  },
  {
    titulo: "Chromadin",
    sitio: "https://www.chromadin.xyz/",
    fechas: [],
  },
  {
    titulo: "Cypher Search",
    sitio: "https://cypher.digitalax.xyz/",
    fechas: [
      {
        date: new Date("2024-11-08"),
        status: "migration",
      },
      {
        date: new Date("2024-11-07"),
        status: "migration",
      },
    ],
  },
  {
    titulo: "Coin Op",
    sitio: "https://coinop.themanufactory.xyz/",
    fechas: [],
  },
  {
    titulo: "Kinora",
    sitio: "https://kinora.irrevocable.dev/",
    fechas: [
      {
        date: new Date("2024-11-08"),
        status: "migration",
      },
      {
        date: new Date("2024-11-07"),
        status: "migration",
      },
    ],
  },
  {
    titulo: "Listener",
    sitio: "https://listener.irrevocable.dev/",
    fechas: [],
  },
  {
    titulo: "The Manufactory",
    sitio: "https://themanufactory.xyz/",
    fechas: [],
  },
  {
    titulo: "Legend",
    sitio: "https://legend.irrevocable.dev/",
    fechas: [],
  },
];

export const INFURA_GATEWAY: string = "https://thedial.infura-ipfs.io";

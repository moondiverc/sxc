import managerARBg from "@/assets/manager-ar-bg.png";
import managerTDBg from "@/assets/manager-td-bg.jpeg";
import teamARFadhil from "@/assets/team-ar-fadhil.png";
import teamARRifki from "@/assets/team-ar-rifki.png";
import teamARSabrina from "@/assets/team-ar-sabrina.png";
import teamARValsya from "@/assets/team-ar-valsya.png";
import teamTDDanar from "@/assets/team-td-danar.png";
import teamTDSayid from "@/assets/team-td-sayid.png";
import teamTDLuna from "@/assets/team-td-luna.png";

export const orgStructure = {
  cdto: {
    role: "Chief Digital Transformation Officer",
    name: "Ari Muhamad Juliansyah",
  },
  managers: [
    {
      role: "Manager - Analytic Research",
      name: "Hasna Choirunnisa",
      imageSrc: managerARBg,
      team: [
        { name: "Valsyahira Nooryansha", imageSrc: teamARValsya },
        { name: "Fadhil Rusydi Hafizh", imageSrc: teamARFadhil },
        { name: "Rifki Hilman Fauzi", imageSrc: teamARRifki },
        { name: "Sabrina Putri Lestari", imageSrc: teamARSabrina },
      ],
    },
    {
      role: "Manager - Technology Development",
      name: "Richard Hans",
      imageSrc: managerTDBg,
      team: [
        { name: "Sayyid Muhammad Muslim As'ad Sunarko", imageSrc: teamTDSayid },
        { name: "Nezzaluna Azzahra", imageSrc: teamTDLuna },
        { name: "Danar Mas Saputra", imageSrc: teamTDDanar },
      ],
    },
  ],
};

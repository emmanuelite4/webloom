import Team1 from "../assets/images/teams/team1.png";
import Team2 from "../assets/images/teams/team2.png";
import Team3 from "../assets/images/teams/team3.png";
import Team4 from "../assets/images/teams/team4.png";
import Team5 from "../assets/images/teams/team5.png";
import Team6 from "../assets/images/teams/team6.png";
import Team7 from "../assets/images/teams/team7.png";
import Team8 from "../assets/images/teams/team8.png";
import Team9 from "../assets/images/teams/team9.png";

type TeamType = {
  name: string;
  image: string;
  email: string;
  role: string;
};

const teams: TeamType[] = [
  {
    name: "Devid Esoni",
    email: "devidesoni@mail.com",
    role: "Senior Project Manager",
    image: Team1,
  },
  {
    name: "Ripon Video",
    email: "riponvideo@mail.com",
    role: "Senior UX Designer",
    image: Team2,
  },
  {
    name: "Yeasmin Jeo",
    role: "Ux Ui Designer",
    email: "yeasminjeo@mail.com",
    image: Team3,
  },
  {
    name: "Adrita Kha",
    role: "Motion Graphic Designer",
    email: "adritakhaaa@mail.com",
    image: Team4,
  },
  {
    name: "Aliqa Macale",
    role: "Senior Ui Designer",
    email: "aliqamacale@mail.com",
    image: Team5,
  },
  {
    name: "Tanimn Hasan",
    role: "UI designer",
    email: "tanimhasan@mail.com",
    image: Team6,
  },
  {
    name: "Adrita Kha",
    role: "UI Designer",
    email: "adritakhaaa@mail.com",
    image: Team7,
  },
  {
    name: "Aliqa Macale",
    role: "Senior UI Designer",
    email: "aliqamacale@mail.com",
    image: Team8,
  },
  {
    name: "Tanimm Hasan",
    role: "UI designer",
    email: "tanimhasan@mail.com",
    image: Team9,
  },
];

export { teams };

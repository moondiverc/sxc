import {
  Lightbulb,
  Briefcase,
  Rocket,
  Users,
  Globe,
  GraduationCap,
  TrendingUp,
  Target,
} from "lucide-react";

export const programs = [
  {
    id: 1,
    title: "School of Ideas",
    description:
      "Offline event for high school students to explore their potential through personality tests and grow into future leaders with engaging talk shows and workshops",
    icon: Lightbulb,
    color: "from-purple-500 to-pink-500",
    features: ["Offline Event", "High School", "Workshops"],
  },
  {
    id: 2,
    title: "SxCareer",
    description:
      "Career preparation webinar focused on 5 industries: Consulting, Banking, FMCG, Media, Technology, StartUp and impactful goal-setting sessions to empower future leaders",
    icon: Briefcase,
    color: "from-blue-500 to-cyan-500",
    features: ["Webinar", "Career Prep", "5 Industries"],
  },
  {
    id: 3,
    title: "SxCelerate",
    description:
      "Bootcamp program for outstanding students in 2 months consisting of Forum, Mentoring, Company Visit, Case Competition, and Client Project",
    icon: Rocket,
    color: "from-orange-500 to-red-500",
    features: ["Bootcamp", "2 Months", "Case Competition"],
  },
  {
    id: 4,
    title: "Meet the Series",
    description:
      "Big offline event, consist of Meet The CEO, Meet The Expert, and Meet Yourself that focuses on career insights, professional skills training, and business leader perspectives",
    icon: Users,
    color: "from-green-500 to-emerald-500",
    features: ["Offline Event", "Meet The CEO", "Networking"],
  },
  {
    id: 5,
    title: "SxConference",
    description:
      "A dynamic program that unites SxC alumni, young professionals, and industry leaders for insightful talk shows and engaging discussions, fostering collaboration, growth, and impactful change",
    icon: Globe,
    color: "from-indigo-500 to-purple-500",
    features: ["Conference", "Networking", "Leadership"],
  },
  {
    id: 6,
    title: "SxCamp",
    description:
      "Immersive leadership camp designed to build character, teamwork, and personal growth through outdoor activities and intensive training sessions",
    icon: GraduationCap,
    color: "from-yellow-300 to-orange-500",
    features: ["Camp", "Leadership", "Teamwork"],
  },
  {
    id: 7,
    title: "Company Visits",
    description:
      "Exclusive opportunities to visit leading companies, gain industry insights, and network with professionals in various sectors",
    icon: TrendingUp,
    color: "from-teal-500 to-green-500",
    features: ["Company Visit", "Networking", "Insights"],
  },
  {
    id: 8,
    title: "StudentxCEOs International Summit",
    description:
      "Premier international event bringing together students, professionals, and CEOs from around the world for collaborative learning and networking",
    icon: Target,
    color: "from-pink-500 to-rose-500",
    features: ["International", "Summit", "Global Network"],
  },
];

export const programContent = {
  title: "Leadership & Development Programs",
  subtitle:
    "StudentxCEOs offers a variety of leadership, career, and professional development programs, along with impactful national and international events",
  ctaText: "Ready to join our programs and unlock your potential?",
  ctaButton: "Explore All Programs",
};

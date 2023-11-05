import uzb from "../../assets/Flag_of_Uzbekistan.svg.png";
import rus from "../../assets/Flag_of_Russia.svg.png";
import eng from "../../assets/Flag_of_Great_Britain_(English_version).png";

export const langs = [
  {
    lang: "O'zbekcha",
    short: "UZ",
    url: uzb,
    isSelected: false,
    id: 0,
  },
  {
    lang: "English",
    short: "EN",
    url: eng,
    isSelected: true,
    id: 1,
  },
  {
    lang: "Русский",
    short: "РУ",
    url: rus,
    isSelected: false,
    id: 0,
  },
];

export const regions = [
  {
    name: "tashkent",
    isSelected: false,
    id: 1,
  },
  {
    name: "nukus",
    isSelected: true,
    id: 0,
  },
  {
    name: "namangan",
    isSelected: false,
    id: 0,
  },
  {
    name: "kokand",
    isSelected: false,
    id: 0,
  },
  {
    name: "andijon",
    isSelected: false,
    id: 0,
  },
  {
    name: "fergana",
    isSelected: false,
    id: 0,
  },
  {
    name: "samarqand",
    isSelected: false,
    id: 0,
  },
  {
    name: "gazalkent",
    isSelected: false,
    id: 0,
  },
];

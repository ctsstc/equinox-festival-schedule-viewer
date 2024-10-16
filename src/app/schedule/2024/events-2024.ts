import { nanoid } from "nanoid";

export enum Stage2024 {
  Equinox = "Equinox",
  Tilt = "Tilt",
  Harvest = "Harvest",
}

const day1 = [
  // Equinox Stage
  {
    id: nanoid(),
    title: "Opening Ceremony",
    start: "2024-09-20 05:00",
    end: "2024-09-20 05:15",
    location: Stage2024.Equinox,
    calendarId: Stage2024.Equinox,
  },
  {
    id: nanoid(),
    title: "Hanna",
    start: "2024-09-20 05:20",
    end: "2024-09-20 06:30",
    location: Stage2024.Equinox,
    calendarId: Stage2024.Equinox,
  },

  // Tilt Stage
  {
    id: nanoid(),
    title: "Majitope",
    start: "2024-09-20 04:00",
    end: "2024-09-20 05:15",
    location: Stage2024.Tilt,
    calendarId: Stage2024.Tilt,
  },
  {
    id: nanoid(),
    title: "Cliche",
    start: "2024-09-20 05:20",
    end: "2024-09-20 06:35",
    location: Stage2024.Tilt,
    calendarId: Stage2024.Tilt,
  },
];
const day2 = [
  {
    id: nanoid(),
    title: "Free Creatures",
    start: "2024-09-21 04:00",
    end: "2024-09-21 05:15",
    location: Stage2024.Equinox,
    calendarId: Stage2024.Equinox,
  },
];
const day3 = [
  {
    id: nanoid(),
    title: "Karina Rykman",
    start: "2024-09-22 04:30",
    end: "2024-09-22 06:00",
    location: Stage2024.Equinox,
    calendarId: Stage2024.Equinox,
  },
];

export const Events2024 = {
  all: [...day1, ...day2, ...day3],
  "2024-09-20": [...day1],
  "2024-09-21": [...day2],
  "2024-09-22": [...day3],
};

"use client";

import "@schedule-x/theme-default/dist/index.css";
// import "./App.css";
import CustomDateGridEvent from "@/components/CustomDateGridEvent";
import CustomTimeGridEvent from "@/components/CustomTimeGridEvent";
// Remember to also set your styles to the wrapper element .sx-react-calendar-wrapper
// For example:
// .sx-react-calendar-wrapper {
//   width: 100%;
//   height: 800px;
//   max-height:90vh;
// }
//
// For best mobile experience, you might consider 100vw and 100% of the container element's height
import {
  viewDay,
  viewMonthAgenda,
  viewMonthGrid,
  viewWeek,
} from "@schedule-x/calendar";
import { createEventModalPlugin } from "@schedule-x/event-modal";
import { Calendar, useCalendarApp } from "@schedule-x/react";

export default function Schedule2024() {
  const eventModalPlugin = createEventModalPlugin();
  const calendar = useCalendarApp({
    // selectedDate: "2024-09-20",
    selectedDate: "2023-12-03",
    defaultView: viewDay.name,
    views: [viewDay, viewWeek, viewMonthGrid, viewMonthAgenda],
    // plugins: [createEventModalPlugin(), createDragAndDropPlugin()],
    plugins: [eventModalPlugin],
    events: [
      {
        id: 1,
        title: "Coffee with John",
        start: "2023-12-01",
        end: "2023-12-01",
      },
      {
        id: 2,
        title: "Breakfast with Sam",
        description: "Discuss the new project",
        location: "Starbucks",
        start: "2023-11-29 05:00",
        end: "2023-11-29 06:00",
      },
      {
        id: 3,
        title: "Gym",
        start: "2023-11-27 06:00",
        end: "2023-11-27 07:00",
        calendarId: "leisure",
      },
      {
        id: 4,
        title: "Media fasting",
        start: "2023-12-01",
        end: "2023-12-03",
        calendarId: "leisure",
      },
      {
        id: 5,
        title: "Some appointment",
        description: "More info here",
        people: ["John"],
        start: "2023-12-03 03:00",
        end: "2023-12-03 04:30",
      },
      {
        id: 6,
        title: "Other appointment",
        description: "Additional information here",
        people: ["Susan", "Mike"],
        start: "2023-12-03 03:00",
        end: "2023-12-03 04:30",
        calendarId: "leisure",
      },
    ],
    calendars: {
      leisure: {
        colorName: "leisure",
        lightColors: {
          main: "#1c7df9",
          container: "#d2e7ff",
          onContainer: "#002859",
        },
        darkColors: {
          main: "#c0dfff",
          onContainer: "#dee6ff",
          container: "#426aa2",
        },
      },
    },
  });

  return (
    <div>
      <Calendar
        calendarApp={calendar}
        customComponents={{
          timeGridEvent: CustomTimeGridEvent,
          dateGridEvent: CustomDateGridEvent,
        }}
      />
    </div>
  );
}

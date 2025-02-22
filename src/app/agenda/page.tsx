"use client"

import dayGridPlugin from "@fullcalendar/daygrid"
import Calendar from "@fullcalendar/react"
import timeGridPlugin from "@fullcalendar/timegrid"
import interactionPlugin from "@fullcalendar/interaction"
import { Layout } from "@/components/layout"
import AgendaSidebar from "./agendaSidebar"

export default function SchedulePage() {
    return (
        <Layout sidebar={<AgendaSidebar />}>
            <div className="">
                <Calendar
                    plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                    initialView="timeGridWeek"
                    headerToolbar={{
                        left: "prev,next today",
                        center: "title",
                        right: "dayGridMonth,timeGridWeek,timeGridDay",
                    }}
                    slotMinTime="05:00:00"
                    slotMaxTime="23:00:00"
                    slotDuration="00:15:00"
                    locale="pt-br"
                    selectable={true}
                    selectMirror={true}
                    dayMaxEvents={true}
                    weekends={true}
                    height="100%"
                    expandRows={true}
                    stickyHeaderDates={true}
                    allDaySlot={false}
                    businessHours={{
                        daysOfWeek: [1, 2, 3, 4, 5],
                        startTime: "08:00",
                        endTime: "18:00",
                    }}
                />
            </div>
        </Layout>
    )
}


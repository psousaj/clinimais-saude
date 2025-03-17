"use client"

import dayGridPlugin from "@fullcalendar/daygrid"
import Calendar from "@fullcalendar/react"
import timeGridPlugin from "@fullcalendar/timegrid"
import interactionPlugin from "@fullcalendar/interaction"
import ptBrLocale from "@fullcalendar/core/locales/pt-br"
import { useRef } from "react"
import useWindowResize from "../../hooks/useWindowResize"

export default function SchedulePage() {
    const calendarRef = useRef<Calendar>(null)

    const handleDateClick = (arg: any) => {
        alert('Date clicked: ' + arg.dateStr)
    }

    const handleSelect = (arg: any) => {
        alert('Selected: ' + arg.startStr + ' to ' + arg.endStr)
    }

    useWindowResize(() => {
        if (calendarRef.current) {
            calendarRef.current.getApi().updateSize()
        }
    })

    return (
        <div className="h-full">
            <Calendar
                ref={calendarRef}
                plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                initialView="timeGridWeek"
                headerToolbar={{
                    left: "prev,next today",
                    center: "title",
                    right: "dayGridMonth,timeGridWeek,timeGridDay",
                }}
                slotMinTime="08:00:00"
                slotMaxTime="18:00:00"
                slotDuration="00:30:00"
                locale={ptBrLocale}
                selectable={true}
                selectMirror={true}
                dayMaxEvents={true}
                weekends={true}
                height="100%"
                // expandRows={true}
                expandRows={false}
                // stickyHeaderDates={true}
                stickyHeaderDates={false}
                allDaySlot={false}
                businessHours={{
                    daysOfWeek: [1, 2, 3, 4, 5],
                    startTime: "08:00",
                    endTime: "18:00",
                }}
                dateClick={handleDateClick}
            />
        </div>
    )
}


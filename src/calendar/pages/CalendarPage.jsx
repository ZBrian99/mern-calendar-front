import { Calendar } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';

import { CalendarEvent, CalendarModal, FabAddNew, FabDelete, NavBar } from '../';

import { localizer, getMessage } from '../../helpers';
import { useState } from 'react';
import { useUiStore, useCalendarStore } from '../../hooks';



export const CalendarPage = () => {

  const {events, setActiveEvent}=useCalendarStore()

  const { openDateModal} = useUiStore();

  const [lastView, setLastView] = useState(localStorage.getItem('lastView') || 'month');

	const eventStyleGetter = (event, start, end, isSelected) => {
		// console.log({ event, start, end, isSelected });

		const style = {
			backgroundColor: '#347CF7',
			borderRadius: '0px',
			opacity: 0.8,
			color: 'black',
		};

		return { style };
	};

	const onDoubleClick = ( event ) => {
    // console.log({ doubleClick: event });
    openDateModal();
	};
  const onSelect = (event) => {
    setActiveEvent(event)
	};

  const onViewChange = (event) => {
    localStorage.setItem('lastView', event)

  }

	return (
		<>
			<NavBar />
			<Calendar
				culture='es'
				localizer={localizer}
				events={events}
				defaultView={lastView}
				startAccessor='start'
				endAccessor='end'
				style={{ height: 'calc(100vh - 80px)' }}
				messages={getMessage()}
				eventPropGetter={eventStyleGetter}
				components={{
					event: CalendarEvent,
				}}
				onDoubleClickEvent={onDoubleClick}
				onSelectEvent={onSelect}
				onView={onViewChange}
			/>
			<CalendarModal />
			<FabAddNew />
			<FabDelete />
		</>
	);
};

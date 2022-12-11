import { useCalendarStore, useUiStore } from "../../hooks"

export const FabDelete = () => {


    const { startDeletetingEvent, hasEventSelected } = useCalendarStore();

  const handleDelete = () => {
    
    startDeletetingEvent(); 
   }
    

  return (
		<button
			className='btn btn-danger fab-delete'
			onClick={handleDelete}
			style={{ display: hasEventSelected?'': 'none' }}
		>
			<i className='fas fa-trash'></i>
		</button>
	);
}

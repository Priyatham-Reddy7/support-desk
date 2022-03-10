import {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import Spinner from '../Components/Spinner'
import BackButton from '../Components/BackButton'
import { getTickets } from '../features/tickets/ticketSlice'
import TicketItem from '../Components/TicketItem'

const Tickets = () => {
    const {tickets, isSuccess, isLoading, reset} = useSelector((state) => state.tickets)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getTickets())
    }, [dispatch])

    useEffect(() => {
        return () => {
            if(isSuccess){
                dispatch(reset())
            }
        }
    }, [dispatch, isSuccess])

    if(isLoading){
        return <Spinner />
    }

  return (
    <>
        <BackButton url='/' />
        <h1>Tickets</h1>
        <div className="tickets">
            <div className="ticket-headings">
                <div>Date</div>
                <div>Product</div>
                <div>Status</div>
                <div></div>
            </div>
            {tickets.map((ticket) => (
                <TicketItem key={ticket._id} ticket={ticket} />
            ))}
        </div>
    </>
  )
}

export default Tickets
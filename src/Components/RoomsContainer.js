import React from 'react'
import RoomsFilter from './RoomsFilter'
import RoomsList from './RoomsList'
import { withRoomConsumer } from '../Context'
import Loading from './Loading'

function RoomContainer({ context }) {
  const { loading, sorted, rooms } = context
  if (loading) {
    return <Loading />
  }
  return (
    <div>
      <RoomsFilter rooms={rooms} />
      <RoomsList rooms={sorted} />
    </div>
  )
}

export default withRoomConsumer(RoomContainer)

// import React from 'react'
// import RoomsFilter from './RoomsFilter'
// import RoomsList from './RoomsList'
// import { RoomConsumer } from '../Context'
// import Loading from './Loading'

// export default function RoomsContainer() {
//   return (
//     <RoomConsumer>
//       {(value) => {
//         const { loading, sortedRooms, rooms } = value
//         if (loading) {
//           return <Loading />
//         }
//         return (
//           <div>
//             hello from rooms container
//             <RoomsFilter rooms={rooms} />
//             <RoomsList rooms={sortedRooms} />
//           </div>
//         )
//       }}
//     </RoomConsumer>
//   )
// }

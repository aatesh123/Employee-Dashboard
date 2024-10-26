import React from 'react'
import Header from '../Extra/Header'

import CreateTask from '../Extra/CreateTask'
import AllTask from '../Extra/AllTask'

const AdminDashboard = () => {
  return (
    <div className='h-screen w-full p-7'>
        <Header />
        <CreateTask />
        <AllTask />
    </div>
  )
}

export default AdminDashboard

"use client"

import { useEffect, useState } from "react"

export default function AdminRequests() {

  const [requests,setRequests] = useState([])

  useEffect(()=>{

    fetch("/api/admin/requests")
      .then(res=>res.json())
      .then(setRequests)

  },[])

  return (

    <div className="p-10">

      <h1 className="text-3xl mb-10">
        Service Requests
      </h1>

      <div className="space-y-6">

        {requests.map((r:any)=>(

          <div
            key={r.id}
            className="border p-6 rounded-lg"
          >

            <h2>
              {r.name}
            </h2>

            <p>
              {r.email}
            </p>

            <p>
              {r.message}
            </p>

            <p>
              Service:
              {r.services?.title_en}
            </p>

          </div>

        ))}

      </div>

    </div>
  )
}
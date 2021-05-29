import React, { Fragment, useEffect } from 'react'
import { useSelector } from 'react-redux'
import Card from '../Cards/Card'

export default function Catalogue() {
    const { Users, Repositories } = useSelector((store) => store)

useEffect(() => {
}, [results])

    return (
     <Fragment>
         {Object.values(results)[0] !== undefined ? Object.values(results)[0].map(user => {
              return (
                  <Fragment>
                      <div>
                      <Card user={user} key={user.id}/>
                      </div>
                  </Fragment>
              )
          }) : null}
     </Fragment>
    )
}

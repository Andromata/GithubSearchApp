import React from 'react'

export default function RepositoriesCard({repos}) {
    return (
        <div className="repos-container">
            <div className="info">
                {repos.name}
            </div>
        </div>
    )
}

import React from 'react'
import ChitBoxTop from './ChitBoxTop'
import MainFeedChits from './MainFeedChits'

function MainFeed() {
    return (
        <div>
            <div className="h-12 text-2xl">
                <h1>Home</h1>
            </div>
            <ChitBoxTop />
            <MainFeedChits />
        </div>
    )
}

export default MainFeed

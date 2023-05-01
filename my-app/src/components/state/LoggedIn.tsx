import { useState } from "react"
import '../state/style.css'

export const LoggedIn = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(false)

    const handleLogIn = () => {
        setIsLoggedIn(true)
    }
    const handleLogOut = () => {
        setIsLoggedIn(false)
    }

  return (
    <div>
        <button className="logButton" onClick={handleLogIn}>Login</button>
        <button className="logButton" onClick={handleLogOut}>Log Out</button>
        <div>
            User is {
            isLoggedIn ?
            'logged in' :
            'logged out'
        }
        </div>
    </div>
    )
}


import { useState } from "react"

type AuthUser = {
    name: string;
    email: string
}

export const User = () => {

    const [user, setUser] = useState<AuthUser>({} as AuthUser)
    const handleLogIn = () => {
        setUser({
            name: 'Radu',
            email: 'email@yahoo.com'
        })
    }
    const handleLogOut = () => {
        setUser({} as AuthUser)
    }

  return (
    <div>
        <button onClick={handleLogIn}>Login</button>
        <button onClick={handleLogOut}>Log Out</button>
        <div>User name {user.name}</div>
        <div>User email {user.email}</div>
    </div>
  )
}

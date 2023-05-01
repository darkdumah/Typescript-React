import { type } from "os";

type GreetProps = {
    name: string;
    messageCount?: number;
    isLoggedIn: boolean;
}

export const Greet = (props: GreetProps) => {

  const {messageCount = 0} = props;
  return (
    <div>
        <h2>
        {
            props.isLoggedIn ? `Welcome ${props.name} you have ${messageCount} messages!!!` : `Welcome Guest, please loggin`
        }
        </h2>

    </div>
  )
}

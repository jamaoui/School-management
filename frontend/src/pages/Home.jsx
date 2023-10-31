import {useUserContext} from "../context/UserContext.jsx";

export default function Home() {
  const context = useUserContext()
  return <>
    <h1 className={'text-3xl'}>Hi from homepage</h1>
  </>
}

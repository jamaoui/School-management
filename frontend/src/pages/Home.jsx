import {useUserContext} from "../context/StudentContext.jsx";

export default function Home() {
  const context = useUserContext()
  return <>
    <h1 className={'text-3xl'}>Hi from homepage</h1>
  </>
}

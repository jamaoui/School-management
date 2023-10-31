import {Link, Outlet, useNavigate} from "react-router-dom";
import Logo from "../components/Logo.jsx";
import {LOGIN_ROUTE, STUDENT_DASHBOARD_ROUTE} from "../router/index.jsx";
import {useEffect} from "react";
import {useUserContext} from "../context/UserContext.jsx";

export default function GuestLayout() {
    const navigate = useNavigate()
    const context = useUserContext()

    useEffect(() => {
        if (context.authenticated) {
            navigate(STUDENT_DASHBOARD_ROUTE)
        }
    }, []);

    return <>
        <header>
            <div
                className="items-center justify-between flex bg-gray-800 bg-opacity-90 px-12 py-4 mb-4 mx-auto shadow-2xl">
                <div className="text-2xl text-white font-semibold inline-flex items-center">
                    <Logo/>
                </div>
                <div>
                    <ul className="flex text-white">
                        <li className="ml-5 px-2 py-1">
                            <Link to={'/'}>Home page</Link>
                        </li>
                        <li className="ml-5 px-2 py-1">
                            <Link to={LOGIN_ROUTE}>Login</Link>
                        </li>
                        <li className="ml-5 px-3 py-1 rounded font-semibold bg-gray-100 text-gray-800"><a href="">DARK
                            MODE</a></li>
                    </ul>
                </div>
            </div>
        </header>
        <main className={'container'}>
            <Outlet/>
        </main>
    </>
}

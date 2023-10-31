import {createContext, useContext, useState} from "react";
import StudentApi from "../services/Api/Student/StudentApi.js";
import {STUDENT_DASHBOARD_ROUTE} from "../router/index.jsx";
import {useNavigate} from "react-router-dom";

export const UserStateContext = createContext({
  user: {},
  authenticated: false,
  setUser: () => {
  },
  logout: () => {
  },
  login: (email, password) => {
  },
  setAuthenticated: () => {
  },
})
export default function UserContext({children}) {
  const [user, setUser] = useState({})
  const [authenticated, _setAuthenticated] = useState(window.localStorage.getItem('AUTHENTICATED'))

  const login = async (email, password) => {
    await StudentApi.getCsrfToken()
    return StudentApi.login(email, password)
  }
  const logout = () => {
    setUser({})
    _setAuthenticated(false)
  }

  const setAuthenticated = (isAuthenticated) => {
    _setAuthenticated(isAuthenticated)
    window.localStorage.setItem('AUTHENTICATED', isAuthenticated)
  }
  return <>
    <UserStateContext.Provider value={{
      user,
      login,
      logout,
      setUser,
      authenticated,
      setAuthenticated,
    }}>
      {children}
    </UserStateContext.Provider>
  </>
}
export const useUserContext = () => useContext(UserStateContext)

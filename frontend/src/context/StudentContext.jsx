import {createContext, useContext, useState} from "react";
import StudentApi from "../services/Api/Student/StudentApi.js";
import {STUDENT_DASHBOARD_ROUTE} from "../router/index.jsx";
import {useNavigate} from "react-router-dom";

export const StudentStateContext = createContext({
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
export default function StudentContext({children}) {
  const [user, setUser] = useState({})
  const [authenticated, _setAuthenticated] = useState('true' === window.localStorage.getItem('AUTHENTICATED'))

  const login = async (email, password) => {
    return StudentApi.login(email, password)
  }
  const logout = () => {
    setUser({})
    setAuthenticated(false)
  }

  const setAuthenticated = (isAuthenticated) => {
    _setAuthenticated(isAuthenticated)
    window.localStorage.setItem('AUTHENTICATED', isAuthenticated)
  }
  return <>
    <StudentStateContext.Provider value={{
      user,
      login,
      logout,
      setUser,
      authenticated,
      setAuthenticated,
    }}>
      {children}
    </StudentStateContext.Provider>
  </>
}
export const useUserContext = () => useContext(StudentStateContext)

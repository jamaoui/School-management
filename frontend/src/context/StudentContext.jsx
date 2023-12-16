import {createContext, useContext, useState} from "react";
import StudentApi from "../services/Api/Student/StudentApi.js";

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
  setToken: () => {
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

  const setToken = (token) => {
    window.localStorage.setItem('token', token)
  }

  return <>
    <StudentStateContext.Provider value={{
      user,
      login,
      logout,
      setUser,
      authenticated,
      setAuthenticated,
      setToken
    }}>
      {children}
    </StudentStateContext.Provider>
  </>
}
export const useUserContext = () => useContext(StudentStateContext)

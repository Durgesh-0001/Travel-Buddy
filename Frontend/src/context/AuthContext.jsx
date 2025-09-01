"use client"

import { createContext, useContext, useState, useEffect } from "react"
import api from '../utils/api'

const AuthContext = createContext()

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let didCancel = false;
    const checkAuth = async () => {
      setLoading(true)
      const token = localStorage.getItem('token')
      if (token) {
        try {
          const response = await api.get('/user/profile', {
            headers: { Authorization: `Bearer ${token}` }
          })
          if (!didCancel) setUser(response.data.user)
        } catch (err) {
          localStorage.removeItem('token')
          if (!didCancel) setUser(null)
        } finally {
          if (!didCancel) setLoading(false)
        }
      } else {
        if (!didCancel) setUser(null)
        if (!didCancel) setLoading(false)
      }
    }
    checkAuth()
    return () => { didCancel = true }
  }, [])

  const login = async (email, password) => {
    setLoading(true)
    try {
      const response = await api.post('/user/login', { email, password })
      localStorage.setItem('token', response.data.token)
      setUser(response.data.user)
      return { success: true }
    } catch (error) {
      return { success: false, error: "Invalid credentials" }
    } finally {
      setLoading(false)
    }
  }

  const signup = async (name, email, password) => {
    setLoading(true)
    try {
      const response = await api.post('/user/signup', { name, email, password })
      localStorage.setItem('token', response.data.token)
      setUser(response.data.user)
      return { success: true }
    } catch (error) {
      return {
        success: false,
        error: error.response?.data?.message || "Signup failed"
      }
    } finally {
      setLoading(false)
    }
  }

  const logout = async () => {
    try {
      const response = await api.get('/user/logout')
      if (response.status === 200) {
        setUser(null)
        localStorage.removeItem('token')
        return { success: true }
      } else {
        return { success: false }
      }
    } catch (err) {
      return {
        success: false,
        error: err.response?.data?.message || err.message
      }
    }
  }

  const updateProfile = async (updates, isMultipart = false) => {
    setLoading(true)
    try {
      let response;
      if (isMultipart) {
        response = await api.put('/user/update-profile', updates, {
          headers: { 'Content-Type': 'multipart/form-data' },
          withCredentials: true,
        })
      } else {
        response = await api.put('/user/update-profile', updates, {
          withCredentials: true,
        })
      }
      setUser(response.data.user)
      return { success: true }
    } catch (error) {
      return { success: false, error: "Profile update failed" }
    } finally {
      setLoading(false)
    }
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        login,
        signup,
        logout,
        updateProfile,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

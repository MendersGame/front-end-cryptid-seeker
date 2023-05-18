// npm modules
import { useEffect, useState } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'

// pages
import Signup from './pages/Signup/Signup'
import Login from './pages/Login/Login'
import Logout from './pages/Logout/Logout'
import Landing from './pages/Landing/Landing'
import Profiles from './pages/Profiles/Profiles'
import ChangePassword from './pages/ChangePassword/ChangePassword'
import SightingList from './pages/SightingList/SightingList'
import SightingDetails from './pages/SightingDetails/SightingDetails'
import NewSighting from './pages/NewSighting/NewSighting'
import EditSighting from './pages/EditSighting/EditSighting'
import CryptidList from './pages/CryptidList/CryptidList'
import CryptidDetails from './pages/CryptidDetails/CryptidDetails'

// components
import NavBar from './components/NavBar/NavBar'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'
import EditComment from './components/EditComment/EditComment'
import EditReview from './components/EditReview/EditReview'

// services
import * as authService from './services/authService'
import * as sightingService from './services/sightingService'
import * as cryptidService from './services/cryptidService'

// styles
import './App.css'

function App() {
  const [user, setUser] = useState(authService.getUser())
  const [sightings, setSightings] = useState([])
  const [cryptids, setCryptids] = useState([])
  const navigate = useNavigate()

  useEffect(() =>  {
    const fetchAllSightings = async () => {
      const data = await sightingService.index()
      setSightings(data)
    }
    if (user) fetchAllSightings()
  }, [user])

  useEffect(() =>  {
    const fetchAllCryptids = async () => {
      const data = await cryptidService.index()
      setCryptids(data)
    }
    if (user) fetchAllCryptids()
  }, [user])

  const handleLogout = () => {
    authService.logout()
    setUser(null)
  }
  const handleAuthEvt = () => {
    setUser(authService.getUser())
  }
  const handleAddSighting = async (sightingFormData) => {
    const newSighting = await sightingService.create(sightingFormData)
    setSightings([newSighting, ...sightings])
    navigate('/sightings')
  }

  const handleUpdateSighting = async (sightingFormData) => {
    const updatedSighting = await sightingService.update(sightingFormData)
    setSightings(sightings.map(s => sightingFormData._id === s._id ? updatedSighting : s))
    navigate('/sightings')
  }


  const handleDeleteSighting = async (SightingId) => {
    const deletedSighting = await sightingService.delete(SightingId)
    setSightings(sightings.filter(s => s._id !== deletedSighting._id))
    navigate('/sightings')
  }

  return (
    <>
      <NavBar user={user} handleLogout={handleLogout} />
      <Routes>
      <Route path="/" element={<Landing user={user} />} />
        <Route path="/cryptids"
          element={
            <CryptidList cryptids={cryptids} />
          }
        /> 
        <Route 
          path="/cryptids/:cryptidId"
          element={
            <ProtectedRoute user={user}>
              <CryptidDetails user={user} cryptids={cryptids}/>
            </ProtectedRoute>
          }
        />
        <Route 
          path="/cryptids/:cryptidId/reviews/:reviewId" element={
            <ProtectedRoute user={user}>
              <EditReview />
            </ProtectedRoute>
          } 
        />
        <Route path="/sightings" element={
            <SightingList sightings={sightings} cryptids={cryptids} />
          }
        />
        <Route 
          path="/sightings/:sightingId"
          element={
            <ProtectedRoute user={user}>
              <SightingDetails 
                user={user} 
                handleDeleteSighting={handleDeleteSighting}
              />
            </ProtectedRoute>
          }
        />
        <Route
          path="/sightings/new" 
          element={
            <ProtectedRoute user={user}>
              <NewSighting handleAddSighting={handleAddSighting} cryptids={cryptids} />
            </ProtectedRoute>
          }
        />
        <Route 
          path="/sightings/:sightingId/edit" 
          element={
            <ProtectedRoute user={user}>
              <EditSighting handleUpdateSighting={handleUpdateSighting} cryptids={cryptids} />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/sightings/:sightingId/comments/:commentId" element={
            <ProtectedRoute user={user}>
              <EditComment />
            </ProtectedRoute>
          } 
        />
        <Route
          path="/profiles"
          element={
            <ProtectedRoute user={user}>
              <Profiles />
            </ProtectedRoute>
          }
        />
        <Route path="/auth/logout" element={<Logout />} />
        <Route
          path="/auth/signup"
          element={<Signup handleAuthEvt={handleAuthEvt} />}
        />
        <Route
          path="/auth/login"
          element={<Login handleAuthEvt={handleAuthEvt} />}
        />
        <Route
          path="/auth/change-password"
          element={
            <ProtectedRoute user={user}>
              <ChangePassword handleAuthEvt={handleAuthEvt} />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  )
}

export default App

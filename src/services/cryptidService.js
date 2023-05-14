// services
import * as tokenService from './tokenService'

const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/api/cryptids`

// ALL REQUESTS IN THIS FILE WILL BEGIN WITH:
// http://localhost:3001/api/cryptids

async function index() {
  try {
    const res = await fetch(BASE_URL, {
      headers: { 'Authorization': `Bearer ${tokenService.getToken()}` }
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

async function show(cryptidId) {
  try {
    const res = await fetch(`${BASE_URL}/${cryptidId}`, {
      headers: { 'Authorization': `Bearer ${tokenService.getToken()}` }
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

async function create(sightingFormData) {
  try {
    // BASE_URL IS POST http://localhost:3001/api/cryptids
    const res = await fetch(BASE_URL, {
      method: 'POST',
      headers: { 
        'Authorization': `Bearer ${tokenService.getToken()}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(sightingFormData)
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

async function update(sightingFormData) {
  try {
    const res = await fetch(`${BASE_URL}/${sightingFormData._id}`, {
      method: 'PUT',
      headers: { 
        'Authorization': `Bearer ${tokenService.getToken()}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(sightingFormData)
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

async function deleteCryptid(cryptidId) {
  try {
    const res = await fetch(`${BASE_URL}/${cryptidId}`, {
      method: 'DELETE',
      headers: { 'Authorization': `Bearer ${tokenService.getToken()}` }
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

async function createComment(cryptidId, commentFormData) {
  try {
    // POST http://localhost:3001/api/cryptids/:cryptidId/comments
    const res = await fetch(`${BASE_URL}/${cryptidId}/comments`, {
      method: 'POST',
      headers: { 
        'Authorization': `Bearer ${tokenService.getToken()}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(commentFormData)
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

export { 
  index, 
  show, 
  create, 
  update,
  deleteCryptid as delete,
  createComment
}
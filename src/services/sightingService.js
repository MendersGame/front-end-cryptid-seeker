// services
import * as tokenService from './tokenService'

const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/api/sightings`

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

async function show(sightingId) {
  try {
    const res = await fetch(`${BASE_URL}/${sightingId}`, {
      headers: { 'Authorization': `Bearer ${tokenService.getToken()}` }
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

async function create(sightingFormData) {
  try {
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

async function deleteSighting(sightingId) {
  try {
    const res = await fetch(`${BASE_URL}/${sightingId}`, {
      method: 'DELETE',
      headers: { 'Authorization': `Bearer ${tokenService.getToken()}` }
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

async function createComment(sightingId, commentFormData) {
  try {
    const res = await fetch(`${BASE_URL}/${sightingId}/comments`, {
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

async function updateComment(sightingId, commentId, commentFormData) {
  try {
    const res = await fetch(`${BASE_URL}/${sightingId}/comments/${commentId}`, {
      method: 'PUT',
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

async function deleteComment(sightingId, commentId)  {
  try {
    const res = await fetch(`${BASE_URL}/${sightingId}/comments/${commentId}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`
      }
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
  deleteSighting as delete,
  createComment,
  updateComment,
  deleteComment,
}
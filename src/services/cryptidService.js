// services
import * as tokenService from './tokenService'

const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/api/cryptids`

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

async function create(cryptidFormData) {
  try {
    const res = await fetch(BASE_URL, {
      method: 'POST',
      headers: { 
        'Authorization': `Bearer ${tokenService.getToken()}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(cryptidFormData)
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

async function update(cryptidFormData) {
  try {
    const res = await fetch(`${BASE_URL}/${cryptidFormData._id}`, {
      method: 'PUT',
      headers: { 
        'Authorization': `Bearer ${tokenService.getToken()}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(cryptidFormData)
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

async function createReview(cryptidId, reviewFormData) {
  try {
    const res = await fetch(`${BASE_URL}/${cryptidId}/reviews`, {
      method: 'POST',
      headers: { 
        'Authorization': `Bearer ${tokenService.getToken()}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(reviewFormData)
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

const updateReview = async (cryptidId, reviewId, reviewFormData) => {
  try {
    const res = await fetch(`${BASE_URL}/${cryptidId}/reviews/${reviewId}`, {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(reviewFormData)
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

const deleteReview = async (cryptidId, reviewId) => {
  try {
    const res = await fetch(`${BASE_URL}/${cryptidId}/reviews/${reviewId}`, {
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
  deleteCryptid as delete,
  createReview,
  updateReview,
  deleteReview,
}
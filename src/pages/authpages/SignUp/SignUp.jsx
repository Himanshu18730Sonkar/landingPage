import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Traveller from '../../../assets/traveller.webp' 

const SignUp = () => {
  const [form, setForm] = useState({ name: '', email: '', password: '', confirmPassword: '', agree: false })
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setForm((s) => ({ ...s, [name]: type === 'checkbox' ? checked : value }))
    setError('')
    setSuccess('')
  }

  const validate = () => {
    if (!form.name.trim()) return 'Please enter your name.'
    if (!form.email.includes('@')) return 'Please enter a valid email.'
    if (form.password.length < 8) return 'Password should be at least 8 characters.'
    if (form.password !== form.confirmPassword) return 'Passwords do not match.'
    if (!form.agree) return 'You must agree to the Terms.'
    return ''
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const v = validate()
    if (v) return setError(v)
    // Submit logic here — replace with real API call
    console.log('Signing up', { name: form.name, email: form.email })
    setSuccess('Account created! Check your email to verify.')
    setForm({ name: '', email: '', password: '', confirmPassword: '', agree: false })
  }

  const isValid = form.name && form.email.includes('@') && form.password.length >= 8 && form.password === form.confirmPassword && form.agree

  return (
    <main className="min-h-screen bg-gray-50 flex items-center py-12">
      <div className="max-w-7xl mx-auto w-full px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Form card */}
          <div className="bg-white rounded-2xl shadow-lg p-8 sm:p-10">
            <div className="mb-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white">
                  {/* simple emblem */}
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                    <path d="M12 2L2 7l10 5 10-5-10-5z" fill="currentColor" />
                  </svg>
                </div>
                <h1 className="text-2xl font-extrabold text-gray-900">Create your account</h1>
              </div>
              <p className="mt-3 text-sm text-gray-500">Join BrandName and start exploring the world.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {error && <div className="text-sm text-red-600" role="alert">{error}</div>}
              {success && <div className="text-sm text-green-600" role="status">{success}</div>}

              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full name</label>
                <input
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full rounded-md border-0 py-2 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email address</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full rounded-md border-0 py-2 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    value={form.password}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full rounded-md border-0 py-2 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm"
                  />
                </div>

                <div>
                  <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">Confirm</label>
                  <input
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    value={form.confirmPassword}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full rounded-md border-0 py-2 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm"
                  />
                </div>
              </div>

              <div className="flex items-center gap-2">
                <input id="agree" name="agree" type="checkbox" checked={form.agree} onChange={handleChange} className="h-4 w-4 text-blue-600 focus:ring-blue-500 rounded" />
                <label htmlFor="agree" className="text-sm text-gray-600">I agree to the <a href="#" className="text-blue-600 underline">Terms</a> and <a href="#" className="text-blue-600 underline">Privacy Policy</a>.</label>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
                <button type="submit" className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-2 rounded-md text-white bg-blue-600 hover:bg-blue-500 transition-colors">Create account</button>
              </div> 

              <p className="text-xs text-gray-500 text-center">Already have an account? <Link to="/login" className="text-blue-600 underline">Sign in</Link></p>
            </form>
          </div>

          {/* Illustration */}
          <div className="flex justify-center lg:justify-end">
            <div className="max-w-md w-full">
              <img src={Traveller} alt="traveller" className="w-full h-auto rounded-xl shadow-lg" loading="lazy" />
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default SignUp

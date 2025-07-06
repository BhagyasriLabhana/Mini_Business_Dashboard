import React, { Component } from 'react'

class BusinessForm extends Component {
  render() {
    const { name, location, onChange, onSubmit } = this.props
    return (
      <form onSubmit={onSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          value={name}
          onChange={onChange}
          placeholder="Business Name"
          className="w-full px-4 py-2 border rounded-lg"
          required
        />
        <input
          type="text"
          name="location"
          value={location}
          onChange={onChange}
          placeholder="Location"
          className="w-full px-4 py-2 border rounded-lg"
          required
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Submit
        </button>
      </form>
    )
  }
}

export default BusinessForm

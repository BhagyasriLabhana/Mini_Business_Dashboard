import React, { Component } from 'react'

class BusinessCard extends Component {
  render() {
    const { data, onRegenerate } = this.props
    return (
      <div className="mt-6 bg-gray-50 p-4 rounded-lg shadow-inner">
        <p className="text-lg font-medium">⭐ Rating: {data.rating}</p>
        <p className="text-md">📣 {data.reviews} Reviews</p>
        <p className="mt-4 text-gray-700 italic">"{data.headline}"</p>
        <button
          onClick={onRegenerate}
          className="mt-4 w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600"
        >
          Regenerate SEO Headline
        </button>
      </div>
    )
  }
}

export default BusinessCard

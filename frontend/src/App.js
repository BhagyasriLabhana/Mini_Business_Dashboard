import React, { Component } from 'react'
import axios from 'axios'
import BusinessForm from './BusinessForm'
import BusinessCard from './BusinessCard'

class App extends Component {
  state = {
    name: '',
    location: '',
    data: null,
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  handleSubmit = async (event) => {
    event.preventDefault()
    const { name, location } = this.state
    const response = await axios.post('http://localhost:5000/business-data', {
      name,
      location,
    })
    this.setState({ data: response.data })
  }

  regenerateHeadline = async () => {
    const { name, location } = this.state
    const res = await axios.get(
      `http://localhost:5000/regenerate-headline?name=${name}&location=${location}`
    )
    this.setState((prev) => ({
      data: { ...prev.data, headline: res.data.headline },
    }))
  }

  render() {
    const { name, location, data } = this.state

    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
        <div className="flex flex-col lg:flex-row gap-8 w-full max-w-5xl">
          {/* Left: Form */}
          <div className="bg-white w-full lg:w-1/2 rounded-2xl shadow-xl p-6">
            <h1 className="text-2xl font-bold text-center mb-4"> Business Dashboard</h1>
            <BusinessForm
              name={name}
              location={location}
              onChange={this.handleChange}
              onSubmit={this.handleSubmit}
            />
          </div>

          {/* Right: Card */}
          {data && (
            <div className="bg-white w-full lg:w-1/2 rounded-2xl shadow-xl p-6">
              <BusinessCard data={data} onRegenerate={this.regenerateHeadline} />
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default App

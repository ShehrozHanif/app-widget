// "use client"

// import { useState, useEffect } from 'react'
// import { Search, Loader2 } from 'lucide-react'
// import { Input } from "@/components/ui/input"
// import { Button } from "@/components/ui/button"
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

// const pakistaniCities = [
//   'Karachi', 'Lahore', 'Islamabad', 'Rawalpindi', 'Faisalabad', 'Multan', 'Peshawar', 'Quetta', 'Sialkot', 'Gujranwala'
// ]

// const weatherConditions = [
//   { icon: '☀️', description: 'Sunny' },
//   { icon: '⛅', description: 'Partly Cloudy' },
//   { icon: '☁️', description: 'Cloudy' },
//   { icon: '🌧️', description: 'Rainy' },
//   { icon: '⛈️', description: 'Thunderstorm' },
//   { icon: '🌫️', description: 'Foggy' }
// ]

// // Define interface for the weather data
// interface WeatherData {
//   name: string
//   main: {
//     temp: number
//     humidity: number
//   }
//   weather: {
//     icon: string
//     description: string
//   }[]
//   wind: {
//     speed: number
//   }
// }

// // Explicitly type the 'city' parameter as a string
// function getRandomWeather(city: string): WeatherData {
//   const temperature = Math.floor(Math.random() * 35) + 5
//   const condition = weatherConditions[Math.floor(Math.random() * weatherConditions.length)]
//   const humidity = Math.floor(Math.random() * 60) + 40
//   const windSpeed = Math.floor(Math.random() * 20) + 1

//   return {
//     name: city,
//     main: { temp: temperature, humidity },
//     weather: [{ icon: condition.icon, description: condition.description }],
//     wind: { speed: windSpeed }
//   }
// }

// export default function RandomWeatherWidget() {
//   const [city, setCity] = useState<string>('Islamabad')
//   const [weather, setWeather] = useState<WeatherData | null>(null) // Update type for weather state
//   const [loading, setLoading] = useState<boolean>(false)
//   const [error, setError] = useState<string | null>(null) // Handle error as string

//   useEffect(() => {
//     fetchWeather()
//   }, [])

//   const fetchWeather = async () => {
//     setLoading(true)
//     setError(null)
//     try {
//       // Simulate API delay
//       await new Promise(resolve => setTimeout(resolve, 1000))
      
//       if (!pakistaniCities.includes(city)) {
//         throw new Error('City not found in Pakistan')
//       }
      
//       const data = getRandomWeather(city)
//       setWeather(data)
//     } catch (err) {
//       setError((err as Error).message) // Explicitly type err as Error
//     } finally {
//       setLoading(false)
//     }
//   }

//   // Type the 'e' parameter as a form event
//   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault()
//     fetchWeather()
//   }

//   return (
//     <div>

//         {/* Top */}
//         <div className="text-center bg-yellow-100 w-full py-4">
//         <h1 className="text-xl font-bold">Note:</h1>
//         <p className='text-red-600'>We don't use an API to generate Weather</p>
//         </div>

//         {/* Card  */}

//         <div>
//         <Card className="w-full max-w-md mx-auto overflow-hidden mt-10">
//       <CardHeader className="bg-gradient-to-r from-green-400 to-blue-500 text-white">
//         <CardTitle className="text-2xl font-bold">Pakistan Weather (Simulated)</CardTitle>
//       </CardHeader>
//       <CardContent className="p-6">
//         <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
//           <Input
//             type="text"
//             value={city}
//             onChange={(e) => setCity(e.target.value)}
//             placeholder="Enter a city in Pakistan"
//             className="flex-grow"
//           />
//           <Button type="submit" className="bg-blue-500 hover:bg-blue-600">
//             <Search className="w-4 h-4 mr-2" />
//             Search
//           </Button>
//         </form>

//         {loading && (
//           <div className="flex justify-center items-center h-40">
//             <Loader2 className="w-8 h-8 animate-spin text-blue-500" />
//           </div>
//         )}

//         {error && (
//           <div className="text-red-500 text-center">{error}</div>
//         )}

//         {weather && !loading && !error && (
//           <div className="text-center">
//             <h2 className="text-3xl font-bold mb-2">{weather.name}</h2>
//             <div className="text-6xl font-bold mb-4 animate-pulse">
//               {weather.weather[0].icon}
//             </div>
//             <p className="text-4xl font-semibold mb-2">{Math.round(weather.main.temp)}°C</p>
//             <p className="text-xl capitalize">{weather.weather[0].description}</p>
//             <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
//               <div>
//                 <p className="font-semibold">Humidity</p>
//                 <p>{weather.main.humidity}%</p>
//               </div>
//               <div>
//                 <p className="font-semibold">Wind Speed</p>
//                 <p>{weather.wind.speed} m/s</p>
//               </div>
//             </div>
//           </div>
//         )}
//       </CardContent>
//     </Card>
//     </div>
//     </div>
//   )
// }


// "use client"

// import { useState, useEffect } from 'react'
// import { Search, Loader2 } from 'lucide-react'
// import { Input } from "@/components/ui/input"
// import { Button } from "@/components/ui/button"
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
// import { Select, SelectItem, SelectTrigger, SelectContent } from "@/components/ui/select" // Example component import for Select

// const pakistaniCities = [
//   'Karachi', 'Lahore', 'Islamabad', 'Rawalpindi', 'Faisalabad', 'Multan', 'Peshawar', 'Quetta', 'Sialkot', 'Gujranwala'
// ]

// const weatherConditions = [
//   { icon: '☀️', description: 'Sunny' },
//   { icon: '⛅', description: 'Partly Cloudy' },
//   { icon: '☁️', description: 'Cloudy' },
//   { icon: '🌧️', description: 'Rainy' },
//   { icon: '⛈️', description: 'Thunderstorm' },
//   { icon: '🌫️', description: 'Foggy' }
// ]

// // Define interface for the weather data
// interface WeatherData {
//   name: string
//   main: {
//     temp: number
//     humidity: number
//   }
//   weather: {
//     icon: string
//     description: string
//   }[]
//   wind: {
//     speed: number
//   }
// }

// // Explicitly type the 'city' parameter as a string
// function getRandomWeather(city: string): WeatherData {
//   const temperature = Math.floor(Math.random() * 35) + 5
//   const condition = weatherConditions[Math.floor(Math.random() * weatherConditions.length)]
//   const humidity = Math.floor(Math.random() * 60) + 40
//   const windSpeed = Math.floor(Math.random() * 20) + 1

//   return {
//     name: city,
//     main: { temp: temperature, humidity },
//     weather: [{ icon: condition.icon, description: condition.description }],
//     wind: { speed: windSpeed }
//   }
// }

// export default function RandomWeatherWidget() {
//   const [city, setCity] = useState<string>('Islamabad')
//   const [weather, setWeather] = useState<WeatherData | null>(null)
//   const [loading, setLoading] = useState<boolean>(false)
//   const [error, setError] = useState<string | null>(null)

//   useEffect(() => {
//     fetchWeather()
//   }, [])

//   const fetchWeather = async () => {
//     setLoading(true)
//     setError(null)
//     try {
//       await new Promise(resolve => setTimeout(resolve, 1000))

//       if (!pakistaniCities.includes(city)) {
//         throw new Error('City not found in Pakistan')
//       }

//       const data = getRandomWeather(city)
//       setWeather(data)
//     } catch (err) {
//       setError((err as Error).message)
//     } finally {
//       setLoading(false)
//     }
//   }

//   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault()
//     fetchWeather()
//   }

//   const handleCityChange = (selectedCity: string) => {
//     setCity(selectedCity)
//     fetchWeather()
//   }

//   return (
//     <div>

//       {/* Top Section */}
//       <div className="text-center bg-yellow-100 w-full py-4">
//         <h1 className="text-xl font-bold">Note:</h1>
//         <p className="text-red-600">We don't use an API to generate Weather</p>
//       </div>

//       {/* Weather Card */}
//       <div>
//         <Card className="w-full max-w-md mx-auto overflow-hidden mt-10">
//           <CardHeader className="bg-gradient-to-r from-green-400 to-blue-500 text-white">
//             <CardTitle className="text-2xl font-bold">Pakistan Weather (Simulated)</CardTitle>
//           </CardHeader>
//           <CardContent className="p-6">

//             {/* Search Form */}
//             <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
//               <Input
//                 type="text"
//                 value={city}
//                 onChange={(e) => setCity(e.target.value)}
//                 placeholder="Enter a city in Pakistan"
//                 className="flex-grow"
//               />
//               <Button type="submit" className="bg-blue-500 hover:bg-blue-600">
//                 <Search className="w-4 h-4 mr-2" />
//                 Search
//               </Button>
//             </form>

//             {/* Dropdown for Cities */}
//             <div className="mb-4">
//               <label className="block mb-2 text-sm font-medium text-gray-700">Select a City</label>
//               <select
//                 className="w-full p-2 border border-gray-300 rounded-md"
//                 value={city}
//                 onChange={(e) => handleCityChange(e.target.value)}
//               >
//                 {pakistaniCities.map((city) => (
//                   <option key={city} value={city}>
//                     {city}
//                   </option>
//                 ))}
//               </select>
//             </div>

//             {loading && (
//               <div className="flex justify-center items-center h-40">
//                 <Loader2 className="w-8 h-8 animate-spin text-blue-500" />
//               </div>
//             )}

//             {error && (
//               <div className="text-red-500 text-center">{error}</div>
//             )}

//             {weather && !loading && !error && (
//               <div className="text-center">
//                 <h2 className="text-3xl font-bold mb-2">{weather.name}</h2>
//                 <div className="text-6xl font-bold mb-4 animate-pulse">
//                   {weather.weather[0].icon}
//                 </div>
//                 <p className="text-4xl font-semibold mb-2">{Math.round(weather.main.temp)}°C</p>
//                 <p className="text-xl capitalize">{weather.weather[0].description}</p>
//                 <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
//                   <div>
//                     <p className="font-semibold">Humidity</p>
//                     <p>{weather.main.humidity}%</p>
//                   </div>
//                   <div>
//                     <p className="font-semibold">Wind Speed</p>
//                     <p>{weather.wind.speed} m/s</p>
//                   </div>
//                 </div>
//               </div>
//             )}
//           </CardContent>
//         </Card>
//       </div>
//     </div>
//   )
// }


"use client"

import { useState, useEffect } from 'react'
import { Search, Loader2 } from 'lucide-react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const pakistaniCities = [
  'Karachi', 'Lahore', 'Islamabad', 'Rawalpindi', 'Faisalabad', 'Multan', 'Peshawar', 'Quetta', 'Sialkot', 'Gujranwala'
]

const weatherConditions = [
  { icon: '☀️', description: 'Sunny' },
  { icon: '⛅', description: 'Partly Cloudy' },
  { icon: '☁️', description: 'Cloudy' },
  { icon: '🌧️', description: 'Rainy' },
  { icon: '⛈️', description: 'Thunderstorm' },
  { icon: '🌫️', description: 'Foggy' }
]

interface WeatherData {
  name: string
  main: {
    temp: number
    humidity: number
  }
  weather: {
    icon: string
    description: string
  }[]
  wind: {
    speed: number
  }
}

function getRandomWeather(city: string): WeatherData {
  const temperature = Math.floor(Math.random() * 35) + 5
  const condition = weatherConditions[Math.floor(Math.random() * weatherConditions.length)]
  const humidity = Math.floor(Math.random() * 60) + 40
  const windSpeed = Math.floor(Math.random() * 20) + 1

  return {
    name: city,
    main: { temp: temperature, humidity },
    weather: [{ icon: condition.icon, description: condition.description }],
    wind: { speed: windSpeed }
  }
}

export default function RandomWeatherWidget() {
  const [city, setCity] = useState<string>('Islamabad')
  const [weather, setWeather] = useState<WeatherData | null>(null)
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetchWeather()
  }, [city]) // Added fetchWeather to the dependency array

  const fetchWeather = async () => {
    setLoading(true)
    setError(null)
    try {
      await new Promise(resolve => setTimeout(resolve, 1000))

      if (!pakistaniCities.includes(city)) {
        throw new Error('City not found in Pakistan')
      }

      const data = getRandomWeather(city)
      setWeather(data)
    } catch (err) {
      setError((err as Error).message)
    } finally {
      setLoading(false)
    }
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    fetchWeather()
  }

  const handleCityChange = (selectedCity: string) => {
    setCity(selectedCity)
  }

  return (
    <div>

      {/* Top Section */}
      <div className="text-center bg-yellow-100 w-full py-4">
        <h1 className="text-xl font-bold">Note:</h1>
        <p className="text-red-600">We don&apos;t use an API to generate Weather</p>
      </div>

      {/* Weather Card */}
      <div>
        <Card className="w-full max-w-md mx-auto overflow-hidden mt-10">
          <CardHeader className="bg-gradient-to-r from-green-400 to-blue-500 text-white">
            <CardTitle className="text-2xl font-bold">Pakistan Weather (Simulated)</CardTitle>
          </CardHeader>
          <CardContent className="p-6">

            {/* Search Form */}
            <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
              <Input
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="Enter a city in Pakistan"
                className="flex-grow"
              />
              <Button type="submit" className="bg-blue-500 hover:bg-blue-600">
                <Search className="w-4 h-4 mr-2" />
                Search
              </Button>
            </form>

            {/* Dropdown for Cities */}
            <div className="mb-4">
              <label className="block mb-2 text-sm font-medium text-gray-700">Select a City</label>
              <select
                className="w-full p-2 border border-gray-300 rounded-md"
                value={city}
                onChange={(e) => handleCityChange(e.target.value)}
              >
                {pakistaniCities.map((city) => (
                  <option key={city} value={city}>
                    {city}
                  </option>
                ))}
              </select>
            </div>

            {loading && (
              <div className="flex justify-center items-center h-40">
                <Loader2 className="w-8 h-8 animate-spin text-blue-500" />
              </div>
            )}

            {error && (
              <div className="text-red-500 text-center">{error}</div>
            )}

            {weather && !loading && !error && (
              <div className="text-center">
                <h2 className="text-3xl font-bold mb-2">{weather.name}</h2>
                <div className="text-6xl font-bold mb-4 animate-pulse">
                  {weather.weather[0].icon}
                </div>
                <p className="text-4xl font-semibold mb-2">{Math.round(weather.main.temp)}°C</p>
                <p className="text-xl capitalize">{weather.weather[0].description}</p>
                <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="font-semibold">Humidity</p>
                    <p>{weather.main.humidity}%</p>
                  </div>
                  <div>
                    <p className="font-semibold">Wind Speed</p>
                    <p>{weather.wind.speed} m/s</p>
                  </div>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

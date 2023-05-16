import { useEffect, useState } from "react";

const useFetch = (url) => {

  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    fetch(url)
    .then(response => response.json())
    .then(data => {
      /*Esto no debería ir aquí dentro, para que el fetch sea reutilizable */
      const dataFormatted = data.map(person => {
        return {
          id: person.id,
          name: person.name,
          mail: person.email,
          phone: person.phone
        }
      })
      .slice(0, 5)

      setData(dataFormatted)
      setLoading(false)
    })
    .catch(() => setError(true))
  }, [url])

  return [data, setData, loading, error]
}

export default useFetch
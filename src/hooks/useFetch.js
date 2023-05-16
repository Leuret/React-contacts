import { useEffect, useState } from "react";

const useFetch = (url) => {

  const [contacts, setContacts] = useState([])

  useEffect(() => {
    fetch(url)
    .then(response => response.json())
    .then(data => {
      const dataFormatted = data.map(person => {
        return {
          id: person.id,
          name: person.name,
          mail: person.email,
          phone: person.phone
        }
      })
      .slice(0, 5)

      setContacts(dataFormatted)
    })
  }, [url])

  return [contacts, setContacts]
}

export default useFetch
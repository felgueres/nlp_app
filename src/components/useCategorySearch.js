import { useEffect, useState } from 'react'

export default function useCategorySearch(categoryId) {
  const [companies, setCompanies] = useState([]);
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    async function fetchAPI() {
      const apiUrl = process.env.REACT_APP_API_URL;
      setLoading(true)
      try {
        let response = await fetch(`${apiUrl}/api/categories/${categoryId}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ categoryId })
        })
        response = await response.json()
        setCompanies(response.companies)
        setLoading(false)
      } catch (error) {
      }
    }
    fetchAPI()
  }, [categoryId])

  return { companies, loading}
}

import { useEffect, useContext } from "react"
import { ConnectCatContext } from "../../context/ConnectCatContext"
import { blackA, violet } from "@radix-ui/colors"

export function ConnectCat() {
  const { catContador, setCatContador, catImage, setCatImage } = useContext(ConnectCatContext)

  useEffect(() => {
    const fetchCatImage = async () => {
      const response = await fetch('https://api.thecatapi.com/v1/images/search')
      const data = await response.json()
      setCatImage(data[0])
    }
    fetchCatImage()
    console.log(catImage)
  }, [catContador])

  function handleShowCat() {
    setCatContador(catContador + 1)
    console.log('mudou')
  }

  return (
    <>
      <button onClick={handleShowCat} style={{ marginBottom: '10px', color: `${violet.violet9}`, boxShadow: `0 2px 10px ${blackA.blackA9}` }}>
        Mostrar novo gatinho
      </button>
      <img
        src={catImage.url}
        height="220px"
        width="220px"
        style={{ display: 'flex', alignSelf: 'center' }}
      />
    </>
  )
}

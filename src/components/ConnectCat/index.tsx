import { useContext, useEffect } from 'react'
import { ConnectCatContext } from '../../context/ConnectCatContext'
import { ButtonText, CatImg } from './styles';

interface CatProps {
  catContador: number
  setCatContador: (catContador: number) => void
  catImage: object
  setCatImage: (catImage: object) => void
}

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
      <ButtonText onClick={handleShowCat}>
        Mostrar novo gatinho
      </ButtonText>
      <CatImg
        src={catImage.url}
        height="220px"
        width="220px"
      />
    </>
  )
}

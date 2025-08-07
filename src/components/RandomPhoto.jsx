const RandomPhoto = ({height}) => {

  const photos = [
    "src/images/photos/3b463b1a-4423-408c-90be-74f51793d007.JPG",
    "src/images/photos/9fad2f8c-1123-4229-8d01-9a844e96b314.JPG",
    "src/images/photos/3381d184-de2e-468c-a854-c2e035f65bfc.JPG",
    "src/images/photos/bee2e6e7-8759-4720-bba1-54222f0e48d4.JPG",
    "src/images/photos/IMG_7164.jpg",
    "src/images/photos/IMG_7173.jpg",
    "src/images/photos/IMG_7187.jpg",
    "src/images/photos/IMG_7188.jpg",
    "src/images/photos/IMG_7205_2.jpg",
    "src/images/photos/IMG_7219.jpg",
    "src/images/photos/IMG_7236.jpg",
    "src/images/photos/IMG_7237.jpg",
    "src/images/photos/IMG_7238.jpg",
    "src/images/photos/IMG_7246.jpg",
    "src/images/photos/IMG_7272.jpg",
    "src/images/photos/IMG_7275_2.jpg",
    "src/images/photos/IMG_7277.jpg",
    "src/images/photos/IMG_7283.jpg",
    "src/images/photos/IMG_7292.jpg",
    "src/images/photos/IMG_7302.jpg",
    "src/images/photos/IMG_7303.jpg",
    "src/images/photos/IMG_7339.jpg",
    "src/images/photos/IMG_7383.jpg"
  ]

  const getPhoto = () => {

    const randIndex = Math.floor(Math.random() * photos.length);
    return photos[randIndex];

  }
  return (
    <img src={getPhoto()} className={` `}></img>
  )
  
}

export default RandomPhoto;
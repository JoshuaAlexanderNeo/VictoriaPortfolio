import ProjectAccordian from "../ProjectAccordian"
import { ImageList, ImageListItem } from "@mui/material"

const AccordianOrGrid = ({ width, imageList }) => {
    console.log(imageList)
    if (width <= 1200) {
        return (<ProjectAccordian imageList={imageList}/>)
    } else {
        return (
            <ImageList sx={{ width: 1130, height: 600 }} cols={1} >
            {imageList.map((item) => (
              <ImageListItem key={item.img}>
                <img
                  src={`${item.img.src}?w=164&h=164&fit=crop&auto=format`}
                  srcSet={`${item.img.src}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                  alt={item.title}
                  loading="lazy"
                />
              </ImageListItem>
            ))}
          </ImageList>
        )
    }
}

export default AccordianOrGrid;
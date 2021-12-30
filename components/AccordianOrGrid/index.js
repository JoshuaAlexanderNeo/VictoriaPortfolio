import ProjectAccordian from "../ProjectAccordian"
import { ImageList, ImageListItem, Divider, Paper } from "@mui/material"
import Image from "next/image"
import { v4 as uuidv4 } from 'uuid';

const AccordianOrGrid = ({ width, imageList }) => {
    if (width <= 1200) {
        return (<ProjectAccordian imageList={imageList}/>)
    } else {
        return (
          <Paper >
            <ImageList sx={{ width: 1130, height: 600 }} cols={1} >
            {imageList.map((item) => (
              <ImageListItem key={uuidv4()}>
                <Divider />
                <div style={{ height: "600px"}}>
                <Image layout='fill' objectFit='contain'
                  src={`${item.img.src}?w=164&h=164&fit=crop&auto=format`}
                  srcSet={`${item.img.src}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                  alt={item.title}
                  loading="lazy"
                />
              </div>
              </ImageListItem>
            ))}
          </ImageList>
          </Paper>
        )
    }
}

export default AccordianOrGrid;
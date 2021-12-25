import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Image from 'next/image';


const ProjectAccordian = ({ imageList }) => {

    return (
        <Accordion style={{paddingTop: "10px", paddingBottom: "10px"}}>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
            >
                <Typography variant="h5" >See More Images</Typography>
            </AccordionSummary>
            <AccordionDetails>
                {imageList.map((image, index) => {
                    return (
                        <Image src={image} key={index} alt="A render of a building" quality={100} objectFit='cover' placeholder="blur"/>
                    )
                })}
            </AccordionDetails>
        </Accordion>
    )
}

export default ProjectAccordian;
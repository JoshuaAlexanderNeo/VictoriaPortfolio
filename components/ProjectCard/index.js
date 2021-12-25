import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Box } from '@mui/material';
import Image from "next/image";


const ProjectCard = ({ title, subtitle, image, alt, link }) => {

    return (
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
        >
            <Card sx={{ maxWidth: 345, mt: 15 }}>
                <CardActionArea>
                    <CardMedia title={title}
                    >
                        <div style={{ position: 'relative', width: '100%', height: '100%' }}>
                            <Image src={image} alt="A render of a building" width={345} height={195} />
                        </div>
                    </CardMedia>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {subtitle}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Box>

    )
}

export default ProjectCard;
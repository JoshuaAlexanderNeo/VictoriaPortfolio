import * as React from 'react';
import { Drawer, ListItemText, Box, List, ListItem } from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/router';
import isCurrentPage from '../Utils';

const LeftDrawer = ({visible, handleClose, pages}) => {
    const { asPath } = useRouter()
    return(
        
        <Drawer
        anchor='left'
        open={visible}
        onClose={handleClose}
        pages={pages}
        >
       <Box sx={{width: 250}}>
           <List>
                {pages.map((page, index) => (
                    <Link
                    passHref
                    key={page}
                    href={page === 'Home' ? '/' : '/'.concat(page.replace(/ /g,"_"))}
                >
                    <ListItem button className="centeredLink" key={page}>
                        <ListItemText primary={              
                                <div className={`${isCurrentPage(asPath.slice(1), page.replace(/ /g,"_")) ? "activeDrawerLink" : 'headerDrawerLink'}`} ><a>{page}</a></div>
                        }></ListItemText>
                    </ListItem>
                    </Link>
                ))}
           </List>
       </Box>
        </Drawer>
    )
}

export default LeftDrawer;
import { Card, CardContent, List, ListItem, ListItemAvatar, ListItemText, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';
import WorkIcon from '@mui/icons-material/Work';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';

export function Home() {
    return (
        <Card sx={{ minWidth: 275 }} >
            <Typography variant="h2" color="purple">Home</Typography>
            <CardContent >
                <List>
                    <Link to='/connect-cat'>
                        <ListItem>
                            <ListItemAvatar>
                                <Avatar>
                                    <ImageIcon />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary="Connect Cat" />
                        </ListItem>
                    </Link>
                    <Link to='/contador'>
                        <ListItem>
                            <ListItemAvatar>
                                <Avatar>
                                    <WorkIcon />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary="Contador" />
                        </ListItem>
                    </Link>
                    <Link to='/to-do'>
                        <ListItem>
                            <ListItemAvatar>
                                <Avatar>
                                    <BeachAccessIcon />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary="To Do List" />
                        </ListItem>
                    </Link>
                </List >
            </CardContent>
        </Card>
    )
}
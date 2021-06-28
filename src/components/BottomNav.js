import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core'
import ReactLogo from './Logo'
import { Link } from 'react-scroll'
import InfoIcon from '@material-ui/icons/Info';
import WorkIcon from '@material-ui/icons/Work';
import AppsIcon from '@material-ui/icons/Apps';
import ContactMailIcon from '@material-ui/icons/ContactMail';

const useStyles = makeStyles({
    root: {
        width: 500,
        backgroundColor: "#56BD9E",
        opacity: 0.6
    }
})

const BottomNav = () => {

    const classes = useStyles()

    const [value, setValue] = useState(0)

    const handleChange = (event, newValue) => {
        setValue(newValue)
    }

    return (
        <div>
            <BottomNavigation 
                value={value} 
                className={classes.root}
                onChange={(event, newValue) => handleChange(event, newValue)}
            >
                <Link to="about" smooth={true} duration={1500} offset={-50}>
                    <BottomNavigationAction label="Recents" value="recents" icon={<InfoIcon />} />
                </Link>
                <Link to="projects" smooth={true} duration={1500} offset={-50}>
                    <BottomNavigationAction label="Favorites" value="favorites" icon={<WorkIcon />} />
                </Link>
                <Link to="exp" smooth={true} duration={1500} offset={-50}>
                    <BottomNavigationAction label="Nearby" value="nearby" icon={<AppsIcon />} />
                </Link>
                <Link to="contact" smooth={true} duration={1500} offset={-50}>
                    <BottomNavigationAction label="Folder" value="folder" icon={<ContactMailIcon />} />
                </Link>
                
                
                
            </BottomNavigation>
        </div>
    )
}

export default BottomNav

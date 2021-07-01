import React, { useState, useEffect, useRef } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core'
import { Link } from 'react-scroll'
import InfoIcon from '@material-ui/icons/Info';
import WorkIcon from '@material-ui/icons/Work';
import AppsIcon from '@material-ui/icons/Apps';
import ContactMailIcon from '@material-ui/icons/ContactMail';

const useStyles = makeStyles({
    root: {
        width: "100%",
        backgroundColor: "rgba(86, 189, 158, 0.3)"
    }
})



const BottomNav = () => {

    const classes = useStyles()

    const [value, setValue] = useState(0)
    const [val1, setVal1] = useState(false)
    const [val2, setVal2] = useState(false)
    const [val3, setVal3] = useState(false)
    const [val4, setVal4] = useState(false)

    const handleChange = (event, newValue) => {
        setValue(newValue)
    }

    const resetLabelText = () => {
        console.log("state change in reset")
        setVal1(false)
        setVal2(false)
        setVal3(false)
        setVal4(false)
    }


    const firstRender = useRef(true)
    const navClicks = useRef(0)

    useEffect(() => {
        console.log("firstRender: ", firstRender.current)
        if (firstRender.current===false) {
            const timer = setTimeout(() => {
                console.log("add Listener")
                window.addEventListener('scroll', scrollHandler); 
            }, 2000)
            // return () => clearTimeout(timer)
        }
        firstRender.current = false
    })

    const scrollHandler = () => {
        window.removeEventListener('scroll', scrollHandler)
        console.log("removed Listener")
        firstRender.current = true
        resetLabelText()
        navClicks.current = 0
    }

    const labelText = (newValue) => {
        console.log("state change on nav click")
        switch(newValue) {
            case "about":
                setVal1(true)
                break
            case "projects":
                setVal2(true)
                break
            case "exp":
                setVal3(true)
                break
            case "contact":
                setVal4(true)
                break
        }
        setValue(newValue)
    }

    const checkClicks = () => {
        if (navClicks.current>1) {
            console.log("consecutive clicks")
        }
    }
    

    return (
        <div className="bg-primaryColLite sticky bottom-0 z-50 bg-opacity-90 flex justify-center pb-4">
            <BottomNavigation 
                value={value} 
                className={classes.root}
                onChange={(event, newValue) => handleChange(event, newValue)}
            >
                <Link to="about" 
                    smooth={true} 
                    duration={1500} 
                    offset={-50} 
                    onClick={()=> {
                        window.removeEventListener('scroll', scrollHandler)
                        resetLabelText()
                        navClicks.current = navClicks.current +1
                        checkClicks()
                        labelText("about")} 
                    }
                >
                    <BottomNavigationAction label="About" value="about"  showLabel={val1} icon={<InfoIcon />} />
                </Link>
                <Link to="projects" 
                    smooth={true} 
                    duration={1500} 
                    offset={-50} 
                    onClick={()=> {
                        window.removeEventListener('scroll', scrollHandler)
                        resetLabelText()
                        navClicks.current = navClicks.current +1
                        checkClicks()
                        labelText("projects")} 
                    }
                >
                    <BottomNavigationAction label="Projects" value="projects" showLabel={val2} icon={<AppsIcon />} />
                </Link>
                <Link to="exp" 
                    smooth={true} 
                    duration={1500} 
                    offset={-50} 
                    onClick={()=> {
                        window.removeEventListener('scroll', scrollHandler)
                        resetLabelText()
                        navClicks.current = navClicks.current +1
                        checkClicks()
                        labelText("exp")} 
                    }
                >
                    <BottomNavigationAction label="Experience" value="exp" showLabel={val3} icon={<WorkIcon />} />
                </Link>
                <Link to="contact" 
                    smooth={true} 
                    duration={1500} 
                    offset={-50} 
                    onClick={()=> {
                        window.removeEventListener('scroll', scrollHandler)
                        resetLabelText()
                        navClicks.current = navClicks.current +1
                        checkClicks()
                        labelText("contact")} 
                    }
                >
                    <BottomNavigationAction label="Contact" value="contact" showLabel={val4} icon={<ContactMailIcon />} />
                </Link>
                
                
                
            </BottomNavigation>
        </div>
    )
}

export default BottomNav

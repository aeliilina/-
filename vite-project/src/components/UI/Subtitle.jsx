import classes from './UI.module.scss'

export default function Subtitle (props) {


    const {children} = props


    return(
        <p className={classes.subtitle}>{children}</p>
    )
}
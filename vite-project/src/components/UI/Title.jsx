import classes from './UI.module.scss'

export default function Title (props) {


    const {children} = props


    return(
        <p className={classes.title}>{children}</p>
    )
}
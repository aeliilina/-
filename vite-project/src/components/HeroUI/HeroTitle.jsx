import classes from './HeroUI.module.scss'

export default function HeroTitle (props) {

    const {children} = props



    return (
        <p className={classes.HeroTitle}>{children}
        </p>
    )
}
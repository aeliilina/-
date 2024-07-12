import classes from './HeroUI.module.scss'

export default function HeroSubtitle (props) {

    const {children} = props



    return (
        <p className={classes.HeroSubtitle}>{children}
        </p>
    )
}
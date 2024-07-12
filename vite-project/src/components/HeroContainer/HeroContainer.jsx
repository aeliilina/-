import classes from './HeroContainer.module.scss'

export default function HeroContainer (props) {
    const {children} = props
    

    return (
        <div className={classes.img}>
            {children}
        </div>
    )



}
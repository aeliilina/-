import classes from './Header.module.scss'
import logo from '../../assets/logo.svg'

export default function Header () {
    

    const navigationContent = [
        {
            title: 'About us',
            link:''
        },
        {
            title: 'Services',
            link:''
        },
        {
            title: 'Work',
            link:''
        },
        {
            title: 'News',
            link:''
        },
        {
            title: 'Contacts',
            link:''
        }
    ]

    return (
        <div className={classes.wrapper}>
          <img src={logo} alt="Logo" />
          <div className={classes.navigation}>
            {navigationContent.map((item, i) => (
              <div key={i} className={classes.navigationItem}>
                {item.title}
              </div>
            ))}
          </div>
        </div>
      );
    }
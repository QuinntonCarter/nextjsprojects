import headerStyles from '../styles/Header.module.css'

const Header = () => {
    return (
        // shows on every page bc imported on layout
        <div>
            <h4 className={headerStyles.title}>
                <span> Quinnton Carter </span> full stack web developer
            </h4>
        </div>
    )
}

export default Header
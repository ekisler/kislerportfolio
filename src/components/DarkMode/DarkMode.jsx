import useDarkMode from "../../hooks/useDarkMode";
import { MdOutlineWbSunny } from "react-icons/md";
import { BsFillMoonStarsFill } from "react-icons/bs";
/**
 * A toggle for switching between light and dark modes.
 *
 * @param {Object} props - The properties for the component.
 * @param {boolean} props.open - Whether the sidebar is open or not.
 */
const DarkMode = (props) => {
  const [darkTheme, setDarkTheme] = useDarkMode();

  /**
   * Toggles the dark mode.
   */
  const handleMode = () => setDarkTheme(!darkTheme);
  return (
    <div>
      <span onClick={handleMode}>
        {darkTheme ? (
          <>
            <div>
            <BsFillMoonStarsFill
                style={{
                  marginBottom: "-20px",
                  marginLeft: "25px",
                  marginRight: "2%",
                  fontSize: "25px",
                  color: "rgb(252, 252, 252)",
                }}           
              />
            </div>
            <h1 className={`${!props.open && "hidden"}`}></h1>
          </>
        ) : (
          <>
            <div className="nav__icons">
            <MdOutlineWbSunny
                style={{
                  marginBottom: "-20px",
                  marginLeft: "25px",
                  marginRight: "2%",
                  fontSize: "25px",
                  color: "rgb(246, 250, 3)",
                }}
              />
            </div>
            <h1 className={`${!props.open && "hidden"}`}></h1>
          </>
        )}
      </span>
    </div>
  );
};

export default DarkMode;

import { Link } from "react-router-dom";
import useDarkMode from "use-react-dark-mode";
import LightModeIcon from "@mui/icons-material/LightMode";
function Navbar() {
  const { isDark, toggle } = useDarkMode();
  return (
    <div className="h-full z-[1] bg-[#373B53] dark:bg-light-dark-cite rounded-tr-3xl rounded-br-3xl flex flex-col items-center justify-between 1285:rounded-none md:fixed 1285:flex-row 1285:mb-[-32px] 1285:h-[80px]">
      <Link to={"/"}>
        <img src="/Group 9.svg" alt="" className="1285:w-[80px]" />
      </Link>
      <div className="flex flex-col justify-center min-w-full 1285:flex-row 1285:min-w-0 1285:gap-[32px]">
        {isDark ? (
          <div
            className="mb-[42px] cursor-pointer mx-auto 1285:my-auto opacity-70"
            onClick={toggle}
          >
            <LightModeIcon style={{ color: "white" }} />
          </div>
        ) : (
          <img
            onClick={toggle}
            className="mb-[42px] cursor-pointer  mx-auto 1285:my-auto"
            src="/moon.svg"
            alt="moon-img"
            width={19.99}
            height={19.99}
          />
        )}
        <div className="min-h-full w-[1px] bg-[#494E6E] my-[-16px] hidden 1285:block befT:my-[-15px]"></div>
        <div className="mb-[24px] 1285:mb-0 1285:mr-[32px]">
          <hr className="w-full h-[1px] opacity-20 bg-[#494E6E] mb-[24px] 1285:hidden" />
          <img src="/Oval.svg" alt="" className="1285:w-[32px] w-[43px] m-auto"/>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

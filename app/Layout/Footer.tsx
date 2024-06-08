import { useTheme } from "../Configs/ThemeContext";
type Props = {};
type Time = {
  hours: number;
  minutes: number;
};
const Footer = (props: Props) => {
  const { theme } = useTheme();

  const footerBg = theme === "dark" ? "bg-dark3 text-light5/90" : "bg-light3";

  return (
    <div className={`w-full h-7 px-1 flex ${footerBg}`}>
      {/* <div>VS</div> */}
      <div className='ml-1 hidden md:flex items-center'>
        <a href='https://github.com/MoizKhuzema' target='_blank' className='ml-2'>
          <img
            alt='GitHub followers'
            src='https://img.shields.io/github/followers/MoizKhuzema'
          />
        </a>
        <a href='https://github.com/MoizKhuzema' target='_blank' className='ml-2'>
          <img
            alt="GitHub User's stars"
            src='https://img.shields.io/github/stars/MoizKhuzema'
          />
        </a>
      </div>
    </div>
  );
};

export default Footer;

import Logo from '../assets/images/logo.svg';
import DarkModeIcon from '../assets/icons/dark-mode.svg';
import LightModeIcon from '../assets/icons/light-mode.svg';
import useTheme from '../hooks/use-theme';

const HeaderComponent = () => {
  const [theme, toggleTheme] = useTheme();
  const modeIcon = theme === 'dark' ? LightModeIcon : DarkModeIcon;
  const nextTheme = theme === 'dark' ? 'light' : 'dark';

  return (
    <header className="flex flex-row items-center justify-between p-4">
      <a
        href="/"
        className="flex flex-row items-center justify-start gap-[9px]"
      >
        <img src={Logo} alt="logo" />
        <span className="font-semibold text-[18px] leading-[130%] tracking-[-0.75px] text-[#12131A] dark:text-[#E4E4EF]">
          Character Counter
        </span>
      </a>
      <button
        className="border-0 bg-[#F2F2F7] rounded-[6px] p-[6px] cursor-pointer dark:bg-[#2A2B37]"
        onClick={() => toggleTheme()}
      >
        <img src={modeIcon} alt={`${nextTheme} theme`} className="w-5 h-5" />
      </button>
    </header>
  );
};

export default HeaderComponent;

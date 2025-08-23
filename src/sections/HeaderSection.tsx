import Logo from '../assets/images/logo.svg';
import DarkModeIcon from '../assets/icons/dark-mode.svg';
import LightModeIcon from '../assets/icons/light-mode.svg';
import useTheme from '../hooks/use-theme';

const HeaderSection = () => {
  const [theme, toggleTheme] = useTheme();
  const isDark = theme === 'dark';

  return (
    <header className="flex flex-row items-center justify-between p-4 md:py-4 md:px-8 lg:px-0 lg:pb-0 lg:pt-8 lg:max-w-[990px] lg:mx-auto">
      <a
        href="/"
        className="flex flex-row items-center justify-start gap-[9px] md:gap-[12px]"
      >
        <img src={Logo} alt="logo" />
        <span
          className="
            font-semibold text-[18px] leading-[130%] tracking-[-0.75px] text-[#12131A] dark:text-[#E4E4EF]
            md:text-[24px]
          "
        >
          Character Counter
        </span>
      </a>
      <button
        aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
        aria-pressed={isDark}
        onClick={toggleTheme}
        className="
          border-0 bg-[#F2F2F7] rounded-[6px] p-[6px] cursor-pointer
          dark:bg-[#2A2B37]
          md:p-[11px]
        "
      >
        <img
          src={isDark ? LightModeIcon : DarkModeIcon}
          alt=""
          aria-hidden="true"
          className="w-5 h-5 md:w-[22px] md:h-[22px]"
        />
      </button>
    </header>
  );
};

export default HeaderSection;

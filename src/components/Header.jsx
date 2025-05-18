import { useState, useEffect } from 'react';

export const Header = () => {
  const headerItems = ['Home', 'About', 'Projects', 'Contact'];
  const [isScrolled, setIsScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(
    () => localStorage.getItem('theme') === 'dark'
  );

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 120);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  return (
    <div
      className={`z-50 fixed top-4 left-1/2 -translate-x-1/2 px-5 py-3 md:px-7 md:py-4
                  rounded-full flex items-center gap-3 md:gap-8 text-text-light dark:text-text-dark text-sm md:text-md
                  transition-all duration-300
                  ${isScrolled ? 'bg-white/10 dark:bg-black/10 backdrop-blur-lg shadow-lg' : 'bg-transparent'}`}
    >
      {headerItems.map((item) => (
        <a
          href={`#${item.toLowerCase()}`}
          key={item}
          className="hover:text-[#0077CC] transition"
        >
          {item}
        </a>
      ))}
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="ml-4 px-2 py-1 border hover:bg-[#3399FF]/30 rounded-full text-sm transition cursor-pointer"
      >
        {darkMode ? '🌙' : '☀️'}
      </button>
    </div>
  );
};

export const Footer = ({ darkMode, setDarkMode }) => {
    return (
        <footer className="w-full text-center py-4 border-t border-gray-300 dark:border-gray-700 text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()}{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3399FF] to-[#0077CC]">
                nilaybadjatya
            </span>
            . All rights reserved.
        </footer>
    );
};

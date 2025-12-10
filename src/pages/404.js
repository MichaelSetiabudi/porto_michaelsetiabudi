import Link from 'next/link';
import { useTheme } from '@/context/ThemeContext';

export default function Custom404() {
  const { theme } = useTheme();

  return (
    <div className={`h-screen flex justify-center items-center ${
      theme === 'dark' ? 'bg-[#0a192f]' : 'bg-white'
    }`}>
      <div className="text-center">
        <h1 className={`text-[100px] m-0 font-bold ${
          theme === 'dark' ? 'text-[#e6f1ff]' : 'text-[#0a192f]'
        }`}>
          404
        </h1>
        <h2 className={`text-2xl my-2.5 font-semibold ${
          theme === 'dark' ? 'text-[#e6f1ff]' : 'text-[#0a192f]'
        }`}>
          Page Not Found
        </h2>
        <p className={`mb-7 text-lg ${
          theme === 'dark' ? 'text-[#8892b0]' : 'text-[#2d3e50]'
        }`}>
          Sorry, the page you are looking for does not exist or has been moved.
        </p>
        <Link
          href="/landingpage"
          className={`inline-block text-lg px-5 py-2.5 rounded-lg transition-all duration-300 ${
            theme === 'dark'
              ? 'bg-[#64ffda] hover:bg-[#52d4aa] text-[#0a192f]'
              : 'bg-[#00b894] hover:bg-[#00a080] text-white'
          } font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5`}
        >
          Go back to Homepage
        </Link>
      </div>
    </div>
  );
}

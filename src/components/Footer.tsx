import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

export const Footer = () => {
  return (
    <footer className="bg-white/80 backdrop-blur-sm border-t border-gray-200 py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-gray-600 mb-4">本目录仅供参考，不构成投资建议。投资有风险，入市需谨慎。</p>
        <div className="flex justify-center items-center space-x-4">
          <a href="https://github.com/xdlrt/ai-wiki" target="_blank" rel="noopener noreferrer"
            className="text-gray-600 hover:text-indigo-600 transition-colors duration-200">
            <FontAwesomeIcon icon={faGithub} className="text-xl" />
            <span className="ml-2">GitHub</span>
          </a>
        </div>
      </div>
    </footer>
  );
};


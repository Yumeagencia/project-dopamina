import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Sparkles, Home } from 'lucide-react';

interface HeaderProps {
  onHomeClick?: () => void;
  showHomeButton?: boolean;
}

export default function Header({ onHomeClick, showHomeButton = false }: HeaderProps) {
  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white bg-opacity-90 backdrop-blur-md border-b border-gray-200 shadow-sm"
    >
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity cursor-pointer">
          <Sparkles className="w-8 h-8 text-emerald-600" />
          <span className="text-2xl font-bold text-gray-900" style={{ fontFamily: "'Josefin Sans', sans-serif" }}>
            MasDopamina
          </span>
        </Link>

        {showHomeButton && (
          <Link to="/">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onHomeClick}
              className="flex items-center space-x-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors duration-200"
            >
              <Home className="w-4 h-4 text-gray-700" />
              <span className="text-sm font-medium text-gray-700">Volver a inicio</span>
            </motion.button>
          </Link>
        )}
      </div>
    </motion.header>
  );
}

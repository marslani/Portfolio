import { motion } from 'framer-motion';
import { cn } from '../../utils/helpers';
import './Button.css';

export default function Button({ children, variant = 'primary', className, as = 'button', href, ...props }) {
  const sharedProps = {
    className: cn('button', `button--${variant}`, className),
    whileHover: { y: -2, scale: 1.01 },
    whileTap: { scale: 0.98 },
    transition: { type: 'spring', stiffness: 260, damping: 20 },
  };

  if (as === 'a') {
    return (
      <motion.a {...sharedProps} href={href} {...props}>
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button {...sharedProps} type="button" {...props}>
      {children}
    </motion.button>
  );
}

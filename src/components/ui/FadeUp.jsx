/** Above-the-fold entrance animation (CSS only, content is visible even before JavaScript loads). */
export default function FadeUp({ children, delay = 0, className = '', as: Component = 'div' }) {
  return (
    <Component className={`fade-up ${className}`} style={delay ? { animationDelay: `${delay}s` } : undefined}>
      {children}
    </Component>
  );
}

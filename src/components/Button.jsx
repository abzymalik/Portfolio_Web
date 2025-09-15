// components/Button.jsx
const Button = ({ text, className = "", ...props }) => {
  return (
    <button
      type="button"
      className={`inline-flex items-center justify-center gap-4
                  rounded-full px-8 py-4
                  font-semibold uppercase tracking-wide text-white
                  bg-gradient-to-r from-indigo-600 via-purple-600 to-fuchsia-600
                  ring-1 ring-white/20
                  shadow-[0_0_40px_rgba(124,58,237,0.35)]
                  hover:shadow-[0_0_60px_rgba(124,58,237,0.5)]
                  transition-all duration-300
                  ${className}`}
      {...props}
    >
      <span className="text-base md:text-lg">{text}</span>

      {/* Down arrow that nudges down on hover */}
      <span
        aria-hidden="true"
        className="grid place-items-center size-8 rounded-full
                   bg-white/15 ring-1 ring-white/20
                   transition-transform duration-300
                   hover:translate-y-1"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18" height="18" viewBox="0 0 24 24" fill="none"
          className="text-white"
        >
          <path d="M12 5v14m0 0-5-5m5 5 5-5"
                stroke="currentColor" strokeWidth="2"
                strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
    </button>
  );
};

export default Button;
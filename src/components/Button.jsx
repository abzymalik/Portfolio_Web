// components/Button.jsx
const Button = ({ text, className = "", ...props }) => {
  return (
    <div className="relative inline-block group">
      {/* outer glow */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -inset-1 rounded-full
                   bg-gradient-to-r from-indigo-500 via-purple-500 to-fuchsia-500
                   blur-2xl opacity-40 transition-opacity duration-300
                   group-hover:opacity-70"
      />
      {/* main pill */}
      <button
        type="button"
        className={`relative inline-flex items-center justify-center gap-4
                    rounded-full px-8 py-4
                    font-semibold uppercase tracking-wide
                    text-white
                    bg-gradient-to-r from-indigo-600 via-purple-600 to-fuchsia-600
                    shadow-[0_10px_30px_-10px_rgba(0,0,0,0.6)]
                    ring-1 ring-white/20
                    hover:from-indigo-500 hover:via-purple-500 hover:to-fuchsia-500
                    transition-all duration-300
                    ${className}`}
        {...props}
      >
        <span className="text-base md:text-lg">{text}</span>
        {/* arrow (down) */}
        <span
          aria-hidden="true"
          className="grid place-items-center size-8 rounded-full
                     bg-white/15 ring-1 ring-white/20
                     transition-transform duration-300
                     group-hover:translate-y-1"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            className="text-white"
          >
            <path
              d="M12 5v14m0 0-5-5m5 5 5-5"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </button>
    </div>
  );
};

export default Button;
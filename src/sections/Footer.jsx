import { socialImgs } from "../constants";

const CvIcon = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="white"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-6 w-6"
    {...props}
  >
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="16" y1="13" x2="8" y2="13" />
    <line x1="16" y1="17" x2="8" y2="17" />
    <line x1="10" y1="9" x2="9" y2="9" />
  </svg>
);

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left */}
        <div className="flex flex-col justify-center">
          <p>Terms & Conditions</p>
        </div>

        {/* Social icons */}
        <div className="socials flex gap-4">
          {socialImgs.map((s, index) =>
            s.link ? (
              <a
                key={index}
                href={s.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.name}
                className="icon p-2 rounded-lg bg-white/5 hover:bg-white/10 transition"
              >
                {s.name?.toLowerCase() === "cv" ? (
                  <CvIcon />
                ) : (
                  <img
                    src={s.imgPath}
                    alt={`${s.name} icon`}
                    className="h-6 w-6"
                  />
                )}
              </a>
            ) : null
          )}
        </div>

        {/* Right */}
        <div className="flex flex-col justify-center">
          <p className="text-center md:text-end">
            © {new Date().getFullYear()} Abdul Malik. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
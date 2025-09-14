import { socialImgs } from "../constants";

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
          {socialImgs.map((socialImg, index) =>
            socialImg.link ? (
              <a
                key={index}
                href={socialImg.link}
                target="_blank"
                rel="noopener noreferrer"
                className="icon p-2 rounded-lg bg-white/5 hover:bg-white/10 transition"
              >
                <img
                  src={socialImg.imgPath}
                  alt={`${socialImg.name} icon`}
                  className="h-6 w-6"
                />
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
import { useConfig } from "../src/context/ConfigContext"

export default function Footer() {
  const config = useConfig()
  const { socialLinks } = config

  return (
    <footer className="social-footer">
      <a href={socialLinks.twitter} target="_blank" rel="noopener noreferrer">
        <i className="fa-brands fa-twitter"></i>
      </a>

      <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer">
        <i className="fa-brands fa-facebook-f"></i>
      </a>

      <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer">
        <i className="fa-brands fa-instagram"></i>
      </a>

      <a href={socialLinks.github} target="_blank" rel="noopener noreferrer">
        <i className="fa-brands fa-github"></i>
      </a>
    </footer>
  )
}
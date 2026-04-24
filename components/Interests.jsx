import { useConfig } from "../src/context/ConfigContext"

export default function Interests() {
  const config = useConfig()
  const { interests } = config

  return (
    <span className="interests-span">    
        <h1 className="sectionHeader">{interests.heading}</h1>
        <p className="sectionText">
          {interests.content}
          {interests.links && interests.links.length > 0 && (
            <>
              {" "}
              {interests.links.map((link, index) => (
                <span key={index}>
                  {index > 0 && " "}
                  (<a href={link.href} target="_blank" rel="noopener noreferrer">
                    <i className="interests-hyperlink">{link.text}</i>
                  </a>){index < interests.links.length - 1 && "."}
                </span>
              ))}
            </>
          )}
        </p>
    </span>
  )
}
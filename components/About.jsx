import { useConfig } from "../src/context/ConfigContext"

export default function About() {
  const config = useConfig()
  const { about } = config

  return (
    <span className="about-span">
        <h1 className="sectionHeader">{about.heading}</h1>
        <p className="sectionText">{about.content}</p>
    </span>   
  )
}
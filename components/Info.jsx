import { useConfig } from "../src/context/ConfigContext"

export default function Info() {
  const config = useConfig()
  const { profile } = config

  return (
    <>
        <span className="info-span">
            <img src={profile.image} className="profileImage" alt="profile picture" />
            <h1 className="profileName">{profile.name}</h1>
            <p className="jobTitle">{profile.jobTitle}</p>
            <div className="button-row">
              <a href={`mailto:${profile.email}`} className="btn email-btn">
                <i className="fa-solid fa-envelope"></i>
                Email
              </a>

              <a href={profile.linkedinUrl} className="btn linkedin-btn" target="_blank">
                <i className="fa-brands fa-linkedin"></i>
                LinkedIn
              </a>
            </div>
        </span>
    </>
  )
}
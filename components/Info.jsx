export default function Info() {
  return (
    <>
        <span className="info-span">
            <img src="./images/print-137.png" className="profileImage" alt="profile picture" />
            <h1 className="profileName">Mike White</h1>
            <p className="jobTitle">Senior Software Engineer</p>
            <div className="button-row">
              <a href="mailto:baldviking10@gmail.com" className="btn email-btn">
                <i className="fa-solid fa-envelope"></i>
                Email
              </a>

              <a href="https://www.linkedin.com/in/mike-white-dev1965/" className="btn linkedin-btn" target="_blank">
                <i className="fa-brands fa-linkedin"></i>
                LinkedIn
              </a>
            </div>
        </span>
    </>
  )
}
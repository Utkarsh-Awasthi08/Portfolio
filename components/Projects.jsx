import React from 'react'

const Projects = () => {
  return (
    <section className="section projects" id="projects">
        <div className="container">
            <div className="section-title-container">
                <h2 className="section-title">My Work</h2>
                <p className="section-subtitle">
                    Explore some of my recent projects on their website or Github for code.
                </p>
            </div>
            <div className="projects-container">
                <div className="project-card">
                    <div className="project-image">
                        <img src="../images/video.png" alt="udemy"></img>
                        <div className="project-overlay"></div>
                        <div className="project-tags">
                            <span className="project-tag">Spring Boot</span>
                            <span className="project-tag">Spring Data JPA</span>
                            <span className="project-tag">React.js</span>
                            <span className="project-tag">MySQL</span>
                            <span className="project-tag">Video.js</span>
                            <span className="project-tag">Hls.js</span>
                            <span className="project-tag">Flowbite + Tailwind CSS</span>
                            <span className="project-tag">FFmpeg</span>
                            <span className="project-tag">HLS Streaming</span>
                        </div>
                    </div>
                    <div className="project-content">
                        <h3 className="project-title">Video Streaming App</h3>
                        <p className="project-description">
                        A full-stack video streaming app with large-file uploads, FFmpeg HLS transcoding, cancel-upload control, segmented streaming, MySQL persistence, and a modern React player interface.
                        </p>
                        <div className="project-links">
                            <a href="https://github.com/Utkarsh-Awasthi08/video-stream-backend.git" className="project-link" target="_blank">
                                <i className="fab fa-github"></i> View Code
                            </a>
                        </div>
                    </div>
                </div>

                <div className="project-card">
                    <div className="project-image">
                        <img src="../images/peerlink.png" alt="Ambulance Navigation System"></img>
                        <div className="project-overlay"></div>
                        <div className="project-tags">
                            <span className="project-tag">Next.js</span>
                            <span className="project-tag">TypeScript</span>
                            <span className="project-tag">Tailwind CSS</span>
                            <span className="project-tag">Java</span>
                            <span className="project-tag">Native Java HTTPServer</span>
                            <span className="project-tag">Apache Commons FileUpload</span>
                            <span className="project-tag">ThreadPool</span>
                            <span className="project-tag">Docker</span>
                        </div>
                    </div>
                    <div className="project-content">
                        <h3 className="project-title">PeerLink</h3>
                        <p className="project-description">
                        In this project, discover a secure peer-to-peer File Sharing application with instant uploads, temporary storage, unique invite codes, and high-speed direct downloads powered by a Java backend without any framework and a modern React interface.
                        </p>
                        <div className="project-links">
                            <a href="https://github.com/Utkarsh-Awasthi08/my-peer-link-backend" className="project-link" target="_blank">
                                <i className="fab fa-github"></i> View Code
                            </a>
                        </div>
                    </div>
                </div>

                <div className="project-card">
                    <div className="project-image">
                        <img src="../images/caht.png" alt="Ener Tracker"></img>
                        <div className="project-overlay"></div>
                        <div className="project-tags">
                            <span className="project-tag">Spring Boot</span>
                            <span className="project-tag">React.js</span>
                            <span className="project-tag">Spring WebSocket (STOMP)</span>
                            <span className="project-tag">SockJS</span>
                            <span className="project-tag">MongoDB</span>
                            <span className="project-tag">Spring Data MongoDB</span>
                            <span className="project-tag">SockJS Client</span>
                            <span className="project-tag">STOMP.js</span>
                            <span className="project-tag">Docker</span>
                        </div>
                    </div>
                    <div className="project-content">
                        <h3 className="project-title">Chat Application</h3>
                        <p className="project-description">
                        In this project, we will build a real-time chat application featuring room creation, message history, live WebSocket messaging using Spring Boot, and a smooth user interface.
                        </p>
                        <div className="project-links">
                            <a href="https://github.com/Utkarsh-Awasthi08/chat-app-backend" className="project-link" target="_blank">
                                <i className="fab fa-github"></i> View Code
                            </a>
                        </div>
                    </div>
                </div>

                <div className="project-card">
                    <div className="project-image">
                        <img src="../images/email.png" alt="Freelance retail billing software"></img>
                        <div className="project-overlay"></div>
                        <div className="project-tags">
                            <span className="project-tag">Spring Boot</span>
                            <span className="project-tag">React</span>
                            <span className="project-tag">Bootstrap</span>
                            <span className="project-tag">MySQL</span>
                            <span className="project-tag">AWS</span>
                            <span className="project-tag">IntelliJ IDEA</span>
                            <span className="project-tag">Full Stack</span>
                        </div>
                    </div>
                    <div className="project-content">
                        <h3 className="project-title">AI-Powered Email Writer</h3>
                        <p className="project-description">
                        A web-based application that generates clear, professional, and context-aware emails based on user input, allowing users to specify purpose, tone, and key points.
                        </p>
                        <div className="project-links">
                            <a href="https://github.com/Utkarsh-Awasthi08/email-writer-backend" className="project-link" target="_blank">
                                <i className="fab fa-github"></i> View Code
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
export default Projects
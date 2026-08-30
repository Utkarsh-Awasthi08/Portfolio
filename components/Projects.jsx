import React from 'react'

const Projects = () => {
    return (
        <section className="section projects" id="projects">
            <div className="container">
                <div className="section-title-container reveal">
                    <div className="section-badge"><i className="fas fa-laptop-code"></i> Portfolio</div>
                    <h2 className="section-title">My <span className="highlight">Work</span></h2>
                    <p className="section-subtitle">
                        Explore some of my recent projects — visit the live site or view source on GitHub.
                    </p>
                </div>

                <div className="projects-container">

                    {/* RebbenClipp */}
                    <div className="project-card">
                        <div className="project-image">
                            <img src="/images/RebbenClipp.webp" alt="RebbenClipp E-commerce Platform" loading="lazy" decoding="async" />
                            <div className="project-overlay"></div>
                            <div className="project-tags">
                                <span className="project-tag">Next.js</span>
                                <span className="project-tag">Node.js</span>
                                <span className="project-tag">PostgreSQL</span>
                                <span className="project-tag">MongoDB</span>
                                <span className="project-tag">Redis</span>
                                <span className="project-tag">Typesense</span>
                                <span className="project-tag">Docker</span>
                                <span className="project-tag">Coolify</span>
                            </div>
                        </div>
                        <div className="project-content">
                            <h3 className="project-title">RebbenClipp</h3>
                            <p className="project-description">
                                Production multi-tenant e-commerce platform serving B2C, B2B, and Enterprise clients. Built end-to-end with Next.js, Node.js, PostgreSQL, and Redis.
                            </p>
                            <div className="project-links">
                                <a href="https://rebbenclipp.in" className="project-link project-link-demo" target="_blank" rel="noopener noreferrer">
                                    <i className="fas fa-external-link-alt"></i> Live Site
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* GraphRAG Mentor */}
                    <div className="project-card">
                        <div className="project-image">
                            <img src="/images/GraphRAG.webp" alt="GraphRAG Mentor AI" loading="lazy" decoding="async" />
                            <div className="project-overlay"></div>
                            <div className="project-tags">
                                <span className="project-tag">React.js</span>
                                <span className="project-tag">Node.js</span>
                                <span className="project-tag">Neo4j</span>
                                <span className="project-tag">Redis</span>
                                <span className="project-tag">Docker</span>
                                <span className="project-tag">AI Gateway</span>
                                <span className="project-tag">Vector Embeddings</span>
                                <span className="project-tag">gRPC</span>
                                <span className="project-tag">Chrome Extensions</span>
                            </div>
                        </div>
                        <div className="project-content">
                            <h3 className="project-title">GraphRAG Mentor</h3>
                            <p className="project-description">
                                GraphRAG AI mentor using Neo4j and vector embeddings to detect mistake patterns. Features a gRPC AI Gateway with dynamic LLM routing, cutting token usage by 65%.
                            </p>
                            <div className="project-links">
                                <a href="https://github.com/Utkarsh-Awasthi08/GraphRAG_Mentor" className="project-link" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-github"></i> GitHub
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Video Streaming App */}
                    <div className="project-card">
                        <div className="project-image">
                            <img src="/images/video.webp" alt="Video Streaming App" loading="lazy" decoding="async" />
                            <div className="project-overlay"></div>
                            <div className="project-tags">
                                <span className="project-tag">Spring Boot</span>
                                <span className="project-tag">Spring Data JPA</span>
                                <span className="project-tag">React.js</span>
                                <span className="project-tag">MySQL</span>
                                <span className="project-tag">FFmpeg</span>
                                <span className="project-tag">HLS Streaming</span>
                            </div>
                        </div>
                        <div className="project-content">
                            <h3 className="project-title">Video Streaming App</h3>
                            <p className="project-description">
                                Full-stack streaming platform featuring FFmpeg HLS transcoding, resilient large-file uploads, and a low-latency React player.
                            </p>
                            <div className="project-links">
                                <a href="https://github.com/Utkarsh-Awasthi08/video-stream-backend.git" className="project-link" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-github"></i> Backend
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* PeerLink */}
                    <div className="project-card">
                        <div className="project-image">
                            <img src="/images/peerlink.webp" alt="PeerLink File Sharing" loading="lazy" decoding="async" />
                            <div className="project-overlay"></div>
                            <div className="project-tags">
                                <span className="project-tag">Java</span>
                                <span className="project-tag">Threadpool</span>
                                <span className="project-tag">Docker</span>
                                <span className="project-tag">Next.js</span>
                                <span className="project-tag">TypeScript</span>
                                <span className="project-tag">Tailwind CSS</span>
                            </div>
                        </div>
                        <div className="project-content">
                            <h3 className="project-title">PeerLink</h3>
                            <p className="project-description">
                                High-performance file sharing system built from scratch in Java. Handles 500MB+ transfers using custom thread pools and secure temporary storage.
                            </p>
                            <div className="project-links">
                                <a href="https://github.com/Utkarsh-Awasthi08/my-peer-link-backend" className="project-link" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-github"></i> GitHub
                                </a>
                                <a href="https://my-peer-link.vercel.app" className="project-link project-link-demo" target="_blank" rel="noopener noreferrer">
                                    <i className="fas fa-external-link-alt"></i> Live Site
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
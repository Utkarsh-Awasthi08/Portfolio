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
                                Designed and shipped a production e-commerce platform serving three distinct buyer segments (B2C/B2B/Enterprise) off one shared catalogue, powering live customer traffic and payments. Built the full stack solo — Node.js/Express.js, Next.js 15 SSR frontend, and a PostgreSQL + MongoDB + Redis + Typesense data layer.
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
                                <span className="project-tag">OpenRouter</span>
                                <span className="project-tag">Vector Embeddings</span>
                            </div>
                        </div>
                        <div className="project-content">
                            <h3 className="project-title">GraphRAG Mentor</h3>
                            <p className="project-description">
                                Architected a GraphRAG-powered AI mentor across React, Express, and a Chrome Extension with JWT token sync, translating natural language into Text-to-Cypher and 768-dim vector subgraph queries to detect recurring mistake patterns. Decoupled LLM orchestration into a gRPC AI Gateway microservice with dynamic Gemini/Groq/OpenRouter fallback — reducing token usage by 65%.
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
                                A full-stack video streaming platform with large-file uploads, FFmpeg HLS transcoding, cancel-upload control, segmented streaming, MySQL persistence, and a modern React player interface with smooth playback and minimal latency.
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
                                A lightweight file sharing system with custom request handling and file management logic built without any framework, focusing on performance, reliability, and ease of use. Successfully handles file sizes up to 500MB with unique download codes and temporary storage.
                            </p>
                            <div className="project-links">
                                <a href="https://github.com/Utkarsh-Awasthi08/my-peer-link-backend" className="project-link" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-github"></i> GitHub
                                </a>
                                <a href="https://peerlink-demo.vercel.app" className="project-link project-link-demo" target="_blank" rel="noopener noreferrer">
                                    <i className="fas fa-external-link-alt"></i> Demo
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
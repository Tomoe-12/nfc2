import React from 'react'

interface LoadingProps {
  showTransition: boolean;
}

const Loading = ({ showTransition }: LoadingProps) => {
  return (
    <div className={`retro-screen bg-black ${showTransition ? "fade-out" : ""}`}>
          <div className="retro-window">
            {/* Window Title Bar */}
            <div className="retro-titlebar">
              <span className="retro-title">SANSHIN.EXE</span>
              <div className="retro-controls">
                <button className="retro-control-btn minimize">
                  <div className="minimize-icon"></div>
                </button>
                <button className="retro-control-btn maximize">
                  <div className="maximize-icon"></div>
                </button>
                <button className="retro-control-btn close">
                  <div className="close-icon"></div>
                </button>
              </div>
            </div>

            {/* Window Content */}
            <div className="retro-content">
              <div className="retro-text">Your tee is upgrading ...</div>

              {/* Loading Bar */}
              <div className="retro-loading-bar">
                {Array.from({ length: 20 }, (_, i) => (
                  <div key={i} className="loading-block loaded" />
                ))}
              </div>
            </div>
          </div>
        </div>
  )
}

export default Loading
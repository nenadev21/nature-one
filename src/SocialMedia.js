import React from "react";
import "./SocialMedia.css";
import { FaLinkedin, FaEnvelope, FaTwitter, FaFacebook, FaGithub } from 'react-icons/fa';




export default function SocialMedia() {
  return (
    
    <div className="SocialMedia">
      
      <ul>
        <li>
          <FaLinkedin />
          <a
            className="social-media-link"
            href="https://www.linkedin.com/in/daniela-vera-65970320/"
                      target="_blank"
                      rel="noreferrer"
          >
            {" "}
            LinkedIn{" "}
          </a>
        </li>
        <li>
          <FaEnvelope />
          
          <a
            className="social-media-link"
            href="mailto:dvera1@babson.edu"
                      target="_blank"
                      rel="noreferrer"
          >
            {" "}
            Email{" "}
          </a>
        </li>
        <li>
          <FaTwitter />
          <a
            className="social-media-link"
            href="https://twitter.com/daniveralopez"
                      target="_blank"
                      rel="noreferrer"
          >
            {" "}
            Twitter{" "}
          </a>
        </li>
        <li>
          <FaFacebook />
          <a
            className="social-media-link"
            href="https://www.facebook.com/daniela.veralopez.1/"
                      target="_blank"
                      rel="noreferrer"
          >
            {" "}
            Facebook{" "}
          </a>
        </li>
      </ul>
      <p>
        {" "}
        Fully open source{" "}
        <span>
          <FaGithub />
          <a
            className="social-media-link"
            href="https://github.com/nenadev21/nature-one"
                      target="_blank"
                      rel="noreferrer"
          >
            {" "}
            GitHub{" "}
          </a>
        </span>
      </p>
    </div>
  );
}

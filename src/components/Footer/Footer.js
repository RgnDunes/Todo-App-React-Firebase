import React from "react";
import classes from "./Footer.module.css";

function Footer() {
  return (
    <div className={classes.footer}>
      <div className={classes.inner_footer}>
        <div className={classes.footer_items}>
          <h1>Taskmaster</h1>
          <p>
            Welcome to Taskmaster. This platform is build for you to make your
            projects (group or solo) much more organised. After few updates,
            this website will have a room function too.
          </p>
        </div>
        <div className={classes.footer_items}>
          <h2>Quick Links</h2>
          <div className={classes.border}>
            <ul>
              <a href="#">
                <li>
                  <br />
                </li>
              </a>
              <a href="#">
                <li>Home</li>
              </a>
              <a href="#">
                <li>About</li>
              </a>
            </ul>
          </div>
        </div>
        <div className={classes.footer_items}>
          <h2>Contact Us</h2>
          <div className={classes.border}>
            <div className={classes.social_media}>
              <br />
              <a
                className={classes.social_media_links}
                href="https://www.facebook.com/profile.php?id=100026357103811"
              >
                Facebook
                <br />
              </a>
              <br />
              <a
                className={classes.social_media_links}
                href="https://twitter.com/RgnDunes"
              >
                Twitter
                <br />
              </a>
              <br />
              <a
                className={classes.social_media_links}
                href="https://www.instagram.com/rgndunes/?hl=en"
              >
                Instagram
                <br />
              </a>
              <br />
              <a
                className={classes.social_media_links}
                href="https://www.linkedin.com/in/divyansh-singh-8137201a2/"
              >
                LinkedIn
                <br />
              </a>
              <br />
              <a
                className={classes.social_media_links}
                href="mailto:singh.divyansh1802@gmail.com"
              >
                singh.divyansh1802@gmail.com
                <br />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.footer_bottom}>
        Copyright &copy; Taskmaster 2020. All rights reserved.
        <br /> Designed By - Divyansh Singh.
      </div>
    </div>
  );
}

export default Footer;

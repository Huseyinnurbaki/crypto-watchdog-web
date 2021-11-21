import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import * as styles from '../styles/social.module.css';
library.add(fab);

const Social = () => {
    const socialIcon = [
        // {
        //   name: "Twitter",
        //   url: "https://twitter.com/morothepriest",
        //   icon: ["fab", "twitter"],
        // },
        {
            name: "Github",
            url: "https://github.com/Huseyinnurbaki/crypto-watchdog-web",
            icon: ["fab", "github"],
        }
    ];

    return (
        <div className={styles.navSocial}>
            <ul>
                {socialIcon.map((icon, i) => (
                    <li key={i}>
                        <a target="_blank" href={icon.url} rel="noreferrer">
                            <FontAwesomeIcon icon={icon.icon} />
                        </a>
                        <span className={styles.tooltiptext}>
                            {icon.name}
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Social;
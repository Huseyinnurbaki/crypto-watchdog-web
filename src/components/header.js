import React from "react";
import Box from '@material-ui/core/Box';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
library.add(fab);
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
]
export default function Header() {
    return (

        <Box
          sx={{
            width: '100%',
            height: 100,
            zIndex: 12,
            position: 'fixed',
            top: 0,
            left: 0,
          display: 'flex',
          justifyContent: 'space-between',
         
          }}
        >
        <Box
          sx={{ p: 1 }}
        >
          <img alt="12312" src={"https://raw.githubusercontent.com/Huseyinnurbaki/notes/master/tmp/icon.webp"} width='%33' height="100" />



        </Box>
        <Box
          sx={{
            width: '20%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'flex-end',
            right: 0,
            height: 90
          }}
        >
          <div className="navSocial">
            <ul>
              {socialIcon.map((icon, i) => (
                <li key={i}>
                  <a target="_blank" rel="noreferrer" href={icon.url}>
                    <FontAwesomeIcon icon={icon.icon} />
                  </a>
                  <span className="tooltiptext">
                    {icon.name}
                  </span>
                </li>
              ))}
            </ul>
          </div>

        </Box>

        </Box>


    );
}

import React from "react";
import Typewriter from "typewriter-effect";

import i18n from "../../i18n";

function Type() {
  return ( <
    Typewriter options = {
      {
        strings: [
          i18n.t('home.FullStack-Developer'),
          "Javascript | React | Node",
          i18n.t('home.open-source-contributor'),
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }
    }
    />
  );
}

export default Type;
import { auth } from "./firebase.js";

import {
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/12.16.0/firebase-auth.js";

onAuthStateChanged(auth, (user) => {

  if (user) {

    document.getElementById("userGreeting").textContent =
      user.displayName || user.email;

  }

});

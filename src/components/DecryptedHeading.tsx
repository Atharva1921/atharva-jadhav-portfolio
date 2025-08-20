import { useEffect, useState } from "react";
import DecryptedText from "./DecryptedText";

const DecryptedHeading = () => {
    const [currentText, setCurrentText] = useState("Atharva Jadhav");

    useEffect(() => {
      const interval = setInterval(() => {
        // Flip text and restart animation
        setCurrentText((prev) =>
          prev === "Atharva Jadhav" ? "अथर्व जाधव" : "Atharva Jadhav"
        );
      }, 3000); // total cycle: decrypt + pause + decrypt

      return () => clearInterval(interval);
    }, []);

  return (
    <div>
      <DecryptedText
        text={currentText}
        speed={50}
        className="revealed"
        parentClassName="all-letters"
        encryptedClassName="encrypted"
        animateOn="view" // make sure it runs every time
      />
    </div>
  );
}

export default DecryptedHeading
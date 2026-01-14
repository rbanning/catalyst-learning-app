import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceSmile } from "@fortawesome/free-regular-svg-icons";

import appImage from "@/public/app-images/catalyst-64.png";

export default function Home() {
  const size = 48;
  const logoSize = 24;
  return (
    <div className="relative max-w-xl mx-auto mt-36">
      <div>
        <h1 className="flex items-center gap-2">
          <Image
            src={appImage}
            alt="Catalyst in front of a lightbulb"
            width={size}
            height={size}
          />
          <span>Catalyst Learning</span>
        </h1>
        <p className="prose-2xl">
          Accelerate your strategic thinking with interactive scenarios
          <FontAwesomeIcon icon={faFaceSmile} />
        </p>
      </div>
    </div>
  );
}

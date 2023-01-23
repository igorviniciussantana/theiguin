import Image from "next/image";
import { AvatarPhoto, AvatarWrapper } from "./styled";

export default function Avatar() {
  return (
    <AvatarWrapper data-aos="fade-up" data-aos-delay="500">
      <AvatarPhoto>
        <Image src="/foto.png" alt="avatar photo" fill className="avatar" />
      </AvatarPhoto>
    </AvatarWrapper>
  );
}

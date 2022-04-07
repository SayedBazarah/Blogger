import Image from "next/image";
//CSS
import Style from "./hero.module.css";

function HeroSection() {
  return (
    <section className={Style.container}>
      <div className={Style.hero}>
        <div className={Style.image}>
          <Image
            src="/images/essential/avatar.png"
            alt="Blogger avatar"
            width={300}
            height={300}
            Layout="responsive"
          />
        </div>
        <div>
          <h1>Hi, I'm Sayed M. Baiomy</h1>
        </div>
        <p>
          I blog about web development - especially in frontend frameworks like
          Angular or library like react{" "}
        </p>
      </div>
    </section>
  );
}

export default HeroSection;

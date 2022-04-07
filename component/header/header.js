import Link from "next/link";

//CSS File
import Style from "./header.module.css";

function MainHeader() {
  return (
    <header className={Style.header}>
      <div className={Style.container}>
        <div className={Style.logo}>
          <Link href="/">
            <a>Baiomy Blog</a>
          </Link>
        </div>
        <div>
          <ul className={Style.links}>
            <li>
              <Link href="/posts">Posts</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
export default MainHeader;

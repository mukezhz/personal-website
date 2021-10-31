import Link from "next/link";
import siteMetadata from "../data/siteMetadata";
import SocialIcon from "./utility/SocialIcon";

export default function Footer() {
  return (
    <footer>
      <div className="flex flex-col items-center mt-16">
        <div className="flex mb-3 space-x-4">
          {/*<SocialIcon
            kind="mail"
            href={`mailto:${siteMetadata.email}`}
            size="6"
          />*/}
          <SocialIcon kind="github" href={siteMetadata.github} size="30" />
          <SocialIcon kind="linkedin" href={siteMetadata.linkedin} size="30" />
          <SocialIcon kind="telegram" href={siteMetadata.telegram} size="30" />
          <SocialIcon kind="twitter" href={siteMetadata.twitter} size="30" />
          <SocialIcon kind="facebook" href={siteMetadata.facebook} size="30" />
        </div>
        <div className="flex flex-col items-center">
          <div className="flex mb-2 space-x-2 text-sm text-gray-500 dark:text-gray-400">
            <div>{siteMetadata.author}</div>
            <div>{` • `}</div>
            <div>{`© ${new Date().getFullYear()+3}`}</div>
            <div>{` • `}</div>
            <Link href="/">{siteMetadata.title}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

// Icons taken from: https://simpleicons.org/
import {facebook, twitter, linkedin, youtube, telegram, github} from "../../public/icons"
import SvgIcon from "./SvgIcon";

const components = {
  mail: "mail",
  github: github,
  facebook: facebook,
  telegram: telegram,
  linkedin: linkedin,
  twitter: twitter,
};

const SocialIcon = ({ kind, href, size = "8" }) => {
  if (!href) return null;

  const SocialSvg = components[kind];
  const {path, viewBox} = SocialSvg;
  return (
    <>
    <a
      href={href}
      className="text-sm text-gray-500 transition hover:text-gray-900"
      target="_blank"
      rel="noopener noreferrer"
    >
      <SvgIcon path={path} viewBox={viewBox} size={size} />
    </a>
    </>
  );
};

export default SocialIcon;

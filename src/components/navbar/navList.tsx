import { useTypedTranslation } from "../../hooks/useTypedTranslation";
import Text from "../text";

const NavList = () => {
  const { t } = useTypedTranslation();

  const links = [
    { id: "me", text: t("navbar.me") },
    { id: "contact", text: t("navbar.contact") },
    { id: "experience", text: t("navbar.experience") },
    { id: "skills", text: t("navbar.skills") },
    { id: "projects", text: t("navbar.projects") },
  ] as const;

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="h-full flex justify-center items-center gap-12">
      {links.map(({ id, text }) => (
        <a key={id} href={`#${id}`} onClick={(e) => handleScroll(e, id)}>
          <Text
            variant="body-lg-bold"
            className="transition duration-300 border-b-2 border-b-transparent hover:border-b-indigo-900 hover:border-b-2"
          >
            {text}
          </Text>
        </a>
      ))}
    </div>
  );
};

export default NavList;

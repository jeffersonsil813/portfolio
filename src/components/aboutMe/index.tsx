import MePhoto from "../../assets/me.png";
import { useTypedTranslation } from "../../hooks/useTypedTranslation";
import Text from "../text";

const AboutMe = () => {
  const { t } = useTypedTranslation();

  return (
    <section
      id="me"
      className="relative min-h-screen bg-linear-to-br from-zinc-200 via-purple-50 to-zinc-50 pt-32 px-8 lg:px-16 flex flex-col lg:flex-row items-center justify-center gap-5 overflow-hidden"
    >
      <div className="z-10 flex flex-1 flex-col gap-5 min-w-0 text-center lg:text-start">
        <Text variant="body-7xl">{t("aboutMe.title")}</Text>
        <Text variant="body-xl">{t("aboutMe.subtitle")}</Text>
      </div>

      <div className="flex-1 w-full flex justify-center lg:justify-end items-end self-end">
        <img
          src={MePhoto}
          alt="Jeff"
          className="w-auto h-auto max-h-[50vh] lg:max-h-[80vh] object-contain object-bottom mix-blend-multiply"
        />
      </div>
    </section>
  );
};

export default AboutMe;

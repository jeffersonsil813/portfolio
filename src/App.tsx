import { useTypedTranslation } from "./hooks/useTypedTranslation";
import "./i18n/i18n";

const App = () => {
  const { t } = useTypedTranslation();

  return <h1>{t("hero.subtitle")}</h1>;
};

export default App;

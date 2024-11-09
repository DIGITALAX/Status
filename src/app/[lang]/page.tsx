import StatusPage from "../../components/status";
import { getDictionary } from "./dictionaries";

export default async function IndexPage({
  params: { lang },
}: {
  params: { lang: string };
}) {
  const dict = await (getDictionary as (locale: any) => Promise<any>)(lang);
  return <StatusPage dict={dict} lang={lang} />;
}

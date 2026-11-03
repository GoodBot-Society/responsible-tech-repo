import "../globals.css";
import HomePageClient from "../comps/HomePage.client";
import { cardsHome } from "@/lib/actions";

export const revalidate = 3600; // revalidate at most every hour

const getCardsInfo = async (artifact) => {
  try {
    return await cardsHome(artifact);
  } catch (error) {
    console.log(error);
  }
};

export default async function Home() {

  const organizations = await getCardsInfo("Organization");
  const topVoices = await getCardsInfo("experts")
  const legalProcesses = await getCardsInfo("Litigation");
  const legislation = await getCardsInfo("Policy");
  const resources = await getCardsInfo("Resource");

  return (
    <HomePageClient
      organizations={organizations}
      topVoices={topVoices}
      legalProcesses={legalProcesses}
      legislation={legislation}
      resources={resources}
    />
  )

}

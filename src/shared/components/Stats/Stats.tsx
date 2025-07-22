import { useStats } from "@/shared/store/AppStore";
import { StatsUI } from "@/shared/ui/stats-ui/StatsUI";

export const Stats = () => {
  const stats = useStats();
  const awards = stats.awards.map((award) => award.Icon);
  return (
    <StatsUI
      score={stats.score}
      lucky={stats.lucky}
      Icons={awards}
    />
  );
};

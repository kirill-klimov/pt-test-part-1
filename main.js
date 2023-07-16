import { BonusToast } from "./src/BonusToast";
import { fetchBonus, fetchToken, formatDate } from "./src/utils";

(async () => {

const token = await fetchToken();
const bonuses = await fetchBonus(token);

const toast = new BonusToast(
  bonuses.currentQuantity,
  formatDate(bonuses.dateBurning),
  bonuses.forBurningQuantity,
);

toast.show();

})();
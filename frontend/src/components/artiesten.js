import nav from "../utils/nav.js";
import artiestCard from "../utils/artiestCard.js";
import { getArtworkData } from "../utils/getData.js";

nav();

getArtworkData().then((response) => {
    artiestCard(response);
});

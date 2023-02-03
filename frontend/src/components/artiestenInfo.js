import nav from "../utils/nav.js";
import artiestInfos from "../utils/artiestenInfo.js";
import { getArtworkData } from "../utils/getData.js";
import artiestInfo from "../utils/artiestenInfo.js";

nav();

getArtworkData().then((response) => {
    artiestInfos(response);
});
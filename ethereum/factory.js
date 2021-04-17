import web3 from "./web3";
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
    CampaignFactory.abi,
    '0x6bC12279aA3A91003C3029389fEb18EF93841cae'
);

export default instance;

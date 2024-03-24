const axios = require("axios");

module.exports = {
  config: {
    name: 'mv',
    version: '1.0.69',
    author: 'Siam the frog>🐸',
    countDown: 0,
    role: 0,
    category: 'media',
    shortDescription: 'random memes video', 
    longDescription: 'Get random funny hi-bn-en memes video',
    guide: {
      en: '{pn} ',
    },
  },
  
  sentVideos: [],

  onStart: async function ({ api, event, message }) {
    const senderID = event.senderID;({
    });

    const link = [
      "https://drive.google.com/uc?export=download&id=1SWNOsBaaTPiAJfyt0oWO55kBtxskq2Iu",
      "https://drive.google.com/uc?export=download&id=1XkJKYp3uRQFbRMOwqioUsO1-NJT1pn15",
      "https://drive.google.com/uc?export=download&id=1Y-KNZ7zG691EI7ZfbQi5H0Mf4pJi3FrR",
      "https://drive.google.com/uc?export=download&id=1Y2rSBX30DGvfECOphukZBI1msqFFm2_t",
      "https://drive.google.com/uc?export=download&id=1Y5QDD9TvMtPdIr3qMdcHTeLQh6L47dEi",
      "https://drive.google.com/uc?export=download&id=1Y2uGW1hYH-jwrGU33Mi1_rl-ZdoyLzD6",
      "https://drive.google.com/uc?export=download&id=1Y5zoUm6gCoiXbg2515MIK2kiiKwqcrJ2",
      "https://drive.google.com/uc?export=download&id=1YFSCrs6fKdJNWv8OY9YUWFuedTuVek0j",
      "https://drive.google.com/uc?export=download&id=1YMz746Lg_Z02RR05PRKNA5U6GLfKYOfq",
      "https://drive.google.com/uc?export=download&id=1YncZjGvBgMx9nTwdxwtNwprRpXPz75dm",
      "https://drive.google.com/uc?export=download&id=1YiEdDne0u4N4e6YTLTeTdN2ksgBvAV6L",
      "https://drive.google.com/uc?export=download&id=1YrVm76dHxOR2eXeh_oBct6OkSR5ecKjb",
      "https://drive.google.com/uc?export=download&id=1Z-dNJABMDu3vTQxEm7u8sVFUPPS33dl4",
      "https://drive.google.com/uc?export=download&id=1Z1XcSzH7SV_r9NAl2itwkFCBkXog_pm9",
      "https://drive.google.com/uc?export=download&id=1Z2S2tfIOKS_i3ug8S7eQK3qrV-4T6pIe",
      "https://drive.google.com/uc?export=download&id=1ZSoqRej9DxUfXsugPPfkYVnO30bEfgwo",
      "https://drive.google.com/uc?export=download&id=1ZT5wNKWzE-csHmNIhGM_xAU0v6GLc_v6",
      "https://drive.google.com/uc?export=download&id=1ZOBwEus3RdWpf_p-ZVw4AZsOiO-9ase-",
      "https://drive.google.com/uc?export=download&id=1ZXpWLEnV7IJRCEscBPKv_WVh5yHKMTCW",
      "https://drive.google.com/uc?export=download&id=1ZclzsKaEZNYON3CpTuEcgmoaQLKULK9K",
      "https://drive.google.com/uc?export=download&id=1ZUH153mw6vWkWsYbweKTuqQsaqVqR_ZS",
      "https://drive.google.com/uc?export=download&id=1S_g1IZizygdvHrlnal8xf-_9Uz2hEMBi",
      "https://drive.google.com/uc?export=download&id=1Sa2-U6OORXK2gxHZULB2dIl4SdF2M18r",
      "https://drive.google.com/uc?export=download&id=1SgTswmVdDwXRp8_qxVP8HTZV5qFOqleZ",
      "https://drive.google.com/uc?export=download&id=1Sp-2stWvhGvj8KLj7LsPEzx1mwBL_EO3",
      "https://drive.google.com/uc?export=download&id=1T4EERgxpWR3Hojcb56tBZGVPk1XkrvKP",
      "https://drive.google.com/uc?export=download&id=1T654cMtdNM8QufJYSNkuLzFeeCCIzrM2",
      "https://drive.google.com/uc?export=download&id=1TBfnihpAj0LdBa1KZSgtQXOGfci5HuKL",
      "https://drive.google.com/uc?export=download&id=1TGmIDd_3uzz2YnAPwKM6Z97a9VMO4S76",
      "https://drive.google.com/uc?export=download&id=1TUzFAQl7LQbiKNMAGZN7BAvZW0wb3y6g",
      "https://drive.google.com/uc?export=download&id=1Ta69mbK4cJCTagjpjd6jkwe_64dv_jvu",
      "https://drive.google.com/uc?export=download&id=1TeWULyI6QELDlGptmNZ3DhiSQ9iH2jVe",
      "https://drive.google.com/uc?export=download&id=1TeWZrath_BkgJsHZ5OxJgfbTGZEqRAD3",
      "https://drive.google.com/uc?export=download&id=1TfW0k_aIQKWWDoUQPGCKDWh5CFhxyRld",
      "https://drive.google.com/uc?export=download&id=1Tpqc4Z7wopqj0M0Icvt5lLhsmrxdE1Uk",
      "https://drive.google.com/uc?export=download&id=1TqqKsXWW6JQtG5xXRSIfVSgYjekd0Uru",
      "https://drive.google.com/uc?export=download&id=1TvD1CuTB7rzAWcBRa1QrKrcbf7vvEeXL",
      "https://drive.google.com/uc?export=download&id=1TxpVAzGrTYPiE3Dqv0xvxdH0tkH1xSpH",
      "https://drive.google.com/uc?export=download&id=1TxzPbWOv7WrmKYUkSaGvCXBbxUg6rlyG",
      "https://drive.google.com/uc?export=download&id=1sjJtZBAjeWXgbWNCxFGlOwKXiNSrhJi8",
      "https://drive.google.com/uc?export=download&id=1slRn0gvEJ812wmCqjCWI_MxvPr7UMQZ0",
      "https://drive.google.com/uc?export=download&id=1spivyAkiuKheVwzsakkKoFHl3JuukHVx",
      "https://drive.google.com/uc?export=download&id=1sr8bKsaCSsu1veKF9I710PJBZCtrR2tj",
      "https://drive.google.com/uc?export=download&id=1sy7KV0YVFprSld1t-cag2duB7Rfjl1Q2",
      "https://drive.google.com/uc?export=download&id=1t1xQhz3R7-pQczqMNjmB5eDnOxXmMzjW",
      "https://drive.google.com/uc?export=download&id=1t1xQhz3R7-pQczqMNjmB5eDnOxXmMzjW",
      "https://drive.google.com/uc?export=download&id=1t5ep9KLGz1iHF5JhhjGVeOrGDIjcIhkz",
      "https://drive.google.com/uc?export=download&id=1UYkqXI4Tzb9XH4_oKfF3Lon5iKK1x5kL",
      "https://drive.google.com/uc?export=download&id=1U_McQBWNAQzJl-m_SNWaY8ijdOY4eTdp",
      "https://drive.google.com/uc?export=download&id=1UeFBcl7X9082Fl0ieqkEnw0z-beJ_jWX",
      "https://drive.google.com/uc?export=download&id=1UeFBcl7X9082Fl0ieqkEnw0z-beJ_jWX",
      "https://drive.google.com/uc?export=download&id=1UmTFma6SUxLDvKwrASBUF8dgEpq-ah6Y",
      "https://drive.google.com/uc?export=download&id=1UrhZuveTkLQYuIUprWQ5TWuFTuNr6_yN",
      "https://drive.google.com/uc?export=download&id=1Uz4GFb0XNxSSnmCxPUiCnSpVPludk8rV",
      "https://drive.google.com/uc?export=download&id=1Uz6zetWzH5kEyVytEjqvMA7NhnkVnNua",
      "https://drive.google.com/uc?export=download&id=1Uz6zetWzH5kEyVytEjqvMA7NhnkVnNua",
      "https://drive.google.com/uc?export=download&id=1VAHXHW11k6MILMtGyjYqBl16feitGS_-",
      "https://drive.google.com/uc?export=download&id=1Vbd87zlKLmoVddAj2iK-eSXWTTaU4xvJ",
      "https://drive.google.com/uc?export=download&id=1VW6ueu20F0utfRxfm-e1OjfVk1ciV6Ns",
      "https://drive.google.com/uc?export=download&id=1Vbd87zlKLmoVddAj2iK-eSXWTTaU4xvJ",
      "https://drive.google.com/uc?export=download&id=1Vbd87zlKLmoVddAj2iK-eSXWTTaU4xvJ",
      "https://drive.google.com/uc?export=download&id=1Vg65aSilurxAxj1VKtZ2PclLqjbcyN4U",
      "https://drive.google.com/uc?export=download&id=1W-8CyYIFu4Ku1qg_HSevRzDFyHZchMci",
      "https://drive.google.com/uc?export=download&id=1W-6LYqghQ82c6T51X1_kUaipQhlPycWz",
      "https://drive.google.com/uc?export=download&id=1Vx0yUVzAs4TQC0_JK4o9aPH9KpxYOlyZ",
      "https://drive.google.com/uc?export=download&id=1VqGOfDZL0d6ip6Q7zBFM9mO0ML_4kG_i",
      "https://drive.google.com/uc?export=download&id=1W-uPnoDy7kRoxmEGGXuhrtOUOjcqkpv5",
    ];

    const availableVideos = link.filter(video => !this.sentVideos.includes(video));

    if (availableVideos.length === 0) {
      this.sentVideos = [];
    
   } 
    const randomIndex = Math.floor(Math.random() * availableVideos.length);
    const randomVideo = availableVideos[randomIndex];

    this.sentVideos.push(randomVideo);
 
  {
     message.reply({
        body: 'Here,s your random memes video🐸',
        attachment: await global.utils.getStreamFromURL(randomVideo),
      },
     );
    }  
   },
 };

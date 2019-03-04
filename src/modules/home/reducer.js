export default function() {
  return {
    aboutUs: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
    in congue dolor, eu congue ligula. Interdum et malesuada fames
    ac ante ipsum primis in faucibus. Curabitur fringilla aliquam
    dignissim. Proin malesuada dolor id metus maximus bibendum.
    Donec dolor lorem, molestie sed efficitur eget, ornare posuere
    metus. Duis ligula nunc, semper non lobortis id, fringilla sit
    amet augue. Integer pharetra est enim, eu gravida magna
    ullamcorper sit amet. Quisque vulputate felis eu velit iaculis
    tempus. Suspendisse varius tempus ligula, vitae rhoncus eros
    gravida vitae. Phasellus scelerisque magna ipsum, in pharetra
    diam dignissim nec. Nam lacinia euismod diam. Pellentesque eu
    metus et turpis tincidunt bibendum sed a tellus.`
  };
}

export const getAboutUs = state => state.home.aboutUs;

// Function to load HTML content for all projects
async function loadProjectContent(dataVarName) {
    for (const project of dataVarName) {
        const htmlUrl = `/pages/novosti/inner-pages/${project.id}.html`;
        project.content = await fetchHTML(htmlUrl);
    }
}


// NEWS OBJECT
let newsData = [

    //  0 - pateka-za-digitalizacija  ////////////////////////////////////////////////////////////////////
    {
        id: "newsletter-pateka-za-digitalizacija",
        // za kartica
        thumbnail: "/src/img/cards/novosti/pateka za digitalizacija.png",
        naslov: "Newsletter на Проектот Патека за дигитализација",
        opis: "Го споделуваме 4-тиот Newsletter на проектот „Патека за дигитализација“, со клучни активности, успешни приказни и отворени повици за МСП од Северна Македонија, Косово и Србија.",
        datum: "12. 07. 2021г.",
        link: "/pages/novosti/news-template.html?id=newsletter-pateka-za-digitalizacija", // <- LINK DO STRANATA

        // ZA VNATRE HTML!
        content: `
            <p>Дополнителен текст за проектот.</p>
            <p>Ова е детален опис на проектот.</p>
        `
    },
    //  0 - END  ---------------------------------------------------------


    //  1 - digitalna-transformacija ////////////////////////////////////////////////////////////////////
    {
        id: "15-godishno-sobranie-na-masit",
        // za kartica
        thumbnail: "/src/img/cards/novosti/15-sobranie.png",
        naslov: "Петнаесетто годишно Собрание на МАСИТ",
        opis: "На 06.07.2021 се одржа 15-то годишно Собрание на МАСИТ, каде се разгледаа достигнувањата и важноста на новите членови за развојот на ИКТ секторот.",
        datum: "07. 07. 2021г.",
        link: "/pages/novosti/news-template.html?id=15-godishno-sobranie-na-masit", // <- LINK DO STRANATA

        // ZA VNATRE HTML!
        content: `
            <p>Дополнителен текст за проектот.</p>
            <p>Ова е детален опис на проектот.</p>
        `
    },
    //  1 - END  ---------------------------------------------------------


    //  2 - usaid-biznis-regulativa  ////////////////////////////////////////////////////////////////////
    {
        id: "prokredit-banka-i-masit",
        // za kartica
        thumbnail: "/src/img/cards/novosti/partnerstvo-2-1024x536.png",
        naslov: "Прокредит банка и МАСИТ во партнерство за заедничка поддршка на ИКТ секторот",
        opis: "ПроКредит Банка стана Патрон партнер на МАСИТ, продолжувајќи ја соработката за унапредување на ИКТ индустријата и понудата на поволности за ИКТ компании.",
        datum: "21. 05. 2021г.",
        link: "/pages/novosti/news-template.html?id=prokredit-banka-i-masit", // <- LINK DO STRANATA

        // ZA VNATRE HTML!
        content: `
                <p>Дополнителен текст за проектот.</p>
                <p>Ова е детален опис на проектот.</p>
            `
    },
    //  2 - END  ---------------------------------------------------------


    //  3 - mladi-hub  ////////////////////////////////////////////////////////////////////
    {
        id: "bozinovski-nov-patron",
        // za kartica
        thumbnail: "/src/img/cards/novosti/bozinovski.png",
        naslov: "Божиновски – нов патрон партнер на МАСИТ!",
        opis: "МАСИТ со гордост го најавува партнерството со Божиновски часовници и накит, бренд со 30-годишна традиција во луксуз и квалитет.",
        datum: "10. 12. 2024г.",
        link: "/pages/novosti/news-template.html?id=bozinovski-nov-patron", // <- LINK DO STRANATA

        // ZA VNATRE HTML!
        content: `
                <p>Дополнителен текст за проектот.</p>
                <p>Ова е детален опис на проектот.</p>
            `
    },
    //  3 - END  ---------------------------------------------------------

];



// extend news +100
let arrCounterNews = 0;
for (let i = 0; i < 100; i++) {

    // Clone the project
    let newNews = { ...newsData[arrCounterNews] };

    // Add the new project to the array
    newsData.push(newNews);

    arrCounterNews++;

    if (arrCounterNews > newsData.length) {
        arrCounterNews = 0;
    }
};
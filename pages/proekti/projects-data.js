// Function to load HTML content for all projects
async function loadProjectContent(dataVarName) {
    for (const project of dataVarName) {
        const htmlUrl = `/pages/proekti/inner-pages/${project.id}.html`;
        project.content = await fetchHTML(htmlUrl);
    }
}


// PROEKTI OBJECT
let projectsData = [

    //  0 - pateka-za-digitalizacija  ////////////////////////////////////////////////////////////////////
    {
        id: "pateka-za-digitalizacija",
        status: "current", // "current" or "finished"
        // za kartica
        thumbnail: "/src/img/cards/proekti/pateka za digitalizacija.png",
        naslov: "Патека за дигитализација",
        opis: "Проектот ги поддржува МСП во Македонија, Косово и Србија за дигитална трансформација преку развој на стратегии и имплементација на ИКТ решенија.",
        datum: "30. 08. 2021г.",
        link: "/pages/proekti/projects-template.html?id=pateka-za-digitalizacija", // <- LINK DO STRANATA

        // ZA VNATRE HTML!
        content: `
            <p>Дополнителен текст за проектот.</p>
            <p>Ова е детален опис на проектот.</p>`  // Placeholder for dynamic content
    },
    //  0 - END  ---------------------------------------------------------


    //  1 - digitalna-transformacija ////////////////////////////////////////////////////////////////////
    {
        id: "digitalna-transformacija",
        status: "current", // "current" or "finished"
        // za kartica
        thumbnail: "/src/img/cards/proekti/poddrshka.png",
        naslov: "Поддршка за дигитална трансформација во МСП",
        opis: "МАСИТ ќе спроведе проект за дигитална трансформација на МСП, создавајќи алатка за само-проценка и обезбедувајќи експертска анализа за креирање стратегии.",
        datum: "30. 08. 2021г.",
        link: "/pages/proekti/projects-template.html?id=digitalna-transformacija", // <- LINK DO STRANATA

        // ZA VNATRE HTML!
        content: `
            <p>Дополнителен текст за проектот.</p>
            <p>Ова е детален опис на проектот.</p>
        `
    },
    //  1 - END  ---------------------------------------------------------


    //  2 - usaid-biznis-regulativa  ////////////////////////////////////////////////////////////////////
    {
        id: "usaid-biznis-regulativa",
        status: "current", // "current" or "finished"
        // za kartica
        thumbnail: "/src/img/cards/proekti/proekt na usaid-biznis regulativa.png",
        naslov: "Проект на УСАИД – Партнерство за подобра бизнис регулатива",
        opis: "Проектот поддржува МСП во подобрување на законската усогласеност преку информативни сесии, ваучер шема, создавање платформа за дијалог и развој на интерактивни водичи и брошури.",
        datum: "30. 08. 2021г.",
        link: "/pages/proekti/projects-template.html?id=usaid-biznis-regulativa", // <- LINK DO STRANATA

        // ZA VNATRE HTML!
        content: `
                <p>Дополнителен текст за проектот.</p>
                <p>Ова е детален опис на проектот.</p>
            `
    },
    //  2 - END  ---------------------------------------------------------


    //  3 - mladi-hub  ////////////////////////////////////////////////////////////////////
    {
        id: "mladi-hub",
        status: "current", // "current" or "finished"
        // za kartica
        thumbnail: "/src/img/cards/proekti/mladi-hab.png",
        naslov: "МЛАДИ ХАБ – Дигитална младина",
        opis: "Проектот „MladiHUB – Дигитална младина“ е имплементиран од Националниот младински совет на Македонија (НМСМ) и Стопанската комора за информатички и комуникациски технологии – МАСИТ,а поддржан од Британската амбасада Скопје.",
        datum: "30. 08. 2021г.",
        link: "/pages/proekti/projects-template.html?id=mladi-hub", // <- LINK DO STRANATA

        // ZA VNATRE HTML!
        content: `
                <p>Дополнителен текст за проектот.</p>
                <p>Ова е детален опис на проектот.</p>
            `
    },
    //  4 - END  ---------------------------------------------------------

        //  3 - idealist  ////////////////////////////////////////////////////////////////////
        {
            id: "idealist",
            status: "current", // "current" or "finished"
            // za kartica
            thumbnail: "/src/img/cards/proekti/idealist.png",
            naslov: "Ideal-ist",
            opis: "Ideal-ist е меѓународна ИКТ Национална мрежа за контактни точки (NCP), што поддржува истражување и иновации во рамките на рамковните програми на ЕУ.",
            datum: "30. 08. 2021г.",
            link: "/pages/proekti/projects-template.html?id=idealist", // <- LINK DO STRANATA
    
            // ZA VNATRE HTML!
            content: `
                    <p>Дополнителен текст за проектот.</p>
                    <p>Ова е детален опис на проектот.</p>
                `
        },
        //  3 - END  ---------------------------------------------------------

];



// extend projects +10
let arrCounter = 0;
for (let i = 0; i < 10; i++) {

    // Clone the project
    const newProject = { ...projectsData[arrCounter] };

    // Set status to "finished"
    newProject.status = "finished";

    // Add the new project to the array
    projectsData.push(newProject);

    arrCounter++
    if (arrCounter > projectsData.length) {
        arrCounter = 0;
    }
};


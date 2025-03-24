// Function to load HTML content for all projects
async function loadProjectContent(dataVarName) {
    for (const project of dataVarName) {
        const htmlUrl = `/pages/publikacii/inner-pages/${project.id}.html`;
        project.content = await fetchHTML(htmlUrl);
    }
}



// PROEKTI OBJECT
let publicationsData = [

    //  0 - pateka-za-digitalizacija  ////////////////////////////////////////////////////////////////////
    {
        id: "porast-na-IKT-industrijata-za-2023-2",
        status: "current", // "current" or "finished"
        // za kartica
        thumbnail: "/src/img/cards/publikacii/porast 2023.png",
        naslov: "Нов пораст на ИКТ индустријата за 2023 година",
        opis: "Проектот ги поддржува МСП во Македонија, Косово и Србија за дигитална трансформација преку развој на стратегии и имплементација на ИКТ решенија.",
        datum: "30. 08. 2023г.",
        link: "/pages/publikacii/publications-template.html?id=porast-na-IKT-industrijata-za-2023-2", // <- LINK DO STRANATA

        // ZA VNATRE HTML!
        content: `
            <p>Дополнителен текст за проектот.</p>
            <p>Ова е детален опис на проектот.</p>
        `
    },
    //  0 - END  ---------------------------------------------------------


    //  1 - digitalna-transformacija ////////////////////////////////////////////////////////////////////
    {
        id: "porast-na-IKT-industrijata-2023",
        status: "current", // "current" or "finished"
        // za kartica
        thumbnail: "/src/img/cards/publikacii/naslov-2.png",
        naslov: "Забележан пораст на ИКТ индустријата",
        opis: "Согласно последните податоци, ИКТ индустријата повторно бележи значаен раст и покрај еконосмката криза.",
        datum: "30. 08. 2023г.",
        link: "/pages/publikacii/publications-template.html?id=porast-na-IKT-industrijata-2023", // <- LINK DO STRANATA

        // ZA VNATRE HTML!
        content: `
            <p>Дополнителен текст за проектот.</p>
            <p>Ова е детален опис на проектот.</p>
        `
    },
    //  1 - END  ---------------------------------------------------------


    //  2 - usaid-biznis-regulativa  ////////////////////////////////////////////////////////////////////
    {
        id: "sporedba-na-porast-vo-poslednite-4-godini",
        status: "current", // "current" or "finished"
        // za kartica
        thumbnail: "/src/img/cards/publikacii/ikt-porast-4-god.png",
        naslov: "Споредба на порастот во ИКТ индустријата во последните четири години",
        opis: "ИКТ индустријата несомнено е најбрзорастечка индустрија, која дури и во период на економска криза бележи значаен раст.",
        datum: "30. 08. 2021г.",
        link: "/pages/publikacii/publications-template.html?id=sporedba-na-porast-vo-poslednite-4-godini", // <- LINK DO STRANATA

        // ZA VNATRE HTML!
        content: `
                <p>Дополнителен текст за проектот.</p>
                <p>Ова е детален опис на проектот.</p>
            `
    },
    //  2 - END  ---------------------------------------------------------


    //  3 - mladi-hub  ////////////////////////////////////////////////////////////////////
    {
        id: "sporedba-prosechna-bruto-plata",
        status: "current", // "current" or "finished"
        // za kartica
        thumbnail: "/src/img/cards/publikacii/prosechna-vs-bruto.png",
        naslov: "Споредба на порастот на просечна бруто плата со пораст на бруто плата во ИТ индустријата",
        opis: "Во декември 2021, просечната бруто плата во ИТ секторот изнесувала 120.253 МКД, 2,6 пати повеќе од општиот просек (44.711 МКД), со годишен раст од 9,7%.",
        datum: "30. 08. 2021г.",
        link: "/pages/publikacii/publications-template.html?id=sporedba-prosechna-bruto-plata", // <- LINK DO STRANATA

        // ZA VNATRE HTML!
        content: `
                <p>Дополнителен текст за проектот.</p>
                <p>Ова е детален опис на проектот.</p>
            `
    },
    //  3 - END  ---------------------------------------------------------

];



// extend publications +30
let arrCounterPublications = 0;
for (let i = 0; i < 30; i++) {

    // Clone the project
    const newProject = { ...publicationsData[arrCounterPublications] };

    // Add the new project to the array
    publicationsData.push(newProject);

    arrCounterPublications++
    if (arrCounterPublications > publicationsData.length) {
        arrCounterPublications = 0;
    }
};
// Function to import all files from a directory.
function importAll(targetContext) {
    const files = {};
    targetContext.keys().forEach((item) => {
        files[item.replace(/.\/|.jpeg/gi, '')] = targetContext(item).default;
    });
    return files;
}

const charImagesContext = require.context('../i/characters', false, /\.jpeg$/);
const charImages = importAll(charImagesContext);

const CHARACTERS = [
    { name: 'Emma Nelson', series: ['DTNG'] },
    { name: 'Manny Santos', series: ['DTNG'] },
    { name: 'Liberty Van Zandt', series: ['DTNG'] },
    { name: 'Jimmy Brooks', series: ['DTNG'] },
    { name: 'Terri MacGregor', series: ['DTNG'] },
    { name: 'Ashley Kerwin', series: ['DTNG'] },
    { name: 'Toby Isaacs', series: ['DTNG'] },
    { name: 'Spinner Mason', series: ['DTNG'] },
    { name: 'J.T. Yorke', series: ['DTNG'] },
    { name: 'Paige Michalchuk', series: ['DTNG'] },
    { name: 'Sean Cameron', series: ['DTNG'] },
    { name: 'Craig Manning', series: ['DTNG'] },
    { name: 'Hazel Aden', series: ['DTNG'] },
    { name: 'Marco Del Rossi', series: ['DTNG'] },
    { name: 'Ellie Nash', series: ['DTNG'] },
    { name: 'Joey Jeremiah', series: ['DJH'] },
    { name: 'Caitlin Ryan', series: ['DJH'] },
    { name: 'Snake', series: ['DJH'] },
    { name: 'Lucy Fernandez', series: ['DJH'] },
    { name: 'Wheels', series: ['DJH'] },
    { name: 'Stephanie Kaye', series: ['DJH'] },
    { name: 'Arthur Kobalewscuy', series: ['DJH'] },
    { name: 'Yick Yu', series: ['DJH'] },
    { name: 'Shane McKay', series: ['DJH'] },
    { name: 'Erica Farrell', series: ['DJH'] },
    { name: 'Heather Farrell', series: ['DJH'] },
    { name: 'Melanie Brodie', series: ['DJH'] },
    { name: 'Kathleen Mead', series: ['DJH'] },
    { name: 'Spike', series: ['DJH'] },
    { name: 'L.D. Delacorte', series: ['DJH'] },
];

CHARACTERS.forEach((char) => {
    const spaceIndex = char.name.indexOf(' ');
    const firstName =
        spaceIndex !== -1
            ? char.name.slice(0, spaceIndex).toLowerCase()
            : char.name.toLowerCase();
    char.img = charImages[firstName];
});

export default CHARACTERS;

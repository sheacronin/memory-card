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
    { name: 'Emma Nelson', img: charImages.emma, series: ['DTNG'] },
    { name: 'Manny Santos', img: charImages.manny, series: ['DTNG'] },
    { name: 'Liberty Van Zandt', img: charImages.liberty, series: ['DTNG'] },
    { name: 'Jimmy Brooks', img: charImages.jimmy, series: ['DTNG'] },
    { name: 'Terri MacGregor', img: charImages.terri, series: ['DTNG'] },
    { name: 'Ashley Kerwin', img: charImages.ashley, series: ['DTNG'] },
    { name: 'Toby Isaacs', img: charImages.toby, series: ['DTNG'] },
    { name: 'Spinner Mason', img: charImages.spinner, series: ['DTNG'] },
    { name: 'J.T. Yorke', img: charImages.jt, series: ['DTNG'] },
    { name: 'Paige Michalchuk', img: charImages.paige, series: ['DTNG'] },
    { name: 'Sean Cameron', img: charImages.sean, series: ['DTNG'] },
    { name: 'Craig Manning', img: charImages.craig, series: ['DTNG'] },
    { name: 'Hazel Aden', img: charImages.hazel, series: ['DTNG'] },
    { name: 'Marco Del Rossi', img: charImages.marco, series: ['DTNG'] },
    { name: 'Ellie Nash', img: charImages.ellie, series: ['DTNG'] },
    { name: 'Joey Jeremiah', img: '#', series: ['DJH'] },
    { name: 'Caitlin Ryan', img: '#', series: ['DJH'] },
    { name: 'Snake', img: '#', series: ['DJH'] },
    { name: 'Lucy Fernandez', img: '#', series: ['DJH'] },
    { name: 'Wheels', img: '#', series: ['DJH'] },
    { name: 'Stephanie Kaye', img: '#', series: ['DJH'] },
];

export default CHARACTERS;

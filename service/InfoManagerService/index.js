let ImageList = [];

export async function AddImageForProfile(uriImage) {
    let image = {
        id: generateRandomId(),
        imageURI: uriImage
    };
    ImageList.push(image);
}

export async function FindImageProfile(uriImage) {
    for (let i = 0; i < ImageList.length; i++) {
        if (ImageList[i].imageURI === uriImage) {
            return ImageList[i];
        }
    }
    return null;
}

function generateRandomId() {
    return Math.random().toString(36).substr(2, 4);
}

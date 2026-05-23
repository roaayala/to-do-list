function saveToStorage(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
}

function getFromStorage(key, data) {
    try {
        const stringData = localStorage.getItem(key);

        if (!stringData) {
            return null;
        }

        return JSON.parse(stringData);
    } catch {
        return null;
    }
}

export { saveToStorage, getFromStorage };

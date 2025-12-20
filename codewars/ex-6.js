// https://www.codewars.com/kata/52449b062fb80683ec000024/train/javascript

function generateHashtag(str) {
    const res =
        '#' +
        str
            .trim()
            .split(/\s+/)
            .filter(Boolean)
            .map(w => w[0].toUpperCase() + w.slice(1).toLowerCase())
            .join('');

    return res.length > 1 && res.length <= 140 ? res : false;
}

const IMAGE_HOST = 'https://r29-scenic.s3.amazonaws.com/images';
const IMAGE_COUNT = 6;
const IMAGE_FORMAT = 'jpg';

const buildImageURL = (index) => `${IMAGE_HOST}/${index}.${IMAGE_FORMAT}`;

const convertIndexToPicObj = (index) => ({ src: buildImageURL(index) });

const getIndices = (end) => new Array(end).fill().map((_, idx) => 1 + idx);

const imageFetch = () => getIndices(IMAGE_COUNT).map(convertIndexToPicObj);

export default imageFetch;

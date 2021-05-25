export const createArrayForGallery = (tokenInfo) => {
  const clothesPhotos = [];
  const imagePrefixWithoutAnimation = 'image_';
  let exceptImage = '';

  if (!tokenInfo) {
    return clothesPhotos;
  }

  if (tokenInfo.animation_url) {
    exceptImage = 'image';
    clothesPhotos.push({
      isMain: true,
      isVideo: true,
      video: tokenInfo.animation_url,
      preview: tokenInfo.image,
    });
  } else if (tokenInfo.animation) {
    exceptImage = 'image';
    clothesPhotos.push({
      isMain: true,
      isVideo: true,
      video: tokenInfo.animation,
      preview: tokenInfo.image,
    });
  } else if (tokenInfo.image) {
    exceptImage = 'image';
    clothesPhotos.push({
      isMain: true,
      isGif: true,
      image: tokenInfo.image,
      preview: tokenInfo.image,
    });
  } else if (tokenInfo.image_front_url) {
    exceptImage = 'image_front_url';
    clothesPhotos.push({
      isMain: true,
      image: tokenInfo.image_front_url,
      preview: tokenInfo.image_front_url,
    });
  } else {
    const firstFoundImageKey = Object.keys(tokenInfo).find(
      (objectKey) => objectKey.search(imagePrefixWithoutAnimation) !== -1 && tokenInfo[objectKey]
    );

    if (firstFoundImageKey) {
      exceptImage = firstFoundImageKey;
      clothesPhotos.push({
        isMain: true,
        image: tokenInfo[firstFoundImageKey],
        preview: tokenInfo[firstFoundImageKey],
      });
    }
  }

  Object.keys(tokenInfo).forEach((objectKey) => {
    if (
      objectKey.search(imagePrefixWithoutAnimation) !== -1 &&
      tokenInfo[objectKey] &&
      exceptImage !== objectKey &&
      objectKey !== 'animation_url'
    ) {
      clothesPhotos.push({
        image: tokenInfo[objectKey],
        preview: tokenInfo[objectKey],
      });
    }
  });

  return clothesPhotos;
};

export const getImageForCardProduct = (tokenInfo) => {
  if (!tokenInfo) {
    return [null, false];
  }

  if (tokenInfo.image_front_url) {
    return [tokenInfo.image_front_url, false];
  }

  if (tokenInfo.animation_url) {
    return [tokenInfo.animation_url, true];
  }

  const imagePrefixWithoutAnimation = 'image_';
  const firstFoundImageKey = Object.keys(tokenInfo).find(
    (objectKey) => objectKey.search(imagePrefixWithoutAnimation) !== -1 && tokenInfo[objectKey]
  );

  if (firstFoundImageKey) {
    return [tokenInfo[firstFoundImageKey], false];
  }

  if (tokenInfo.image) {
    return [tokenInfo.image, false];
  }

  return [null, false];
};

export const getDesignerName = (tokenInfo) => {
  if (!tokenInfo || !tokenInfo.attributes) {
    return '';
  }
  const designer = tokenInfo.attributes.find((item) => item.trait_type === 'Designer');
  if (!designer) {
    return '';
  }
  return designer.value;
};

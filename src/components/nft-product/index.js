import React, { useMemo } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import kebabCase from 'lodash.kebabcase';
import SmallPhotoWithText from '@components/small-photo-with-text';
import { getDesignerInfoByName } from '@selectors/designer.selectors';
import { create2KURL } from '@services/imgix.service';
import { getImageForCardProduct, getDesignerName } from '@helpers/photo.helpers';
import { useTokenInfo } from '@hooks/token.info.hooks';
// import ImportantNFTInformation from '@containers/important-nft-information';

import styles from './styles.module.scss';

const NFTProduct = ({ name, nft, nftId }) => {
  if (!nft || nftId === -1) {
    return null;
  }

  const tokenInfo = useTokenInfo(nft.tokenUri, [nft.tokenUri]);
  const nftName = useMemo(() => (tokenInfo ? tokenInfo.name : 'Digitalax'), [tokenInfo]);
  const [imageUrl, isVideo] = getImageForCardProduct(tokenInfo);
  const designerName = getDesignerName(tokenInfo);
  const designerInfo = useSelector(getDesignerInfoByName(designerName, true));

  return (
    <li className={cn(styles.item)}>
      <Link href="#">
        <a className={styles.clothesName}>{nftName}</a>
      </Link>
      <SmallPhotoWithText
        className={styles.designerWrapper}
        id={designerInfo ? kebabCase(designerInfo.designerName) : ''}
        name={designerInfo?.designerName}
        photo={designerInfo?.designerPhoto}
        photoIsLink
      />
      <div className={styles.card}>
        <div className={styles.imageWrapper}>
          <Link href="#">
            <a className={styles.clothesPhotoWrapper}>
              {imageUrl &&
                (isVideo ? (
                  <video autoPlay muted loop className={styles.clothesPhoto} key={imageUrl}>
                    <source src={imageUrl} type="video/mp4" />
                  </video>
                ) : (
                  <img className={styles.clothesPhoto} src={create2KURL(imageUrl)} alt={nftId} />
                ))}
            </a>
          </Link>
        </div>

        {/* <ImportantNFTInformation nft={nft} nftId={nftId} /> */}
      </div>
    </li>
  );
};

NFTProduct.propTypes = {
  nft: PropTypes.object.isRequired,
  nftId: PropTypes.number,
};

NFTProduct.defaultProps = {
  nftId: -1,
};

export default NFTProduct;

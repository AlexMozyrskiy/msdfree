import { FC } from 'react';

import UploadButton from './frames/UploadButton';
import UploadFact from './frames/UploadFact';
import UploadInfo from './frames/UploadInfo';

import st from './index.module.scss';

const Upload: FC = () => {
  return (
    <section className={st.uploadTag}>
      <div className={st.uploadTag__button}>
        <UploadButton />
      </div>

      <div className={st.uploadTag__info}>
        <UploadInfo />
      </div>

      <div className={st.uploadTag__fact}>
        <UploadFact />
      </div>
    </section>
  );
};

export default Upload;

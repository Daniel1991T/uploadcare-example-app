import * as LR from "@uploadcare/blocks";
import { PACKAGE_VERSION } from "@uploadcare/blocks";

LR.registerBlocks(LR);

const ImagesUploader = () => {
  return (
    <div>
      <lr-config
        ctx-name="my-uploader"
        class="my-config"
        pubkey="13d0770ea667ccd512dc"
        maxLocalFileSizeBytes={10000000}
        multipleMax={3}
        sourceList="local, url, dropbox"
      />

      <lr-file-uploader-regular
        ctx-name="my-uploader"
        class="my-config"
        css-src={`https://cdn.jsdelivr.net/npm/@uploadcare/blocks@${PACKAGE_VERSION}/web/lr-file-uploader-regular.min.css`}
      />

      <lr-upload-ctx-provider class="my-config" ctx-name="my-uploader" />
    </div>
  );
};
export default ImagesUploader;

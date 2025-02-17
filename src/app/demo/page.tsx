import styles from "./demoPage.module.css";
import Image from "next/image";
import demoOboarding from "/public/images/demoOnboarding.png"

export default function Demo() {
  return (
    <div className={styles.main}>
      <div className={styles.imageSection}>
        <Image
          src={demoOboarding}
          alt="Product demonstration"
          fill
          style={{ objectFit: 'cover' }}
          priority
        />
      </div>
      <div className={styles.body}>
        <div className={styles.titleSection}>
          <div>Make your product go viral</div>
          <div>Let's start with a few details</div>
        </div>
        <form className={styles.formContainer}>
          <div className={styles.inputGroup}>
            <label htmlFor="productLink">Product Link</label>
            <span className={styles.helperText}>
              Currently we only support Amazon links
            </span>
            <input type="url" id="productLink" className={styles.input} />
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="brandLink">Brand Link</label>
            <input type="url" id="brandLink" className={styles.input} />
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="mediaFiles">Media Library</label>
            <span className={styles.helperText}>
              Upload your media library with talking heads, product images and
              videos for AI-generated script matching
            </span>
            <div className={styles.uploadArea}>
              <input
                type="file"
                id="mediaFiles"
                multiple
                accept="image/*,video/*"
                className={styles.fileInput}
              />
              <div className={styles.uploadText}>
                Drop your media files here or click to browse
              </div>
            </div>
          </div>

          <button type="submit" className={styles.submitButton}>
            Generate Ad
          </button>
        </form>
      </div>
    </div>
  );
}

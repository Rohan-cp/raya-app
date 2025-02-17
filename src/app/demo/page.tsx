"use client";

import styles from "./demoPage.module.css";
import Image from "next/image";
import demoOboarding from "/public/images/demoOnboarding.png";
import SpaceAILogo from "@/components/Icons/SpaceAILogo";
import { useState, FormEvent, ChangeEvent } from "react";

interface FormState {
  productLink: string;
  brandLink: string;
  mediaFiles: FileList | null;
}

export default function Demo() {
  const [formData, setFormData] = useState<FormState>({
    productLink: "",
    brandLink: "",
    mediaFiles: null,
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value, files } = e.target;

    if (id === "mediaFiles" && files) {
      setFormData((prev) => ({
        ...prev,
        mediaFiles: files,
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [id]: value,
      }));
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  return (
    <div className={styles.main}>
      <div className={styles.logoContainer}>
        <SpaceAILogo />
      </div>
      <div className={styles.imageSection}>
        <Image
          src={demoOboarding}
          alt="Product demonstration"
          fill
          style={{ objectFit: "cover" }}
          priority
        />
      </div>
      <div className={styles.body}>
        <div className={styles.titleSection}>
          <div>Make your product go viral</div>
          <div className={styles.secondaryText}>
            Let's start with a few details
          </div>
        </div>
        <form className={styles.formContainer} onSubmit={handleSubmit}>
          <div className={styles.inputGroup}>
            <label htmlFor="productLink">Amazon Product Link</label>
            <input
              type="url"
              id="productLink"
              className={styles.input}
              value={formData.productLink}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="brandLink">Brand Link</label>
            <input
              type="url"
              id="brandLink"
              className={styles.input}
              value={formData.brandLink}
              onChange={handleInputChange}
              required
            />
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
                onChange={handleInputChange}
              />
              <div className={styles.uploadText}>
                {formData.mediaFiles && formData.mediaFiles.length > 0
                  ? `${formData.mediaFiles.length} files selected`
                  : "Drop your media files here or click to browse"}
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

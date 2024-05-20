import styles from './PhotoSections.module.css';

type PhotoSectionsProps = {
  // Define your props here
};

export function PhotoSections() {
  return (
    <section className={styles.container}>
      <div>
        <p>Description</p>
      </div>
      <div>
        <p>Photo</p>
      </div>
    </section>
  );
}

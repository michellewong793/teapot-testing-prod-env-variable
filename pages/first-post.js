import styles from "../styles/aboutUs.module.css";

function About() {
  return (
    <div className={`${styles.card}`}>
      <h2 className={styles.header}> How it works</h2>
      <p className={styles.indent}>
        You submit a review of your shitty company. You can be honest and
        include however many details you’d like to include.{" "}
      </p>
      <p className={styles.indent}>
        We’ll paraphrase your review with AI in a way that preserves your
        sentiment. Then it will be instantly dumped into a melting pot of other
        AI-written reviews. <br />
        Then, AI will create a synthesis based on this potpourri of reviews.{" "}
        <br /> The whole thing is done without any human intervention. A code
        script will be run only when at least 3 reviews are deposited.
      </p>
      <p>What this means is that, </p>
      <ol className={styles.indent}>
        <li>
          No human will ever read your raw review. So don’t worry about your
          NDA.
        </li>{" "}
        <li>
          The final AI-generated review will capture the sentiments of the
          collective, call it a qualitative average if you’d like!
        </li>{" "}
        <li>
          The AI-generated reviews will be the only thing ever read by other
          humans and ever made public.
        </li>{" "}
      </ol>
      <img src="AIwhite.png" className={styles.resize} alt="vercel.svg" />
    </div>
  );
}
export default About;

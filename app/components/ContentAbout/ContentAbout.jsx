"use client";
import SkillsCard from "../SkillsCard/SkillsCard";

import style from "./styles/ContentAbout.module.css";

const ContentAbout = ({ title, isNavOpen, isMobile }) => {
  return (
    <main
      className={
        isNavOpen && isMobile
          ? style["content-container-mobile"]
          : style["content-container"]
      }>
      <h1>{title}</h1>
      <section className={style["graph-container"]}>
        <div>
          <p>
            Welcome to my portfolio site! I&#39;m a self-taught frontend
            developer with a passion for delivering useful and stunning web
            projects. Specializing in building web applications and websites
            using React and Next.js, I strive to bring creativity and
            functionality together to deliver exceptional user experiences.
          </p>
        </div>
        <div className={style["skills-graph"]}>
          <h2 className={style["skills-graph-title-left"]}>Code</h2>
          <div className={style["skills-graph-container"]}>
            <SkillsCard
              className={style["skill-card"]}
              percentage="80"
              number="80"
              skill="HTML"
              stroke={"--stroke-color-violet"}
            />
            <SkillsCard
              className={style["skill-card"]}
              percentage="75"
              number="75"
              skill="CSS"
              stroke={"--stroke-color-violet"}
            />
          </div>
        </div>
        <div>
          <p>
            My journey in web development began with a desire to learn. Through
            grit, determination, and countless hours of self-study and hands-on
            projects, I have honed my skills to become proficient in the latest
            frontend technologies. React has become my go-to frontend library
            for its flexibility, component-based architecture, and vast
            ecosystem. Next.js, with its seamless server-side rendering
            capabilities and optimized performance relative to routing and
            fetching APIs, has proven to be an invaluable tool in my development
            arsenal.
          </p>
          <p>
            With every project, my goal is to transform ideas into visually
            appealing and intuitive interfaces. I have a keen eye for design and
            a growing understanding of user experience principles, allowing me
            to create websites that not only look great but also provide
            seamless navigation and functional interaction.
          </p>
        </div>
        <div className={style["skills-graph"]}>
          <h2 className={style["skills-graph-title-right"]}>Tools</h2>
          <div className={style["skills-graph-container"]}>
            <SkillsCard
              percentage="55"
              number="55"
              skill="React"
              stroke={"--stroke-color-blue"}
            />
            <SkillsCard
              percentage="35"
              number="35"
              skill="Nextjs"
              stroke={"--stroke-color-blue"}
            />
          </div>
        </div>
        <div>
          <p>
            Collaboration is a vital aspect of my work ethic. I love working
            closely with clients and stakeholders, understanding their goals and
            translating them into tangible results. I believe in the power of
            effective communication and maintaining a transparent and iterative
            approach throughout the development process.
          </p>
          <p>
            In addition to my technical expertise, I value continuous learning
            and keeping up with industry trends. I am always eager to expand my
            skill set and explore new tools and frameworks that enhance my
            ability to create exceptional web experiences.
          </p>
          <p>
            Feel free to explore my portfolio and browse through my projects to
            get a sense of my work. If you have a project in mind or would like
            to discuss a collaboration opportunity, I would be thrilled to hear
            from you. Let&#39;s bring your ideas to life and create something
            amazing together!
          </p>
        </div>
        <div className={style["skills-graph"]}>
          <h2 className={style["skills-graph-title-left"]}>Skills</h2>
          <div className={style["skills-graph-container"]}>
            <SkillsCard
              percentage="40"
              number="40"
              skill="Design"
              stroke={"--stroke-color-rouge"}
            />
            <SkillsCard
              percentage="55"
              number="55"
              skill="Animation"
              stroke={"--stroke-color-rouge"}
            />
          </div>
        </div>
      </section>

      {/* <section className={style["skills-section"]}>
        <h2 className={style["skills-title"]}>Code</h2>
        <div className={style["skills-container"]}>
          <SkillsCard
            className={style["skill-card"]}
            percentage="80"
            skill="HTML"
          />
          <SkillsCard
            className={style["skill-card"]}
            percentage="75"
            skill="CSS"
          />
          <SkillsCard
            className={style["skill-card"]}
            percentage="65"
            skill="JavaScript"
          />
          <SkillsCard
            className={style["skill-card"]}
            percentage="30"
            skill="TypeScript"
          />
        </div>
      </section> */}
    </main>
  );
};

export default ContentAbout;

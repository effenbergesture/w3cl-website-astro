import { Project, Section } from 'astro-boilerplate-components';

const ProjectList = () => (
  <Section title={<>Stake now</>}>
    <div className="flex flex-col gap-6">
      <Project
        name="Project 1"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        bibendum. Nunc non posuere consectetur, justo erat semper enim, non
        hendrerit dui odio id enim."
        link="/"
        img={{
          src: '/assets/images/project-web-design.png',
          alt: 'Project Web Design',
        }}
        // category={
        //   <>
        //     <Tags color={ColorTags.FUCHSIA}>Astro.js</Tags>
        //     <Tags color={ColorTags.LIME}>Web design</Tags>
        //     <Tags color={ColorTags.SKY}>Tailwind.css</Tags>
        //     <Tags color={ColorTags.ROSE}>TypeScript</Tags>
        //   </>
        // }
      />
    </div>
  </Section>
);
const FutureList = () => (
  <Section title={<>Plans for future</>}>
    <div className="flex flex-col gap-6">
      <Project
        name="Project 1"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        bibendum. Nunc non posuere consectetur, justo erat semper enim, non
        hendrerit dui odio id enim."
        link="/"
        img={{
          src: '/assets/images/project-web-design.png',
          alt: 'Project Web Design',
        }}
        // category={
        //   <>
        //     <Tags color={ColorTags.FUCHSIA}>Astro.js</Tags>
        //     <Tags color={ColorTags.LIME}>Web design</Tags>
        //     <Tags color={ColorTags.SKY}>Tailwind.css</Tags>
        //     <Tags color={ColorTags.ROSE}>TypeScript</Tags>
        //   </>
        // }
      />
    </div>
  </Section>
);
export { FutureList, ProjectList };

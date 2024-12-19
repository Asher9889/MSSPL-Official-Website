import ContentWrapper from "../contentWrapper/ContentWrapper";
import { requirement_analysis } from "../../assets";
const RequirementAnalysis = () => {
  return (
    <div className="w-full documentation-container py-20">
      <ContentWrapper>
        <h1 className="poppins-bold text-[--main-text-color] text-center text-[1rem] md:text-[2rem]">{"Requirement Analysis Steps while Developing Software:".toUpperCase()}
        </h1>
        <img className="w-[80vw] mx-auto py-10" src={requirement_analysis} alt="" />
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">
            Research on Application Requirements
          </h2>
          <p className="text-base text-gray-700">
            This document includes the URLs that are the web application and
            similar to the current project, which will be used to elicit the
            requirements. It also contains the necessary user name and password
            for the research sites, along with the research report where
            required. This type of document can also include the user
            questionnaire interviews if necessary.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">
            Research on Technical Issues [Developer View]
          </h2>
          <p className="text-base text-gray-700">
            This section covers technical issues that developers will need to
            consider, focusing on the developer’s perspective and resolving
            challenges related to the application.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">
            Application Basic Features [User View ? Top Level]
          </h2>
          <p className="text-base text-gray-700">
            This document includes the basic key features for the current
            project. It describes the application from a top-level perspective
            so that anyone can understand the system quickly and easily. It also
            helps developers articulate the development process early in the
            project.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">
            Use Cases [User/Developer View ? Top Level]
          </h2>
          <p className="text-base text-gray-700">
            This section includes text and diagrams illustrating how all the
            application features and sub-features interact at various stages of
            usage and workflow. It helps both the user and the developer
            understand and identify the system processes at a high level.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">
            User Interface Specification [User/Developer View ? Mid Level]
          </h2>
          <p className="text-base text-gray-700">
            This document is useful when building the application. It provides
            the client with an initial understanding of the system and helps
            confirm whether all required features are included. You can use
            wireframes (e.g., Microsoft doc) or static HTML layouts to
            illustrate the UI.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">
            User Requirements Specification [User/Developer View ? Low Level]
          </h2>
          <p className="text-base text-gray-700">
            This document provides detailed specifications for the application,
            describing in depth the basic features that were previously
            identified.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Architecture</h2>
          <ul className="list-disc ml-5 text-base text-gray-700">
            <li>
              <strong>Security model</strong>
            </li>
            <li>
              <strong>Skinning and page settings</strong>
            </li>
            <li>
              <strong>Global data transfer among pages</strong>
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">
            Identifying the Modules & Module Boundaries [Top Level]
          </h2>
          <p className="text-base text-gray-700">
            This section describes the core modules that will be developed,
            especially useful for large-scale projects. It defines the system
            boundaries and helps integrate the modules, making the future
            development process more requirement-specific.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">
            Data Fields [User/Developer View ? Low Level]
          </h2>
          <p className="text-base text-gray-700">
            The data fields of the application are identified in this step. This
            includes validating the database schema, relations, and data fields
            with the client to ensure all required fields are captured in the
            requirements.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">
            Time Estimation [Manager View]
          </h2>
          <ul className="list-disc ml-5 text-base text-gray-700">
            <li>
              <strong>According to modules</strong>
            </li>
            <li>
              <strong>According to development steps</strong>
            </li>
            <li>
              <strong>According to developer expert level</strong>
            </li>
            <li>
              <strong>
                According to logical tiers (as well as level of engineering)
              </strong>
            </li>
          </ul>
        </section>
      </ContentWrapper>
    </div>
  );
};

export default RequirementAnalysis;

import './style.css';
import React from 'react';
function AnimatedComponent() {
    const [hover, setHover] = React.useState(false);

    const handleMouseEnter = () => setHover(true);
    const handleMouseLeave = () => setHover(false);

    return (
        <div
            className={hover ? 'colorChange' : ''}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            id="wabro"
        >
            It's an electronic or online library where one can have access to books,journals,novels,articles,or any other information over net.
            Additional Information
            Either general reader or a research scholar may have access to a number of e-libraries sitting at home itself.
            Now the academic libraries are shifting to the traditional print resources into e-resource and maintain as Institutional repository. Those resources are theses and dissertations and other innovative academicelibrary

            work done by faculty or students. There sources of institutional repository are distributing via internet or intranet to

            its user community. The benefits of e-library for the following:

            When using electronic information sources lot of benefits are obtain by the users that they are:<br />
            <br />
            *) E-libraries are the best tool for providing online resources for research which will make easy to its users.<br />
            *) Retrospective search is easy and most convenient than print resource.<br />
            *) Literacy is increases when searching made by the educators.<br />
            *) Searching of index is also easy.<br />
            *) It supports for searching with the combination of keyword.<br />
            *) While searching made by patrons for their project to retrieve a manageable amount of content, quickly and easily.<br />
            *) Provision for simultaneous access of multiple file.<br />
            *) E-libraries facilitate to its patrons for research solution.
            *) Provision for print out and saved the down load items for future references.<br />
            *) The distance learners are also searching their requirement from e-library.<br />
            *) E-Library provides the benefit to integrated search to dictionary, encyclopedia, almanacs, and etc. through the reference desk.<br />
            *) The simplest functionality like Point-and-click promotes the users interest.<br />
        </div>
    );
}

export default AnimatedComponent;
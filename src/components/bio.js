import React from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image';

const useBioData = () => {
  const data = useStaticQuery(
    graphql`
      query BioQuery {
        img: file(relativePath: { eq: "pic.jpg" }) {
          childImageSharp {
            fixed(width: 90, height: 90) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        site {
          siteMetadata {
            author
          }
        }
      }
    `,
  );
  return data;
};

const BioWrapper = styled.div`
  @media (min-width: 500px) {
    display: flex;
  }
`;

const BioImgWrapper = styled.div`
  flex: 0;
  margin-right: 1rem;
  margin-bottom: 0.5rem;
`;

const BioTextWrapper = styled.div`
  flex: 1;
`;

const Bio = () => {
  const data = useBioData();
  return (
    <BioWrapper>
      <BioImgWrapper>
        <Image
          fixed={data.img.childImageSharp.fixed}
          alt={data.site.siteMetadata.author}
          imgStyle={{
            borderRadius: '50%',
          }}
        />
      </BioImgWrapper>
      <BioTextWrapper>
        <p>
          <span>Hi I&#39;m Ryan. I am a Software Developer at IBM working on </span>
          <a
            href="https://cloud.ibm.com/catalog/services/voice-agent-with-watson"
            target="_blank"
            rel="noopener noreferrer"
          >
            Voice Agent with Watson
          </a>
          <span>
            {' '}
            for IBM Cloud. I majored in Computer Science at Western University where I graduated
            from in April of 2019.
          </span>
        </p>
        <p>
          <span>You can find my resume </span>
          <a href="#">here</a>
          <span> and some of my past projects are avaliable </span>
          {' '}
          <a href="https://github.com/rzgry" target="_blank" rel="noopener noreferrer">
            here
          </a>
          .
        </p>
      </BioTextWrapper>
    </BioWrapper>
  );
};

export default Bio;

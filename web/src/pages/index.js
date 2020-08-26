import React from 'react';
import { graphql } from 'gatsby';
import {
  mapEdgesToNodes,
  filterOutDocsWithoutSlugs,
  filterOutDocsPublishedInTheFuture,
} from '../lib/helpers';
import BlogPostPreviewList from '../components/blog-posts/blog-post-preview-list';
import Container from '../components/container/container';
import GraphQLErrorList from '../components/graphql-error-list';
import SEO from '../components/seo/seo';
import Layout from '../containers/layout';
import styles from './index.module.css';

export const query = graphql`
  fragment SanityImage on SanityMainImage {
    crop {
      _key
      _type
      top
      bottom
      left
      right
    }
    hotspot {
      _key
      _type
      x
      y
      height
      width
    }
    asset {
      _id
    }
  }

  query IndexPageQuery {
    site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
      title
      description
      keywords
    }
    posts: allSanityPost(
      limit: 3
      sort: { fields: [publishedAt], order: DESC }
      filter: { slug: { current: { ne: null } }, publishedAt: { ne: null } }
    ) {
      edges {
        node {
          id
          publishedAt
          mainImage {
            ...SanityImage
            alt
          }
          title
          _rawExcerpt
          slug {
            current
          }
        }
      }
    }
  }
`;

const IndexPage = (props) => {
  const { data, errors } = props;

  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    );
  }

  const site = (data || {}).site;
  const postNodes = (data || {}).posts
    ? mapEdgesToNodes(data.posts)
        .filter(filterOutDocsWithoutSlugs)
        .filter(filterOutDocsPublishedInTheFuture)
    : [];

  if (!site) {
    throw new Error(
      'Missing "Site settings". Open the studio at http://localhost:3333 and add some content to "Site settings" and restart the development server.'
    );
  }

  return (
    <Layout>
      <SEO title={site.title} description={site.description} keywords={site.keywords} />
      <div className={styles.mainContent}>
        Welcome to my corner of the Internet! My name is Caleb Hagner. You can{' '}
        <a href='https://github.com/Cal-Hagner' target='_blank' rel='noreferrer'>
          check out my work on GitHub
        </a>
        , <a href='mailto:caleb.hagner@pm.me'>send me a quick email</a>, or{' '}
        <a href='/archive/'>read some of my scribbled thoughts</a>.
      </div>
      <Container>
        {postNodes && (
          <BlogPostPreviewList title='Latest posts' nodes={postNodes} browseMoreHref='/archive/' />
        )}
      </Container>
    </Layout>
  );
};

export default IndexPage;

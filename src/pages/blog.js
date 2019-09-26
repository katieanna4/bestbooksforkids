import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import BlogPost from "../components/BlogPost"
import Layout from "../components/layout"

import SEO from "../components/seo"
import BlogHeader from "../components/BlogHeader"
import blogStyles from "./blog.module.scss"

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(sort: { fields: published, order: DESC }) {
        edges {
          node {
            slug
            title
            mainImage {
              file {
                url
              }
            }
            shortDescription
            published(fromNow: true)
            tags
            category
          }
        }
      }
      allContentfulCategories(
        sort: { fields: [category, subCategories___subCategories], order: ASC }
      ) {
        edges {
          node {
            category
            subCategories {
              subCategories
            }
            tags {
              tags
            }
          }
        }
      }
    }
  `)

  return (
    <Layout page="blog" header="Blog">
      <SEO title="Blog" />
      <div className={blogStyles.container}>
        <BlogHeader
          blogPosts={data.allContentfulBlogPost.edges}
          categories={data.allContentfulCategories}
        />

        {/* <ul>
          {data.allContentfulBlogPost.edges.map(index => {
            return <BlogPost post={index} />
          })}
        </ul> */}
      </div>
    </Layout>
  )
}

export default BlogPage

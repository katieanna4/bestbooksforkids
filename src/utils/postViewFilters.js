import { array } from "prop-types"

const postViewFilters = {
  getCategory: (postArr, category) => {
    let results = []

    postArr.forEach(index => {
      console.log(index)
      const post = new Object(index)
      if (typeof post.node.category === "string") {
        post.node.category = post.node.category.split(", ")
      }

      if (post.node.category.includes(category)) {
        results.push(post)
      }
    })

    return results
  },

  searchArrayString: (array, term) => {
    console.log(array)
    let results = false
    array.forEach(index => {
      let string = new String(index)

      if (string.search(term.toLowerCase()) >= 0) {
        console.log("successful match")
        return (results = true)
      }
    })
    return results
  },

  searchPosts: (postArr, search) => {
    let results = []

    console.log(postArr)
    postArr.forEach(index => {
      const post = new Object(index)

      if (typeof post.node.category === "string") {
        post.node.category = post.node.category.split(", ")
      }

      if (typeof post.node.tags === "string") {
        post.node.tags = post.node.tags.split(", ")
      }

      let categories = []
      let lowerCaseTags = []

      if (post.node.category) {
        post.node.category.map(index => {
          categories.push(index.toLowerCase())
        })
      }

      if (post.node.tags) {
        post.node.tags.map(index => {
          lowerCaseTags.push(index.toLowerCase())
        })
      }

      if (categories.includes(search.toLowerCase())) {
        results.push(post)
      } else if (post.node.title.toLowerCase().includes(search.toLowerCase())) {
        results.push(post)
      } else if (lowerCaseTags.includes(search.toLowerCase())) {
        console.log("match found")
        results.push(post)
      } else if (postViewFilters.searchArrayString(categories, search)) {
        results.push(post)
      } else if (postViewFilters.searchArrayString(lowerCaseTags, search)) {
        results.push(post)
      }
    })

    return results
  },
}

export default postViewFilters

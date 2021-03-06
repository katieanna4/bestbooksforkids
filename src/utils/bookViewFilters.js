import { array } from "prop-types"

const bookViewFilters = {
  getCategory: (bookArr, category, type) => {
    let results = []

    bookArr.forEach(index => {
      const book = new Object(index)

      if (typeof book.node.category === "string") {
        book.node.category = book.node.category.split(", ")
      }

      let bookCategories = []
      book.node.category.forEach(book => {
        bookCategories.push(book.trim())
      })
      if (bookCategories.includes(category.trim())) {
        results.push(book)
      }
    })

    return results
  },

  searchArrayString: (array, term) => {
    let results = false
    array.forEach(index => {
      let string = new String(index)

      if (string.search(term.toLowerCase()) >= 0) {
        return (results = true)
      }
    })
    return results
  },

  searchBooks: (bookArr, search) => {
    let results = []

    bookArr.forEach(index => {
      const book = new Object(index)

      if (typeof book.node.category === "string") {
        book.node.category = book.node.category.split(", ")
      }

      if (typeof book.node.tags === "string") {
        book.node.tags = book.node.tags.split(", ")
      }

      let categories = []
      let lowerCaseTags = []

      if (book.node.category) {
        book.node.category.map(index => {
          categories.push(index.toLowerCase())
        })
      }

      if (book.node.tags) {
        book.node.tags.map(index => {
          lowerCaseTags.push(index.toLowerCase())
        })
      }

      if (categories.includes(search.toLowerCase())) {
        results.push(book)
      } else if (
        book.node.bookTitle.toLowerCase().includes(search.toLowerCase())
      ) {
        results.push(book)
      } else if (
        book.node.author.toLowerCase().includes(search.toLowerCase())
      ) {
        results.push(book)
      } else if (lowerCaseTags.includes(search.toLowerCase())) {
        results.push(book)
      }
    })

    return results
  },
}

export default bookViewFilters

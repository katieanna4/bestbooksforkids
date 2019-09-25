import { array } from "prop-types"

const bookViewFilters = {
  getCategory: (bookArr, category) => {
    console.log("this filter function is running")
    console.log(bookArr)
    let results = []

    bookArr.forEach(index => {
      const book = new Object(index)
      if (typeof book.node.category === "string") {
        book.node.category = book.node.category.split(", ")
      }

      if (book.node.category.includes(category)) {
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
        console.log("successful match")
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
        console.log("match found")
        results.push(book)
      } else if (bookViewFilters.searchArrayString(categories, search)) {
        results.push(book)
      } else if (bookViewFilters.searchArrayString(lowerCaseTags, search)) {
        results.push(book)
      }
    })

    return results
  },
}

export default bookViewFilters

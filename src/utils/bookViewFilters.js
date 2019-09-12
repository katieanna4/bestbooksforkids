const bookViewFilters = {
  getCategory: (bookArr, category) => {
    let results = []

    bookArr.forEach(index => {
      console.log(index)
      const book = new Object(index)
      if (typeof book.node.category === "string") {
        book.node.category = book.node.category.split(", ")
      }
      console.log(book)
      if (book.node.category.includes(category)) {
        results.push(book)
      }
    })
    console.log(results)
    return results
  },

  searchBooks: (bookArr, search) => {
    let results = []

    console.log(bookArr)
    bookArr.forEach(index => {
      const book = new Object(index)
      if (typeof book.node.category === "string") {
        book.node.category = book.node.category.split(", ")
      }

      let categories = []

      book.node.category.map(index => {
        categories.push(index.toLowerCase())
      })

      if (categories.includes(search.toLowerCase())) {
        console.log(book)
        results.push(book)
      } else if (
        book.node.bookTitle.toLowerCase().includes(search.toLowerCase())
      ) {
        console.log(book)
        results.push(book)
      } else if (
        book.node.author.toLowerCase().includes(search.toLowerCase())
      ) {
        console.log(book)
        results.push(book)
      }
    })

    return results
  },
}

export default bookViewFilters

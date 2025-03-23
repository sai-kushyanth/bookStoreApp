import Book from '../model/book.model.js';

export const getBook = async (req, res) => {
    try {
        const books = await Book.find(); // Use `await` to resolve the Promise
        res.status(200).json(books); // Send the retrieved books as JSON
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

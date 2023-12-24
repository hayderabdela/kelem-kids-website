// // Import necessary modules from 'react' instead of 'react-native'
// import React, { useState, useEffect } from 'react';
// import { View, Text, FlatList, TouchableOpacity } from 'react'; // Change the import path
// import axios from 'axios';

// const BookList = ({ history }) => {
//   const [books, setBooks] = useState([]);

//   useEffect(() => {
//     const fetchBooks = async () => {
//       try {
//         const response = await axios.get('http://localhost:5000/books/getAllBooks');
//         setBooks(response.data);
//       } catch (error) {
//         console.error('Error fetching books', error);
//       }
//     };

//     fetchBooks();
//   }, []);

//   const renderItem = ({ item }) => (
//     <TouchableOpacity onPress={() => history.push(`/pdfViewer/${item.pdfPath}`)}>
//       <View>
//         <Text>{item.title}</Text>
//         <Text>{item.author}</Text>
//       </View>
//     </TouchableOpacity>
//   );

//   return (
//     <View>
//       {books.length === 0 ? (
//         <Text>No books found</Text>
//       ) : (
//         <FlatList
//           data={books}
//           keyExtractor={(item) => item._id}
//           renderItem={renderItem}
//         />
//       )}
//     </View>
//   );
// };

// export default BookList;

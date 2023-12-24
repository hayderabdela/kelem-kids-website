// import React, { useState, useEffect } from 'react';
// import { View, Text, ActivityIndicator } from 'react';
// import { PDFReader } from 'react-native-pdf';
// import axios from 'axios';

// const PdfViewer = ({ route }) => {
//   const { pdfPath } = route.params;
//   const [loading, setLoading] = useState(true);
//   const [pdfUri, setPdfUri] = useState(null);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchPdf = async () => {
//       try {
//         const response = await axios.get(`http://localhost:5000/pdf/getPdf?path=${encodeURIComponent(pdfPath)}`);
//         setPdfUri(response.data.pdfUri);
//       } catch (error) {
//         console.error('Error fetching PDF', error);
//         setError('Error fetching PDF');
//       } finally {
//         setLoading(false);
//       }
//     };

//     if (pdfPath) {
//       fetchPdf();
//     } else {
//       setError('No PDF path available');
//       setLoading(false);
//     }
//   }, [pdfPath]);

//   return (
//     <View>
//       {loading ? (
//         <ActivityIndicator size="large" color="#0000ff" />
//       ) : error ? (
//         <Text>{error}</Text>
//       ) : pdfUri ? (
//         <>
//           <Text>PDF Viewer</Text>
//           <PDFReader source={{ uri: pdfUri }} />
//         </>
//       ) : (
//         <Text>No PDF path available</Text>
//       )}
//     </View>
//   );
// };

// export default PdfViewer;

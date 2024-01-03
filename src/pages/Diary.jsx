// import { Helmet } from 'react-helmet-async';
// import { useTranslation } from 'react-i18next';
// import  
// import DiaryAddProductForm from 'components/DiaryAddProductForm/DiaryAddProductForm';
// import { DiaryDateCalendar } from 'components/DiaryDateCalendar/DiaryDateCalendar';

// import DiaryProductsListItem from 'components/DiaryProductsListItem/DiaryProductsListItem';
// import { Container } from '@mui/system';
// import { useMediaQuery } from 'react-responsive';
// import { RightSideBar } from 'components/RightSideBar/RightSideBar';
 

// export default function DiaryPage() {
//   const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
  

//   return (
//     <section>
//       <Container>
//         <Helmet>
//           <title>{'Diary'}</title>
//         </Helmet>

//         {isMobile ? (
//           <>
//             <DiaryDateCalendar />
//             <DiaryProductsListItem />
//             <DiaryAddProductForm />
//           </>
//         ) : (
//           <>
//             <DiaryDateCalendar />
//             <DiaryAddProductForm />
//             <DiaryProductsListItem />
//           </>
//         )}
//       </Container>
//       <RightSideBar />
//     </section>
//   );
// }
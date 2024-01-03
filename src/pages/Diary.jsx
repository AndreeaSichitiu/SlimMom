import { Box} from '@mui/material';
import { DiaryDateCalendar } from 'components/DiaryDate/DiaryDate';
import { RightSideBar } from 'components/RightSideBar/RightSideBar';

const Diary = () => {
  return (
    <section>
      <div>
        <DiaryDateCalendar />
      </div>
      <Box display="flex" height="100vh" marginTop="-145px">
        <RightSideBar />
      </Box>
    </section>
  );
};

export default Diary;

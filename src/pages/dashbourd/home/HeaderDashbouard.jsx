import { Box } from '@mui/material'
import DashHeader from '../../../components/dashbourd/dashHeader/DashHeader'

const HeaderDashboard = () => {
  return (
    <div>
        <DashHeader />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        </Box>

    </div>
  )
}

export default HeaderDashboard
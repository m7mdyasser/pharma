import { Stack } from '@mui/material'
import AddCategory from '../../../components/dashbourd/caregory/AddCategory'
import CategoryData from '../../../components/dashbourd/caregory/CategoryData'

const CategoryPage = () => {
  return (
    <Stack sx={{flexDirection: {xs: "column", md: "row"}}} gap={8} >
      <AddCategory />
      <CategoryData />
    </Stack>
  )
}

export default CategoryPage
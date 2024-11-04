import {

  Stack,

} from "@mui/material";
import PharmacistRegister from "../../../components/dashbourd/pharmacist/PharmacistRegister";
import PharmacistData from "../../../components/dashbourd/pharmacist/PharmacistData";





export default function AccountParmacist() {

  return (
    <>
      <Stack sx={{flexDirection: {xs: "column", md: "row"}}}>
        <PharmacistRegister />
        <PharmacistData />
      </Stack>
    </>
  );
}

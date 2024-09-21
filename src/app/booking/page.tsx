import DateReserve from "@/components/DateReserve"
import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material"

export default function Booking() {
    return(
        <main className="w-[100%] flex flex-col items-center space-y-4">
            <div className="mt-10 text-xl font-medium">Vaccine Booking</div>
            <TextField id="Name-Lastname" name="Name-Lastname" label="Name-Lastname" variant="standard" />
            <TextField id="Citizen ID" name="Citizen ID" label="Citizen ID" variant="standard" />
            
            <FormControl>
                <InputLabel id="hospital">Hospital</InputLabel>
                <Select labelId="hospital" variant="standard" name="hospital" id="hospital" className="h-[2em] w-[200px]">
                    <MenuItem value="Chula">Chulalongkorn Hospital</MenuItem>
                    <MenuItem value="Rajavithi">Rajavithi Hospital</MenuItem>
                    <MenuItem value="Thammasat">Thammasat University Hospital</MenuItem>
                </Select>
            </FormControl>

            <DateReserve/>

            <Button variant="contained" name="Book Vaccine">Book Vaccine</Button>
        </main>
    )
}
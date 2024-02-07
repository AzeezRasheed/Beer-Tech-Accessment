import React, { useContext, useState } from "react";
import {
  FormControl,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
} from "@mui/material";
import ThemeContext from "@/themes/ThemeContext";

const sortOptions = ["price : low to high", "price : high to low"];

const HandleSortingOptions = ({ onSortChange }) => {
  const [sortOption, setSortOption] = useState("price : low to high");

  const handleSortChange = (event) => {
    const selectedSortOption = event.target.value;
    setSortOption(selectedSortOption);
    onSortChange(selectedSortOption);
  };
  const { theme } = useContext(ThemeContext);

  return (
    <div className="gap-4 flex items-center flex-wrap">
      <h2 className="text-[16px] font-[400] font-OpenSans">Sort by:</h2>

      <FormControl
        sx={{ width: "194px", color: theme === "dark" ? "#48cae4" : "#000" }}
        size="small"
      >
        <InputLabel id="sort-list-name-label">Sort Option</InputLabel>
        <Select
          labelId="sort-list-name-label"
          id="sort-list-name"
          value={sortOption}
          onChange={handleSortChange}
          // color={theme === "dark" ? "#48cae4" : "#000"}
          sx={{ color: theme === "dark" ? "#48cae4" : "#000" }}
          input={<OutlinedInput label="Sort Option" />}
        >
          {sortOptions.map((option) => (
            <MenuItem
              color={theme === "dark" ? "#48cae4" : "#000"}
              key={option}
              value={option}
            >
              {option}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default HandleSortingOptions;
